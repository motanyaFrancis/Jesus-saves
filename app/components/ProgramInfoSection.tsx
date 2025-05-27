import React from 'react';
import Image from 'next/image';

interface Person {
  name: string;
  imageUrl: string;
  title?: string;
}

interface ShowPageProps {
  show: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  };
  host: Person;
  panelists?: Person[];
}

const ProgramInfoSection: React.FC<ShowPageProps> = ({ show, host, panelists }) => {
  const { description, imageUrl, imageAlt } = show;

 

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">
        {/* Left Side - 70% */}
        <div className="lg:col-span-7 space-y-8">
          {/* Program Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-normal font-bold mb-4 text-gray-900 uppercase">About the Show</h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-4">{description}</p>
          </div>

          {/* Host */}
          <div className="bg-gray-50 p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">Host</h3>
            <div className="flex items-center space-x-4">
              <Image
                src={host.imageUrl}
                alt={host.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800 ">{host.name}</p>
                {host.title && <p className="text-sm text-gray-500">{host.title}</p>}
              </div>
            </div>
          </div>

          {/* Panelists */}
          {panelists && panelists.length > 0 && (
            <div className="bg-gray-50 p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">Panelists</h3>
              <div className="flex items-center space-x-8">
                {panelists.map((panelist, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={panelist.imageUrl}
                      alt={panelist.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <p className="mt-2 font-semibold text-gray-800">{panelist.name}</p>
                    {panelist.title && <p className="text-sm text-gray-500">{panelist.title}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side - 30% */}
        <div className="lg:col-span-3 space-y-6  ">
          {/* Program Image */}
          <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden relative shadow-md p-4 bg-white">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Donate Button */}
          <button
            
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-200"
          >
            Donate to this Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfoSection;
