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
      'Yes, you can make a donation over the phone by calling our toll-free number at 1-888-446-7388. Our team is available to assist you with your donation.',
  },
  {
    id: 2,
    question: 'Can I mail a check donation?',
    answer:
      'Absolutely. You can mail your check payable to "Hope Channel International, Inc." to: PO Box 4000, Silver Spring, MD 20914-6002 USA. Please include your name and address for a receipt.',
  },
  {
    id: 3,
    question: 'I would prefer to not share my information online; is there a form I can fill out to send my donation?',
    answer:
      'Yes, we understand your preference. You can download and print a donation form from our website, fill it out, and mail it to us along with your donation. The form is available in the "Ways to Give" section.',
  },
  {
    id: 4,
    question: 'Can I cancel my monthly donation?',
    answer:
      'Yes, you can cancel your monthly donation at any time. Please contact our donor relations team by phone at 1-888-446-7388 or email at fundraising@hopetv.org, and we will assist you with the cancellation.',
  },
  {
    id: 5,
    question: 'Can I update my Credit Card information?',
    answer:
      'To update your credit card information, please call our donor relations team at 1-888-446-7388. For security reasons, we do not recommend sending credit card details via email.',
  },
  {
    id: 6,
    question: 'What is Hope Channel’s Tax Identification Number?',
    answer:
      'Hope Channel International, Inc. is a 501(c)(3) non-profit organization. Our Tax Identification Number (EIN) can be provided upon request for tax purposes. Please contact us directly for this information.',
  },
  {
    id: 7,
    question: 'I don’t see my question answered and need further assistance with my donation, who can I contact?',
    answer:
      'If your question is not answered here or if you need further assistance, please feel free to contact our dedicated donor relations team. You can reach us by phone at 1-888-446-7388 or via email at fundraising@hopetv.org. We are happy to help!',
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