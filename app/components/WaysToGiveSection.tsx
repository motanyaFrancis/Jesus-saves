// components/WaysToGiveSection.tsx

import React from 'react';

const waysToGive = [
  {
    title: 'Bank Deposit / Transfer',
    description: (
      <>
        You may deposit or transfer your offerings and tithes directly to our church bank account:
        <br /><br />
        <span className="font-semibold">Bank:</span> Kenya Commercial Bank (KCB) <br />
        <span className="font-semibold">Account Name:</span> SDA Church Karen Community<br />
        <span className="font-semibold">Account Number:</span> 1254375376<br />
        <span className="font-semibold">Branch:</span> KCB Karen<br />
        <span className="font-semibold">Branch Code:</span> 01340<br />
        <span className="font-semibold">Swift Code:</span>  KCBLKENX<br />
        <br />
        After the transaction, kindly email your payment confirmation or details to:{' '}
        <a href="mailto:treasurer@sdackc.org" className="text-blue-600 hover:underline">
          info@sdackc.org
        </a>
      </>
    ),
  },
  {
    title: 'M-Pesa PayBill',
    description: (
      <>
        You can also conveniently give via M-Pesa PayBill:
        <br /><br />
        <span className="font-semibold">PayBill Number:</span> 4061417<br />
        <span className="font-semibold">Account:</span> the living word<br />
        <br /><br />
        After giving, kindly notify us by sending payment details to:{' '}
        <a href="mailto:info@sdackc.org" className="text-blue-600 hover:underline">
          info@sdackc.org
        </a>
      </>
    ),
  },
  {
    title: 'Cash / Cheque at Church Office',
    description: (
      <>
        You are welcome to visit our church office to make your donations via cash or cheque.
        <br /><br />
        <span className="font-semibold">Location:</span> Seventh-day Adventist Church Karen Community<br />
        Mukoma Rd Off Magadi Road, Nairobi, Kenya
        <br />
        <br />
        Office Hours: Monday - Friday, 9:00 AM to 5:00 PM
      </>
    ),
  },
  {
    title: 'Need Assistance?',
    description: (
      <>
        If you need help or more information on giving, please reach out to:
        <br /><br />
        <span className="font-semibold">Treasurer’s Office:</span><br />
        Phone:{' '}
        <a href="tel:+254712345678" className="text-blue-600 hover:underline">
          {/* +254 712 345 678 */}
        </a>
        <br />
        Email:{' '}
        <a href="mailto:treasury@sdackc.org" className="text-blue-600 hover:underline">
          treasury@sdackc.org
        </a>
      </>
    ),
  },
];

const WaysToGiveSection: React.FC = () => {
  return (
    <section className="bg-rose-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-normal text-gray-50 mb-12 text-center md:text-left">
          Ways to <span className="font-semibold">Give</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {waysToGive.map((way, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{way.title}</h2>
              <p className="text-gray-700">{way.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToGiveSection;
