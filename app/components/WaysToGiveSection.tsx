// components/WaysToGiveSection.tsx

import React from 'react';

const WaysToGiveSection: React.FC = () => {
  return (
    <section className="bg-rose-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center md:text-left">Ways to give</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: To mail a check */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">To mail a check:</h2>
            <p className="text-gray-700 mb-4">
              We would be grateful to receive your check payable to "<span className="font-bold">Hope Channel International, Inc.</span>" at the following address:
            </p>
            <p className="text-gray-700 mb-2">Hope Channel International</p>
            <p className="text-gray-700 mb-2">PO Box 4000</p>
            <p className="text-gray-700 mb-6">Silver Spring, MD 20914-6002 USA</p>
            <p className="text-gray-700">
              Please include your first and last name. Also, please be sure to include your return address to receive a receipt by mail.
            </p>
          </div>

          {/* Card 2: To mail your donation */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">To mail your donation:</h2>
            <p className="text-gray-700 mb-4">
              Please complete this form and mail your gift to:
            </p>
            <p className="text-gray-700 mb-2">Hope Channel International</p>
            <p className="text-gray-700 mb-2">PO Box 4000</p>
            <p className="text-gray-700 mb-6">Silver Spring, MD 20914-6002 USA</p>
            <a
              href="#" // Replace with actual link to donation form
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0113 3.414L16.586 7A2 2 0 0118 8.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0-3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0-3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Get Donation Form
            </a>
          </div>

          {/* Card 3: To donate by phone */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">To donate by phone:</h2>
            <p className="text-gray-700">
              Please call{' '}
              <a href="tel:888-580-0888" className="text-blue-600 hover:underline">
                (888) 580-0888
              </a>{' '}
              or toll free{' '}
              <a href="tel:888-446-7388" className="text-blue-600 hover:underline">
                (888) 446-7388
              </a>
            </p>
          </div>

          {/* Card 4: Annuities and Planned Giving */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Annuities and Planned Giving:</h2>
            <p className="text-gray-700 mb-2">888-339-PLAN or 888-339-7526</p>
            <p className="text-gray-700 mb-2">
              <a href="https://www.hopetgift.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                https://www.hopetgift.org
              </a>
            </p>
            <p className="text-gray-700 mb-4">Contact a Gift Planner</p>
            <p className="font-semibold text-gray-800 mb-1">Dennis Carlson</p>
            <p className="text-gray-700 mb-6">
              <a href="mailto:Dennis.carlson@hopetv.org" className="text-blue-600 hover:underline">
                Dennis.carlson@hopetv.org
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              Provide yourself with life-long income and save taxes, all while
              supporting Hope Channel.
            </p>
            <p className="text-gray-700 mb-2">
              <a href="tel:888-339-PLAN(7526)" className="text-blue-600 hover:underline">
                1-888-339-PLAN (7526)
              </a>
            </p>
            <p className="text-gray-700">
              <a href="https://www.hopetgift.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.hopetgift.org
              </a>
            </p>
          </div>

          {/* Card 5: To send a bank transfer */}
          <div className="bg-white p-8 rounded-lg shadow-md md:col-span-2"> {/* This card spans two columns on medium screens and up */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">To send a bank transfer:</h2>
            <p className="text-gray-700">
              contact us at (301) 680-6020 or (888) 446-7388 Email:{' '}
              <a href="mailto:fundraising@hopetv.org" className="text-blue-600 hover:underline">
                fundraising@hopetv.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaysToGiveSection;