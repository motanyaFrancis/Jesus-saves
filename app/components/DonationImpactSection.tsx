'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useDonateOverlay } from '@/components/DonateOverlayProvider';

const DonationImpactSection: React.FC = () => {
  const { open } = useDonateOverlay();

  const mpesaQrValue = 'https://www.sdackc.org/give-now/mpesa/living-word-series';
  


  return (
    <section className="flex max-w-7xl mx-auto flex-col lg:flex-row items-start lg:items-center justify-center p-8">
      {/* Left Section - Impact Description */}
      <div className="w-full max-w-7xl lg:w-2/3 p-4 lg:pr-16 mb-8 lg:mb-0">
        <h1 className="text-4xl font-medium text-gray-800 mb-6">
          Your gift makes an <span className="text-yellow-600 font-semibold">Impact!</span>
        </h1>

        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Your impact in our community
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2 font-bold text-base">
          <li>Evangelistic missions in Karen & beyond funded through your giving.</li>
          <li>Ongoing building and maintenance of church infrastructure.</li>
          <li>Supporting education, youth programs, and outreach ministries.</li>
        </ul>
      </div>

      {/* Right Section - QR Codes for Giving */}
      <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-8">
        <h3 className="text-xl font-semibold text-gray-800">Give via M-Pesa PayBill</h3>
        <QRCodeSVG
          value={mpesaQrValue}
          size={180}
          bgColor="#FFFFFF"
          fgColor="#000000"
          level="H"
        />
        <p className="text-gray-600 text-center text-sm">
          Scan this QR to <a href="https://www.sdackc.org/give-now/mpesa/living-word-series" className="text-blue-600 hover:underline">https://www.sdackc.org/give-now/mpesa/living-word-series</a>.
        </p>


        <button
          onClick={() => open()}
          className="w-full bg-rose-900 hover:bg-yellow-600 text-white font-semibold py-4 rounded shadow-md transition duration-200 uppercase text-center"
        >
          More Giving Options
        </button>
      </div>
    </section>
  );
};

export default DonationImpactSection;
