// components/ImpactPartnerSection.tsx
'use client'

import React, { useState } from 'react';
import { useDonateOverlay } from './DonateOverlayProvider'; // Assuming this path or adjust

const ImpactPartnerSection: React.FC = () => {
  const { open } = useDonateOverlay();
  const [impactAmount, setImpactAmount] = useState<number>(600); // State for the editable amount

  const handleDonateClick = () => {
    open(impactAmount, 'monthly'); // Pass the amount and type to the overlay
  };

  return (
    <section
      className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hands_background.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto gap-8">
        {/* Left Text Block */}
        <div className="w-full lg:w-1/2 text-white p-4">
          <p className="text-xl font-semibold mb-2">Become an</p>
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Impact Partner</h2>
          <p className="text-lg font-semibold leading-relaxed">
            Become an Impact Partner today through regular monthly giving and join a mission that reaches far beyond what&apos;s possible alone. Your consistent support helps us share the message of Jesus and eternal hope through our radio station, streaming platforms, and music studio, making a powerful impact. You&apos;re helping us reach our dream: for every person to access the message of hope and experience its transforming power.
          </p>
        </div>

        {/* Right Text Block */}
        <div className="w-full lg:w-1/2 text-white p-4">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Your Partnership Brings Transformation:</h3>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Directly influence the spread of the gospel in Kenya and beyond.</li>
            <li>Receive updates showcasing the real stories of lives you’ve helped transform in places like Butere, Kisii, Kilgoris, and Mutitu wa Ndooa.</li>
            <li>Stand with us in prayer for the people whose lives are being renewed by hope and healing.</li>
            <li>Every gift counts towards our ongoing mission to bring spiritual and holistic well-being to communities.</li>
          </ul>

          {/* Button with editable input */}
          <div className="mt-8 flex items-center space-x-4">
            <input
              type="number"
              value={impactAmount}
              onChange={(e) => setImpactAmount(parseFloat(e.target.value))}
              className="w-24 p-2 rounded-md text-black text-right text-lg font-normal bg-white focus:outline-1 focus:outline-rose-600"
            />
            <button
              onClick={handleDonateClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 "
            >
              Give Monthly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPartnerSection;