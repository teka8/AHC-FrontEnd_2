import { ReactNode } from 'react'
import { Check } from 'lucide-react'

interface Step {
  title: string
  description?: string
}

interface MultiStepFormProps {
  steps: Step[]
  currentStep: number
  children: ReactNode
}

export default function MultiStepForm({ steps, currentStep, children }: MultiStepFormProps) {
  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep
            const isCurrent = idx === currentStep
            const isUpcoming = idx > currentStep
            
            return (
              <div key={idx} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Circle */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mb-2 transition-colors ${
                      isCompleted
                        ? 'border-ahc-green bg-ahc-green text-white'
                        : isCurrent
                        ? 'border-ahc-green bg-white dark:bg-gray-900 text-ahc-green'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-400'
                    }`}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>
                  
                  {/* Label */}
                  <div className="text-center">
                    <div className={`text-xs md:text-sm font-medium ${isCurrent ? 'text-ahc-green' : 'text-gray-500'}`}>
                      {step.title}
                    </div>
                    {step.description && (
                      <div className="text-xs text-gray-400 hidden md:block">{step.description}</div>
                    )}
                  </div>
                </div>
                
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 mb-6 transition-colors ${
                      idx < currentStep ? 'bg-ahc-green' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  ></div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Form Content */}
      <div>{children}</div>
    </div>
  )
}
