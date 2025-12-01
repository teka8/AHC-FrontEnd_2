import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { useCreateApplicationMutation, useSaveDraftApplicationMutation } from '../../features/healthInnovation/applicationsApi'
import MultiStepForm from '../../components/ui/MultiStepForm'
import FileUpload from '../../components/ui/FileUpload'
import { AlertCircle, CheckCircle2, Rocket } from 'lucide-react'

const steps = [
  { title: 'Basic Info', description: 'Venture details' },
  { title: 'Team', description: 'About your team' },
  { title: 'Solution', description: 'Problem & solution' },
  { title: 'Traction', description: 'Progress & funding' },
  { title: 'Documents', description: 'Upload files' },
]

const schema = z.object({
  venture_name: z.string().min(2, 'Venture name is required'),
  tagline: z.string().optional(),
  description: z.string().min(50, 'Please provide at least 50 characters'),
  focus_area: z.enum(['mental-health', 'telemedicine', 'pharmaceuticals', 'biotech', 'medtech', 'diagnostics', 'health-tech', 'other']),
  stage: z.enum(['idea', 'prototype', 'early-stage', 'growth', 'scale']),
  founded_year: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  country: z.string().min(2, 'Country is required'),
  website: z.string().url().optional().or(z.literal('')),
  
  contact_name: z.string().min(2, 'Contact name is required'),
  contact_email: z.string().email('Valid email required'),
  contact_phone: z.string().optional(),
  
  founders: z.string().min(5, 'Please describe your founders'),
  team_size: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  team_description: z.string().optional(),
  
  problem_statement: z.string().min(50, 'Please provide at least 50 characters'),
  solution_description: z.string().min(50, 'Please provide at least 50 characters'),
  target_market: z.string().min(20, 'Please describe your target market'),
  unique_value_proposition: z.string().min(30, 'Please describe your unique value'),
  
  current_stage_description: z.string().min(30, 'Please describe your current stage'),
  patients_served: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  revenue_generated: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  funding_raised: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  key_milestones: z.string().optional(),
  
  funding_sought: z.number().optional().or(z.nan()).transform(val => isNaN(val) ? undefined : val),
  use_of_funds: z.string().optional(),
  
  why_apply: z.string().min(50, 'Please provide at least 50 characters'),
  additional_info: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function VentureApplication() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [pitchDeck, setPitchDeck] = useState<File | null>(null)
  const [businessPlan, setBusinessPlan] = useState<File | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isFormDirty, setIsFormDirty] = useState(false) // Track if form has changes

  
  const [createApplication, { isLoading: isSubmitting }] = useCreateApplicationMutation()
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftApplicationMutation()
  
  const { register, handleSubmit, formState: { errors, isDirty }, watch, trigger } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur'
  })

  // Add this useEffect to log errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log('=== FORM VALIDATION ERRORS ===')
      console.log('Errors:', errors)
    }
  }, [errors])

  // Track form changes
    useEffect(() => {
      setIsFormDirty(isDirty || pitchDeck !== null || businessPlan !== null)
    }, [isDirty, pitchDeck, businessPlan])
  
    // Prevent browser reload/close when form has unsaved changes
    useEffect(() => {
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (isFormDirty && !showSuccess) {
          e.preventDefault()
          e.returnValue = '' // Required for Chrome
          return '' // Required for some browsers
        }
      }
  
      window.addEventListener('beforeunload', handleBeforeUnload)
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }, [isFormDirty, showSuccess])

  // Auto-save draft every 30 seconds
  useEffect(() => {
    const formValues = watch()
    const interval = setInterval(() => {
      if (Object.keys(formValues).length > 3) {
        saveDraft(formValues as any).catch(() => {})
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [watch, saveDraft])

  const validateCurrentStep = async () => {
    const fieldsToValidate: (keyof FormValues)[] = []
    
    if (currentStep === 0) {
      fieldsToValidate.push('venture_name', 'description', 'focus_area', 'stage', 'country', 'contact_name', 'contact_email')
    } else if (currentStep === 1) {
      fieldsToValidate.push('founders')
    } else if (currentStep === 2) {
      fieldsToValidate.push('problem_statement', 'solution_description', 'target_market', 'unique_value_proposition')
    } else if (currentStep === 3) {
      fieldsToValidate.push('current_stage_description', 'why_apply')
    }
    
    return await trigger(fieldsToValidate as any)
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const onSubmit = async (data: FormValues) => {
    console.log('Form submission started', data)
    setSubmitError(null)
    
    const formData = new FormData()
    
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, value.toString())
      }
    })
    
    if (pitchDeck) {
      formData.append('pitch_deck', pitchDeck)
      console.log('Pitch deck attached:', pitchDeck.name)
    }
    if (businessPlan) {
      formData.append('business_plan', businessPlan)
      console.log('Business plan attached:', businessPlan.name)
    }
    
    console.log('FormData entries:', Array.from(formData.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : 'File']))
    
    try {
      const result = await createApplication(formData).unwrap()
      console.log('Application submitted successfully:', result)
      setIsFormDirty(false) // Clear dirty state before showing success
      setShowSuccess(true)
    } catch (error: any) {
      console.error('Failed to submit application:', error)
      
      // Check for authentication error
      // if (error?.status === 401 || error?.originalStatus === 401) {
      //   setSubmitError('You must be logged in to submit an application. Redirecting to login...')
      //   setTimeout(() => navigate('/login'), 2000)
      //   return
      // }
      
      
      // Show user-friendly error message
      const errorMessage = error?.data?.message || error?.data?.error || error?.message || 'Failed to submit application. Please check all required fields and try again.'
      setSubmitError(errorMessage)
      
      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
          <img 
            src="/images/ahc-health-symbol.png" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
          />
        </div>
        
        <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 mb-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Application Submitted!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Thank you for applying. We'll review your application and get back to you soon.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Apply - Health Innovation & Entrepreneurship</title>
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          <div className="absolute right-0 top-1/4 translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Health Venture Application</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Complete all steps to submit your application
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto px-4 max-w-4xl py-12">

          {submitError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-900 dark:text-red-100">
                  <p className="font-semibold mb-1">Submission Error</p>
                  <p>{submitError}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <MultiStepForm steps={steps} currentStep={currentStep}>
              {/* Step 0: Basic Info */}
              {currentStep === 0 && (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-t-4 border-teal-500 shadow-xl space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Basic Information</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Venture Name *</label>
                    <input {...register('venture_name')} className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all" placeholder="Your Venture Name" />
                    {errors.venture_name && <p className="text-red-500 text-sm mt-1">{errors.venture_name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Tagline</label>
                    <input {...register('tagline')} className="w-full border rounded-lg px-4 py-2" placeholder="Brief tagline" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Description *</label>
                    <textarea {...register('description')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Describe your venture..." />
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Focus Area *</label>
                      <select {...register('focus_area')} className="w-full border rounded-lg px-4 py-2">
                        <option value="">Select...</option>
                        <option value="mental-health">Mental Health</option>
                        <option value="telemedicine">Telemedicine</option>
                        <option value="pharmaceuticals">Pharmaceuticals</option>
                        <option value="biotech">Biotech</option>
                        <option value="medtech">MedTech</option>
                        <option value="diagnostics">Diagnostics</option>
                        <option value="health-tech">Health Tech</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.focus_area && <p className="text-red-500 text-xs mt-1">{errors.focus_area.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Stage *</label>
                      <select {...register('stage')} className="w-full border rounded-lg px-4 py-2">
                        <option value="">Select...</option>
                        <option value="idea">Idea</option>
                        <option value="prototype">Prototype</option>
                        <option value="early-stage">Early Stage</option>
                        <option value="growth">Growth</option>
                        <option value="scale">Scale</option>
                      </select>
                      {errors.stage && <p className="text-red-500 text-xs mt-1">{errors.stage.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Country *</label>
                      <input {...register('country')} className="w-full border rounded-lg px-4 py-2" placeholder="e.g., Kenya" />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Founded Year</label>
                      <input {...register('founded_year', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" placeholder="2023" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Website</label>
                    <input {...register('website')} type="url" className="w-full border rounded-lg px-4 py-2" placeholder="https://..." />
                    {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>}
                  </div>

                  <hr className="my-6" />
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                  <div>
                    <label className="block text-sm font-medium mb-1">Contact Name *</label>
                    <input {...register('contact_name')} className="w-full border rounded-lg px-4 py-2" />
                    {errors.contact_name && <p className="text-red-500 text-xs mt-1">{errors.contact_name.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input {...register('contact_email')} type="email" className="w-full border rounded-lg px-4 py-2" />
                      {errors.contact_email && <p className="text-red-500 text-xs mt-1">{errors.contact_email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <input {...register('contact_phone')} className="w-full border rounded-lg px-4 py-2" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Team */}
              {currentStep === 1 && (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-t-4 border-green-500 shadow-xl space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Team Information</h2>

                  <div>
                    <label className="block text-sm font-medium mb-1">Founders *</label>
                    <textarea {...register('founders')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="List founders and their roles..." />
                    {errors.founders && <p className="text-red-500 text-xs mt-1">{errors.founders.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Team Size</label>
                    <input {...register('team_size', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Team Description</label>
                    <textarea {...register('team_description')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Describe your team's expertise..." />
                  </div>
                </div>
              )}

              {/* Step 2: Solution */}
              {currentStep === 2 && (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-t-4 border-teal-500 shadow-xl space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Problem & Solution</h2>

                  <div>
                    <label className="block text-sm font-medium mb-1">Problem Statement *</label>
                    <textarea {...register('problem_statement')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="What problem are you solving?" />
                    {errors.problem_statement && <p className="text-red-500 text-xs mt-1">{errors.problem_statement.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Solution Description *</label>
                    <textarea {...register('solution_description')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="How does your solution work?" />
                    {errors.solution_description && <p className="text-red-500 text-xs mt-1">{errors.solution_description.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Target Market *</label>
                    <textarea {...register('target_market')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="Who are your customers?" />
                    {errors.target_market && <p className="text-red-500 text-xs mt-1">{errors.target_market.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Unique Value Proposition *</label>
                    <textarea {...register('unique_value_proposition')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="What makes you different?" />
                    {errors.unique_value_proposition && <p className="text-red-500 text-xs mt-1">{errors.unique_value_proposition.message}</p>}
                  </div>
                </div>
              )}

              {/* Step 3: Traction */}
              {currentStep === 3 && (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-t-4 border-green-500 shadow-xl space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Traction & Funding</h2>

                  <div>
                    <label className="block text-sm font-medium mb-1">Current Stage Description *</label>
                    <textarea {...register('current_stage_description')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Describe your current progress..." />
                    {errors.current_stage_description && <p className="text-red-500 text-xs mt-1">{errors.current_stage_description.message}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Patients Served</label>
                      <input {...register('patients_served', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Revenue ($)</label>
                      <input {...register('revenue_generated', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Funding Raised ($)</label>
                      <input {...register('funding_raised', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Key Milestones</label>
                    <textarea {...register('key_milestones')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="List your achievements..." />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Funding Sought ($)</label>
                      <input {...register('funding_sought', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Use of Funds</label>
                    <textarea {...register('use_of_funds')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="How will you use the funding?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Why Apply? *</label>
                    <textarea {...register('why_apply')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Why are you applying to this program?" />
                    {errors.why_apply && <p className="text-red-500 text-xs mt-1">{errors.why_apply.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Additional Information</label>
                    <textarea {...register('additional_info')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="Anything else we should know?" />
                  </div>
                </div>
              )}

              {/* Step 4: Documents */}
              {currentStep === 4 && (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-t-4 border-teal-500 shadow-xl space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Upload Documents</h2>

                  <FileUpload
                    label="Pitch Deck"
                    accept=".pdf,.ppt,.pptx"
                    onChange={setPitchDeck}
                    value={pitchDeck}
                    required
                    helperText="Upload your pitch deck (PDF or PPT)"
                  />

                  <FileUpload
                    label="Business Plan"
                    accept=".pdf,.doc,.docx"
                    onChange={setBusinessPlan}
                    value={businessPlan}
                    helperText="Optional: Upload your business plan"
                  />

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-900 dark:text-blue-100">
                        <p className="font-semibold mb-1">Review Before Submitting</p>
                        <p>Please review all information before submitting. You'll receive a confirmation email once submitted.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-gray-700 dark:text-gray-300"
                >
                  Previous
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !pitchDeck}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>

              {/* Auto-save indicator */}
              {isSavingDraft && (
                <p className="text-xs text-gray-500 text-center mt-2">Saving draft...</p>
              )}
            </MultiStepForm>
          </form>
        </div>
      </div>
    </>
  )
}
