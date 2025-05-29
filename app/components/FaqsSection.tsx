// components/FaqsSection.tsx
'use client'

import React, { useState } from 'react';

// Define the type for an FAQ item
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Can I make a donation over the phone?',
    answer:
      'Yes, you can make a donation over the phone by calling our local number at **[Your Phone Number Here]**. Our team is ready to assist you with your donation.',
  },
  {
    id: 2,
    question: 'Can I mail a check donation?',
    answer:
      'Absolutely. You can mail your check payable to SDA Karen Community Trust to: P.O Box 15973 - 00502 Karen, Nairobi, Mukoma Road. Please include your name and address so we can send you a receipt.',
  },
  {
    id: 3,
    question: 'I would prefer not to share my information online; is there a form I can fill out to send my donation?',
    answer:
      'Yes, we understand. You can download and print a donation form from our website in the "[Specific Section Name, e.g., Ways to Give or Support Us]" section. Fill it out and mail it to us along with your donation.',
  },
  {
    id: 4,
    question: 'Can I cancel my monthly donation?',
    answer:
      'Yes, you can cancel your monthly donation at any time. Please contact our donor relations team by phone at **[Your Phone Number Here]** or email at **[Your Email Address Here]**, and we will gladly assist you with the cancellation.',
  },
  {
    id: 5,
    question: 'Can I update my Credit Card information?',
    answer:
      'To update your credit card information, please call our donor relations team at **[Your Phone Number Here]**. For your security, we do not recommend sending credit card details via email.',
  },
  {
    id: 6,
    question: 'What is SDA Karen Community Trust\'s legal status/identification?',
    answer:
      'SDA Karen Community Trust is a registered Trust [mention your legal status, e.g., registered under Kenyan law]. Our registration number can be provided upon request. Please contact us directly for this information.',
  },
  {
    id: 7,
    question: 'I don’t see my question answered and need further assistance with my donation; whom can I contact?',
    answer:
      'If your question isn’t answered here or if you need further assistance, please feel free to contact our dedicated donor relations team. You can reach us by phone at **[Your Phone Number Here]** or via email at **[Your Email Address Here]**. We are happy to help!',
  },
];

const FaqsSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/images/faqs_background.jpg')" }} // Ensure you have this image in your public/images folder
    >
      <div className="absolute inset-0 bg-neutral-900 opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-2 md:px-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-left">FAQs</h1>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-neutral-800 rounded-md shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-white hover:bg-neutral-700 transition-colors duration-200"
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.question}
                <span className="text-2xl ml-4">
                  {openFaqId === faq.id ? '–' : '+'}
                </span>
              </button>
              {openFaqId === faq.id && (
                <div className="p-4 pt-0 text-gray-300 text-lg font-medium">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;