'use client'

import React, { useState } from 'react';

const DonationImpactSection: React.FC = () => {
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
    // Here you would typically handle the donation logic,
    // e.g., integrate with a payment gateway.
    console.log('Donation Type:', donationType);
    console.log('Donation Amount:', selectedAmount);
    alert(`Thank you for your ${donationType} donation of KES ${selectedAmount.toLocaleString()}!`);
  };

  return (
    <section className="flex max-w-7xl mx-auto flex-col lg:flex-row items-start lg:items-center justify-center  p-8">
      {/* Left Section - Impact Description */}
      <div className="w-full max-w-7xl lg:w-2/3 p-4 lg:pr-16 mb-8 lg:mb-0">
        <h1 className="text-4xl font-medium text-gray-800 mb-6">Your gift can make an <span className="text-yellow-600 font-semibold">Impact!</span></h1>

        <h2 className="text-xl font-bold text-gray-700 mb-4">Your impact around the world</h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2 font-bold text-base">
          <li>In Malawi, 25 televisions now bring light to prison cells.</li>
          <li>In Kenya, 194,000 new baptisms have sparked a wave of faith.</li>
          <li>In New Zealand, Hope Channel stands as a top Christian channel.</li>
          <li>In Kinshasa, a new studio offers the love of God to millions.</li>
          <li>Globally, Hope Channel is illuminating hope through 83 channels in over 100 languages.</li>
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
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-300 text-gray-700 hover:border-blue-400'
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
            className="w-full p-3 pr-12 border border-gray-300 rounded-md text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="dedicate-donation" className="ml-2 text-sm text-gray-700">
            Dedicate this donation
          </label>
        </div>

        {/* Add Comment Link (Placeholder) */}
        <p className="text-sm text-blue-600 hover:underline cursor-pointer mb-6">Add comment</p>

        {/* Donate Button */}
        <button
          className="w-full py-3 bg-yellow-500 text-white font-bold text-lg rounded-md hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          onClick={handleDonate}
        >
          DONATE
        </button>
      </div>
    </section>
  );
};

export default DonationImpactSection;