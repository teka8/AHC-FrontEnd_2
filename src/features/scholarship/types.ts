export interface Scholarship {
  id: number
  title: string
  description: string
  program_type: 'undergraduate' | 'graduate' | 'postgraduate' | 'research' | 'fellowship'
  eligibility_criteria: string
  required_documents: string[]
  benefits: string[]
  coverage: string
  amount?: number
  deadline: string
  application_start_date?: string
  status: 'upcoming' | 'open' | 'closed'
  available_slots?: number
  created_at?: string
  updated_at?: string
}

export interface ScholarshipApplication {
  id?: number
  scholarship_id: number
  
  // Personal Information
  first_name: string
  last_name: string
  email: string
  phone: string
  date_of_birth: string
  nationality: string
  country_of_residence: string
  address?: string
  
  // Academic Background
  current_education_level: 'high-school' | 'undergraduate' | 'graduate' | 'postgraduate' | 'other'
  institution_name: string
  field_of_study: string
  gpa?: string
  graduation_year?: number
  academic_achievements?: string
  
  // Research/Concept (if applicable)
  research_area?: string
  concept_note?: string
  research_proposal?: string
  
  // Motivation
  motivation_letter: string
  career_goals: string
  why_this_scholarship: string
  
  // Financial Need
  financial_need_description?: string
  current_funding_sources?: string
  
  // References
  reference_1_name?: string
  reference_1_email?: string
  reference_1_relationship?: string
  reference_2_name?: string
  reference_2_email?: string
  reference_2_relationship?: string
  
  // Documents
  cv?: File | string
  transcript?: File | string
  motivation_letter_file?: File | string
  recommendation_letter_1?: File | string
  recommendation_letter_2?: File | string
  id_document?: File | string
  proof_of_enrollment?: File | string
  
  // Additional
  additional_info?: string
  
  // Status
  status?: 'draft' | 'submitted' | 'under-review' | 'shortlisted' | 'interviewed' | 'accepted' | 'rejected' | 'withdrawn'
  submitted_at?: string
  reviewed_at?: string
  decision_at?: string
  created_at?: string
  updated_at?: string
}

export interface ApplicationEvaluation {
  id: number
  application_id: number
  reviewer_id: number
  reviewer_name?: string
  
  // Scoring criteria (0-10 scale)
  academic_performance_score: number
  motivation_score: number
  research_quality_score: number
  financial_need_score: number
  overall_score: number
  
  // Comments
  strengths?: string
  weaknesses?: string
  recommendation: 'strong-accept' | 'accept' | 'waitlist' | 'reject'
  notes?: string
  
  created_at: string
  updated_at?: string
}

export interface ApplicationStatus {
  application_id: number
  status: ScholarshipApplication['status']
  timestamp: string
  note?: string
  updated_by?: string
}

export interface ScholarshipAnalytics {
  total_applications: number
  by_status: Record<ScholarshipApplication['status'], number>
  by_nationality: Record<string, number>
  by_education_level: Record<string, number>
  by_field_of_study: Record<string, number>
  average_gpa?: number
  acceptance_rate?: number
  applications_over_time: Array<{ date: string; count: number }>
  top_institutions: Array<{ name: string; count: number }>
}
