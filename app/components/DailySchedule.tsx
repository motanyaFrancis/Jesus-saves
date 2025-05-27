'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { dailyScheduleData, ScheduleItem } from '@/data/dailySchedule';


const DailySchedule: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<ScheduleItem | null>(null);

  const openMediaModal = (item: ScheduleItem) => {
    setCurrentMedia(item);
    setModalOpen(true);
  };

  const closeMediaModal = () => {
    setModalOpen(false);
    setCurrentMedia(null);
  };

  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold uppercase text-gray-900 text-left mb-12">
          Daily Program Schedule
        </h2>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {dailyScheduleData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[80px_2fr_1fr_80px] items-center py-4 space-y-2 px-4 border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
            >
              <div className="col-span-1 text-gray-800 font-medium uppercase text-lg md:text-base mb-2 md:mb-0">
                {item.startTime}
              </div>

              <div className="col-span-1 mb-2 md:mb-0">
                <h3 className="text-gray-700 font-semibold text-xl md:text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">{item.description}</p>
              </div>

              <div className="col-span-1 flex justify-start md:justify-center items-center mb-2 md:mb-0">
                {item.mediaSrc && (
                  <button
                    onClick={() => openMediaModal(item)}
                    className="relative w-24 h-16 rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {item.mediaType === 'video' ? (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xs">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white absolute inset-0 m-auto opacity-75 group-hover:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <Image
                          src={item.mediaSrc}
                          alt={`${item.title} video preview`}
                          fill
                          className="object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/100x75/FF7F50/000000?text=Video";
                          }}
                        />
                      </div>
                    ) : (
                      <Image
                        src={item.mediaSrc}
                        alt={`${item.title} preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/100x75/CCCCCC/000000?text=Image";
                        }}
                      />
                    )}
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.mediaType === 'video' ? 'Watch' : 'View'}
                    </span>
                  </button>
                )}
              </div>

              <div className="col-span-1 text-gray-600 text-lg md:text-base text-right font-medium">
                {item.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal */}
        {modalOpen && currentMedia && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4">
            <div className="shadow-xl max-w-3xl w-full relative">
              <div className="p-4">
                <button
                  onClick={closeMediaModal}
                  className="absolute top-3 right-3  text-gray-50 hover:text-gray-200 text-2xl font-bold cursor-pointer"
                  aria-label="Close"
                >
                 ✕
                </button>
                <h3 className="text-xl font-semibold text-gray-50 mb-4">{currentMedia.title}</h3>
              </div>
              {currentMedia.mediaType === 'video' ? (
                <video controls className="w-full h-auto ">
                  <source src={currentMedia.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : currentMedia.mediaSrc ? (
                <Image
                  src={currentMedia.mediaSrc}
                  alt={currentMedia.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-200 text-gray-600">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DailySchedule;
