import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is MyTender?",
    answer:
      "MyTender is a platform that connects businesses with tenders and opportunities tailored to their needs.",
  },
  {
    question: "How can I register my company?",
    answer:
      "Click the 'Register' button on the homepage and fill out your company details. Once verified, you can access tenders immediately.",
  },
  {
    question: "Is there a fee for using MyTender?",
    answer:
      "Basic access is free. Premium plans with additional features are available for a monthly subscription.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@mytender.com or through the help center in your dashboard.",
  },
]

export default function FaqForCompany() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className=" mx-auto px-4 py-12 lg:py-28 bg-providerSecondary   rounded-lg ">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-gray-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
