import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCreateScholarshipApplicationMutation, useSaveDraftScholarshipApplicationMutation } from '../../features/scholarship/applicationsApi'
import { useGetScholarshipsQuery } from '../../features/scholarship/scholarshipsApi'
import MultiStepForm from '../../components/ui/MultiStepForm'
import FileUpload from '../../components/ui/FileUpload'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Personal Info', description: 'Basic details' },
  { title: 'Academic', description: 'Education history' },
  { title: 'Motivation', description: 'Goals & reasons' },
  { title: 'Documents', description: 'Upload files' },
]

const schema = z.object({
  scholarship_id: z.number(),
  first_name: z.string().min(2, 'First name is required'),
  last_name: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(5, 'Phone number is required'),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  nationality: z.string().min(2, 'Nationality is required'),
  country_of_residence: z.string().min(2, 'Country is required'),
  address: z.string().optional(),
  
  current_education_level: z.enum(['high-school', 'undergraduate', 'graduate', 'postgraduate', 'other']),
  institution_name: z.string().min(2, 'Institution name is required'),
  field_of_study: z.string().min(2, 'Field of study is required'),
  gpa: z.string().optional(),
  graduation_year: z.number().int().gt(1900, 'Year must be greater than 1900').optional(),
  academic_achievements: z.string().optional(),
  
  research_area: z.string().optional(),
  concept_note: z.string().optional(),
  
  motivation_letter: z.string().min(100, 'Please provide at least 100 characters'),
  career_goals: z.string().min(50, 'Please provide at least 50 characters'),
  why_this_scholarship: z.string().min(50, 'Please provide at least 50 characters'),
  
  financial_need_description: z.string().optional(),
  
  reference_1_name: z.string().optional(),
  reference_1_email: z.string().email().optional().or(z.literal('')),
  reference_2_name: z.string().optional(),
  reference_2_email: z.string().email().optional().or(z.literal('')),
  
  additional_info: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ApplicationForm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const scholarshipId = searchParams.get('id')
  
  const [currentStep, setCurrentStep] = useState(0)
  const [cv, setCv] = useState<File | null>(null)
  const [transcript, setTranscript] = useState<File | null>(null)
  const [motivationLetterFile, setMotivationLetterFile] = useState<File | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isFormDirty, setIsFormDirty] = useState(false) // Track if form has changes

  
  const { data: scholarships = [] } = useGetScholarshipsQuery()
  const [createApplication, { isLoading: isSubmitting }] = useCreateScholarshipApplicationMutation()
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftScholarshipApplicationMutation()
  
  const { register, handleSubmit, formState: { errors, isDirty  }, watch, trigger, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      scholarship_id: scholarshipId ? parseInt(scholarshipId) : undefined,
    }
  })

  // Track form changes
  useEffect(() => {
    setIsFormDirty(isDirty || cv !== null || transcript !== null || motivationLetterFile !== null)
  }, [isDirty, cv, transcript, motivationLetterFile])

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
      if (Object.keys(formValues).length > 5) {
        saveDraft(formValues as any).catch(() => {})
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [watch, saveDraft])

  const validateCurrentStep = async () => {
    const fieldsToValidate: (keyof FormValues)[] = []
    
    if (currentStep === 0) {
      fieldsToValidate.push('first_name', 'last_name', 'email', 'phone', 'date_of_birth', 'nationality', 'country_of_residence')
    } else if (currentStep === 1) {
      fieldsToValidate.push('current_education_level', 'institution_name', 'field_of_study', 'graduation_year')
    } else if (currentStep === 2) {
      fieldsToValidate.push('motivation_letter', 'career_goals', 'why_this_scholarship')
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
    console.log('Scholarship form submission started', data)
    setSubmitError(null)
    
    const formData = new FormData()
    
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        formData.append(key, value.toString())
      }
    })
    
    if (cv) {
      formData.append('cv', cv)
      console.log('CV attached:', cv.name)
    }
    if (transcript) {
      formData.append('transcript', transcript)
      console.log('Transcript attached:', transcript.name)
    }
    if (motivationLetterFile) {
      formData.append('motivation_letter_file', motivationLetterFile)
      console.log('Motivation letter attached:', motivationLetterFile.name)
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
      if (error?.status === 401 || error?.originalStatus === 401) {
        setSubmitError('You must be logged in to submit an application. Redirecting to login...')
        setIsFormDirty(false) // Clear dirty state before redirecting
        setTimeout(() => navigate('/login'), 2000)
        return
      }
      
      // Show user-friendly error message
      const errorMessage = error?.data?.message || error?.data?.error || error?.message || 'Failed to submit application. Please check all required fields and try again.'
      setSubmitError(errorMessage)
      
      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center max-w-md">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Thank you for applying. You'll receive a confirmation email shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Apply - Scholarship Portal</title>
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Scholarship Application</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Complete all steps to submit your application
          </p>

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
              {/* Step 0: Personal Info */}
              {currentStep === 0 && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border space-y-4">
                  <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                  
                  {/* Scholarship Selection */}
                  {!scholarshipId && scholarships.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Select Scholarship *</label>
                      <select {...register('scholarship_id', { valueAsNumber: true })} className="w-full border rounded-lg px-4 py-2">
                        <option value="">Choose a scholarship...</option>
                        {scholarships.filter(s => s.status === 'open').map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                      {errors.scholarship_id && <p className="text-red-500 text-xs mt-1">{errors.scholarship_id.message}</p>}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name *</label>
                      <input {...register('first_name')} className="w-full border rounded-lg px-4 py-2" />
                      {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name *</label>
                      <input {...register('last_name')} className="w-full border rounded-lg px-4 py-2" />
                      {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input {...register('email')} type="email" className="w-full border rounded-lg px-4 py-2" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Phone *</label>
                      <input {...register('phone')} className="w-full border rounded-lg px-4 py-2" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Date of Birth *</label>
                      <input {...register('date_of_birth')} type="date" className="w-full border rounded-lg px-4 py-2" />
                      {errors.date_of_birth && <p className="text-red-500 text-xs mt-1">{errors.date_of_birth.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Nationality *</label>
                      <input {...register('nationality')} className="w-full border rounded-lg px-4 py-2" />
                      {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Country of Residence *</label>
                      <input {...register('country_of_residence')} className="w-full border rounded-lg px-4 py-2" />
                      {errors.country_of_residence && <p className="text-red-500 text-xs mt-1">{errors.country_of_residence.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <textarea {...register('address')} rows={2} className="w-full border rounded-lg px-4 py-2" />
                  </div>
                </div>
              )}

              {/* Step 1: Academic */}
              {currentStep === 1 && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border space-y-4">
                  <h2 className="text-2xl font-semibold mb-6">Academic Background</h2>

                  <div>
                    <label className="block text-sm font-medium mb-1">Current Education Level *</label>
                    <select {...register('current_education_level')} className="w-full border rounded-lg px-4 py-2">
                      <option value="">Select...</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.current_education_level && <p className="text-red-500 text-xs mt-1">{errors.current_education_level.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Institution Name *</label>
                    <input {...register('institution_name')} className="w-full border rounded-lg px-4 py-2" placeholder="University/College name" />
                    {errors.institution_name && <p className="text-red-500 text-xs mt-1">{errors.institution_name.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Field of Study *</label>
                      <input {...register('field_of_study')} className="w-full border rounded-lg px-4 py-2" placeholder="e.g., Medicine, Public Health" />
                      {errors.field_of_study && <p className="text-red-500 text-xs mt-1">{errors.field_of_study.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">GPA/Grade</label>
                      <input {...register('gpa')} className="w-full border rounded-lg px-4 py-2" placeholder="e.g., 3.8/4.0" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Expected/Actual Graduation Year</label>
                    <input {...register('graduation_year', { valueAsNumber: true })} type="number" className="w-full border rounded-lg px-4 py-2" placeholder="2024" />
                    {errors.graduation_year && <p className="text-red-500 text-xs mt-1">{errors.graduation_year.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Academic Achievements</label>
                    <textarea {...register('academic_achievements')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="List any awards, honors, or notable achievements..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Research Area (if applicable)</label>
                    <input {...register('research_area')} className="w-full border rounded-lg px-4 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Concept Note (if applicable)</label>
                    <textarea {...register('concept_note')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Brief description of your research/project concept..." />
                  </div>
                </div>
              )}

              {/* Step 2: Motivation */}
              {currentStep === 2 && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border space-y-4">
                  <h2 className="text-2xl font-semibold mb-6">Motivation & Goals</h2>

                  <div>
                    <label className="block text-sm font-medium mb-1">Motivation Letter *</label>
                    <textarea {...register('motivation_letter')} rows={6} className="w-full border rounded-lg px-4 py-2" placeholder="Explain your motivation for pursuing this scholarship..." />
                    {errors.motivation_letter && <p className="text-red-500 text-xs mt-1">{errors.motivation_letter.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Career Goals *</label>
                    <textarea {...register('career_goals')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Describe your career aspirations..." />
                    {errors.career_goals && <p className="text-red-500 text-xs mt-1">{errors.career_goals.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Why This Scholarship? *</label>
                    <textarea {...register('why_this_scholarship')} rows={4} className="w-full border rounded-lg px-4 py-2" placeholder="Why are you applying for this specific scholarship?" />
                    {errors.why_this_scholarship && <p className="text-red-500 text-xs mt-1">{errors.why_this_scholarship.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Financial Need Description</label>
                    <textarea {...register('financial_need_description')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="Optional: Describe your financial situation..." />
                  </div>

                  <hr className="my-6" />
                  <h3 className="text-xl font-semibold mb-4">References (Optional)</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Reference 1 - Name</label>
                      <input {...register('reference_1_name')} className="w-full border rounded-lg px-4 py-2" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Reference 1 - Email</label>
                      <input {...register('reference_1_email')} type="email" className="w-full border rounded-lg px-4 py-2" />
                      {errors.reference_1_email && <p className="text-red-500 text-xs mt-1">{errors.reference_1_email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Reference 2 - Name</label>
                      <input {...register('reference_2_name')} className="w-full border rounded-lg px-4 py-2" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Reference 2 - Email</label>
                      <input {...register('reference_2_email')} type="email" className="w-full border rounded-lg px-4 py-2" />
                      {errors.reference_2_email && <p className="text-red-500 text-xs mt-1">{errors.reference_2_email.message}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Documents */}
              {currentStep === 3 && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border space-y-4">
                  <h2 className="text-2xl font-semibold mb-6">Upload Documents</h2>

                  <FileUpload
                    label="CV/Resume"
                    accept=".pdf,.doc,.docx"
                    onChange={setCv}
                    value={cv}
                    required
                    helperText="Upload your CV or resume (PDF or DOC)"
                  />

                  <FileUpload
                    label="Academic Transcript"
                    accept=".pdf"
                    onChange={setTranscript}
                    value={transcript}
                    required
                    helperText="Upload your official transcript (PDF)"
                  />

                  <FileUpload
                    label="Motivation Letter (Optional)"
                    accept=".pdf,.doc,.docx"
                    onChange={setMotivationLetterFile}
                    value={motivationLetterFile}
                    helperText="Optional: Upload a separate motivation letter file"
                  />

                  <div>
                    <label className="block text-sm font-medium mb-1">Additional Information</label>
                    <textarea {...register('additional_info')} rows={3} className="w-full border rounded-lg px-4 py-2" placeholder="Anything else we should know?" />
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-900 dark:text-blue-100">
                        <p className="font-semibold mb-1">Review Before Submitting</p>
                        <p>You'll receive a confirmation email once submitted. Our team will review your application and contact you.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Previous
                </button>

                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-ahc-green text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !cv || !transcript}
                    className="px-6 py-2 bg-ahc-green text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
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
