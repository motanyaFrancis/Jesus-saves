// components/ImpactPartnerSection.tsx

import React from 'react';

const ImpactPartnerSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[500px] bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hands_background.avif')" }} // Ensure you have this image in your public/images folder
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for better text readability */}

      <div className="relative max-w-7xl mx-auto z-10 flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto gap-8">
        {/* Left Text Block */}
        <div className="w-full lg:w-1/2 text-white p-4">
          <p className="text-xl font-semibold mb-2">Become an</p>
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Impact Partner</h2>
          <p className="text-lg leading-relaxed">
            When you become an Impact Partner through regular monthly giving, you join a mission that’s much larger
            than any one of us. You’re choosing to extend your reach far beyond what seems possible, directly into the
            lives of those who have yet to hear the message of Jesus. We dream of the day when the message of hope
            will be accessible to every person in the world, in their language. Your consistent support fuels our mission to
            share the message of eternal hope across 900 TV stations and numerous digital platforms, making a
            meaningful impact on a global scale.
          </p>
        </div>

        {/* Right Text Block */}
        <div className="w-full lg:w-1/2 text-white p-4">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Your Partnership Brings Transformation:</h3>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Directly influence the spread of the gospel in over 100 languages.</li>
            <li>Receive updates showcasing the real stories of lives you’ve helped transform.</li>
            <li>Stand with us in prayer for the people whose lives are being renewed by hope.</li>
            <li>Every gift counts toward our goal of 1 billion souls reached by 2030.</li>
          </ul>

          {/* Button */}
          <div className="mt-8 flex items-center space-x-4">
            <span className="text-lg font-semibold">600</span>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md shadow-lg transition-colors duration-200">
              Give Monthly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPartnerSection;