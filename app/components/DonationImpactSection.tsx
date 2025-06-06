'use client'

import React, { useState } from 'react';
import { useDonateOverlay } from '@/components/DonateOverlayProvider'; // Assuming this path or adjust

const DonationImpactSection: React.FC = () => {
  const { open } = useDonateOverlay();
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>('5,000'); // Initialize with the default selected amount

  const amounts = [
    { value: 100000, label: '100K KES' },
    { value: 50000, label: '50K KES' },
    { value: 25000, label: '25K KES' },
    { value: 10000, label: '10K KES' },
    { value: 6000, label: '6,000 KES' },
    { value: 5000, label: '5,000 KES' },
  ];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toLocaleString()); // Update custom amount when a preset is clicked
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    setCustomAmount(value === '' ? '' : parseInt(value, 10).toLocaleString());
    setSelectedAmount(value === '' ? 0 : parseInt(value, 10)); // Set selected amount to custom value
  };

  const handleDonate = () => {
    // Open the DonateOverlay with the current selected amount and donation type
    open(selectedAmount, donationType === 'one-time' ? 'once' : 'monthly');
  };

  return (
    <section className="flex max-w-7xl mx-auto flex-col lg:flex-row items-start lg:items-center justify-center  p-8">
      {/* Left Section - Impact Description */}
      <div className="w-full max-w-7xl lg:w-2/3 p-4 lg:pr-16 mb-8 lg:mb-0">
        <h1 className="text-4xl font-medium text-gray-800 mb-6">Your gift can make an <span className="text-yellow-600 font-semibold">Impact!</span></h1>

        <h2 className="text-xl font-bold text-gray-700 mb-4">Your impact around the world</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2 font-bold text-base">
          <li>Butere, 2023: A new church was planted following a successful evangelistic campaign.</li>
          <li>Kisii & Kilgoris, 2024: Medical camps and evangelism led to significant spiritual and health transformations.</li>
          <li>Mutitu wa Ndooa, May 2025: Mission support enabled the opening of a new Sabbath school.</li>
        </ul>
      </div>

      {/* Right Section - Donation Form */}
      <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
        {/* Donation Type Toggle */}
        <div className="flex  rounded-lg p-1 mb-6 gap-6">
          <button
            className={`flex-1 py-2 px-4 rounded-md border-2 border-gray-200 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              donationType === 'one-time'
                ? 'bg-rose-900 border-rose-900 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setDonationType('one-time')}
          >
            One-time
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md border-2 border-gray-200 text-sm font-medium transition-colors duration-200 flex items-center justify-center cursor-pointer ${
              donationType === 'monthly'
                ? 'bg-rose-900 border-rose-900 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setDonationType('monthly')}
          >
            <span className="mr-1">💛</span> Monthly
          </button>
        </div>

        <p className="text-gray-700 text-sm mb-4">
          Join us in our mission to touch one billion lives with the message of eternal hope by 2030.
        </p>

        {/* Amount Options */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {amounts.map((amount) => (
            <button
              key={amount.value}
              className={`py-3 px-2 rounded-md border text-sm font-semibold transition-colors duration-200 ${
                selectedAmount === amount.value
                  ? 'border-rose-600 bg-rose-50 text-rose-700'
                  : 'border-gray-300 text-gray-700 hover:border-rose-400'
              }`}
              onClick={() => handleAmountClick(amount.value)}
            >
              {amount.label}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="relative mb-6">
          <input
            type="text" // Use text to allow for formatting
            className="w-full p-3 pr-12 border border-gray-300 rounded-md text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            value={customAmount}
            onChange={handleCustomAmountChange}
            onBlur={() => setCustomAmount(selectedAmount.toLocaleString())} // Reformat on blur
            placeholder="Enter amount"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">KES</span>
        </div>

        {/* Dedicate Donation Checkbox */}
        <div className="flex items-center mb-6">
          <input
            id="dedicate-donation"
            type="checkbox"
            className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
          />
          <label htmlFor="dedicate-donation" className="ml-2 text-sm text-gray-700">
            Dedicate this donation
          </label>
        </div>

        {/* Donate Button */}
        <button
            onClick={handleDonate} // Use the new handleDonate function
            className="w-full bg-rose-900 hover:bg-yellow-600 text-white font-semibold py-5 rounded-sm shadow-md transition-colors duration-200 text-center uppercase"
        >
            Donate
        </button>
      </div>
    </section>
  );
};

export default DonationImpactSection;