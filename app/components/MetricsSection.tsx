// components/MetricsSection.tsx

import React from 'react';

import { PiMonitorThin, PiTranslateThin } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";

const MetricsSection: React.FC = () => {
  return (
    <section className="bg-rose-900 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8">
        {/* Metric 1: 80+ channels */}
        <div className="flex flex-col md:flex-row items-center text-gray-100 text-xl font-semibold">
          {/* TV Icon */}
          <PiMonitorThin className="h-10 w-10 mb-2 md:mb-0 md:mr-3" />
          <span>80+ channels</span>
        </div>

        {/* Metric 2: 100 languages */}
        <div className="flex flex-col md:flex-row items-center text-gray-100 text-xl font-semibold">
          {/* Language Icon */}
          <PiTranslateThin className="h-10 w-10 mb-2 md:mb-0 md:mr-3" />
          <span>100 languages</span>
        </div>

        {/* Metric 3: 200 countries */}
        <div className="flex flex-col md:flex-row items-center text-gray-100 text-xl font-semibold">
          {/* Globe Icon */}
          <GiWorld className="h-10 w-10 mb-2 md:mb-0 md:mr-3" />
          <span>200 countries</span>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;