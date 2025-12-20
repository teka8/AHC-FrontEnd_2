import { useState } from 'react';
import { faqGroups } from '../../data/faq';

interface FaqSectionProps {
  onQuestionSelect: (question: string, answer: string) => void;
}

export default function FaqSection({ onQuestionSelect }: FaqSectionProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (groupName: string) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

  return (
    <div className="p-4 bg-gray-50 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Frequently Asked Questions</h3>
      <div className="space-y-2">
        {faqGroups.map((group) => (
          <div key={group.name} className="border rounded-lg bg-white">
            <button
              onClick={() => toggleGroup(group.name)}
              className="w-full flex justify-between items-center p-3 text-left font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              <span>{group.name}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openGroup === group.name ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openGroup === group.name && (
              <div className="p-3 border-t border-gray-200">
                <ul className="space-y-2">
                  {group.questions.map((faq, index) => (
                    <li key={index}>
                                  <button
                                    onClick={() => onQuestionSelect(faq.question, faq.answer)}
                                    className="text-sm text-blue-600 hover:underline text-left"
                                  >                        {faq.question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
