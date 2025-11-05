export interface Venture {
  id: number
  name: string
  logo?: string | null
  tagline?: string | null
  description?: string | null
  focus_area: 'mental-health' | 'telemedicine' | 'pharmaceuticals' | 'biotech' | 'medtech' | 'diagnostics' | 'health-tech' | 'other'
  stage: 'idea' | 'prototype' | 'early-stage' | 'growth' | 'scale'
  founded_year?: number | null
  country?: string | null
  website?: string | null
  social_links?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  
  // Team
  founders?: string | null
  team_size?: number | null
  
  // Progress
  funding_raised?: number | null
  patients_impacted?: number | null
  countries_reached?: number | null
  
  // Media
  pitch_video?: string | null
  demo_video?: string | null
  images?: string[]
  
  // Engagement
  votes_count?: number
  featured?: boolean
  status?: 'active' | 'graduated' | 'alumni'
  
  created_at?: string
  updated_at?: string
}

export interface VentureApplication {
  id?: number
  
  // Venture Info
  venture_name: string
  tagline?: string
  description: string
  focus_area: Venture['focus_area']
  stage: Venture['stage']
  founded_year?: number
  country: string
  website?: string
  
  // Contact Info
  contact_name: string
  contact_email: string
  contact_phone?: string
  
  // Team
  founders: string
  team_size?: number
  team_description?: string
  
  // Problem & Solution
  problem_statement: string
  solution_description: string
  target_market: string
  unique_value_proposition: string
  
  // Traction
  current_stage_description: string
  patients_served?: number
  revenue_generated?: number
  funding_raised?: number
  key_milestones?: string
  
  // Funding
  funding_sought?: number
  use_of_funds?: string
  
  // Documents
  pitch_deck?: File | string
  business_plan?: File | string
  financial_projections?: File | string
  
  // Additional
  why_apply: string
  additional_info?: string
  
  status?: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'rejected'
  submitted_at?: string
  created_at?: string
}

export interface VentureUpdate {
  id: number
  venture_id: number
  venture_name?: string
  venture_logo?: string
  title: string
  content: string
  update_type: 'milestone' | 'funding' | 'partnership' | 'product' | 'team' | 'general'
  media?: string[]
  likes_count?: number
  comments_count?: number
  created_at: string
}

export interface VentureFilters {
  focus_area?: Venture['focus_area'] | 'all'
  stage?: Venture['stage'] | 'all'
  country?: string
  search?: string
  featured?: boolean
  sort_by?: 'recent' | 'popular' | 'alphabetical'
}
