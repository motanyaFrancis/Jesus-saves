'use client'

import React, { useState } from 'react';

// Define the type for a single schedule item
interface ScheduleItem {
  startTime: string;
  endTime: string; // Still useful for internal data, but won't be displayed in the main list
  title: string;
  description: string; // Added description
  duration: string;
  mediaSrc?: string; // Optional image or video source
  mediaType?: 'image' | 'video'; // Optional media type
}

// Data for the daily schedule
const dailyScheduleData: ScheduleItem[] = [
  {
    startTime: '15:00',
    endTime: '15:30',
    title: 'Breath of Praise',
    description: 'Start your afternoon with uplifting worship and heartfelt praise. Join us in a time of spiritual renewal and joyful song.',
    duration: '30 min',
    mediaSrc: '/images/sample.avif', // Smaller placeholder for preview
    mediaType: 'image',
  },
  {
    startTime: '15:30',
    endTime: '16:15',
    title: 'Health & Wellness',
    description: 'Learn practical tips for a healthier lifestyle, focusing on physical, mental, and spiritual well-being. Empower yourself with knowledge for a balanced life.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '16:15',
    endTime: '16:30',
    title: 'Music Interlude',
    description: 'A short break with serene and inspiring music to reflect and prepare for the next session. A moment of peace and contemplation.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '16:30',
    endTime: '17:15',
    title: 'Children\'s Program',
    description: 'Engaging and educational activities for our young ones, designed to teach valuable lessons in a fun and interactive environment.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '17:15',
    endTime: '17:30',
    title: 'Music Interlude',
    description: 'Another moment of musical reflection and transition, offering a calming atmosphere before the next segment of our program.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '17:30',
    endTime: '18:15',
    title: 'Family Hub',
    description: 'Strengthen family bonds and explore faith-based principles for a harmonious home. Practical advice and discussions for every family member.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:15',
    endTime: '18:30',
    title: 'Music Interlude',
    description: 'A final musical pause to set a contemplative mood before the evening\'s main events. Enjoy the peaceful melodies.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:30',
    endTime: '18:45',
    title: 'Theme Song',
    description: 'Join us in singing our inspiring theme song, a powerful anthem that encapsulates the spirit and message of our community.',
    duration: '15 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '18:45',
    endTime: '19:45',
    title: 'Sermon: Jesus Saves',
    description: 'An impactful sermon exploring the transformative power of faith and salvation through Jesus Christ. A message of hope and redemption.',
    duration: '60 min',
    mediaSrc: '/images/sample.avif', // Placeholder for video preview
    mediaType: 'video',
  },
  {
    startTime: '19:45',
    endTime: '20:30',
    title: 'Testimonies',
    description: 'Hear inspiring personal stories of faith, healing, and overcoming challenges. Witness the power of God\'s grace in real lives.',
    duration: '45 min',
    mediaSrc: '/images/sample.avif',
    mediaType: 'image',
  },
  {
    startTime: '20:30',
    endTime: '21:00',
    title: 'Closing Remarks',
    description: 'Concluding thoughts and blessings for the day, preparing hearts for the evening and the days ahead. A time for reflection and gratitude.',
    duration: '30 min',
    // No media for closing remarks
  },
];

const DailySchedule: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<ScheduleItem | null>(null);

  // Function to open the media modal
  const openMediaModal = (item: ScheduleItem) => {
    setCurrentMedia(item);
    setModalOpen(true);
  };

  // Function to close the media modal
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
              className={`grid grid-cols-1 md:grid-cols-[80px_2fr_1fr_80px] items-center py-4 space-y-2 px-4 border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {/* Time Column */}
              <div className="col-span-1 text-gray-800 font-medium uppercase text-lg md:text-base mb-2 md:mb-0">
                {item.startTime}
              </div>

              {/* Program Title and Description Column */}
              <div className="col-span-1 mb-2 md:mb-0">
                <h3 className="text-gray-700 font-semibold text-xl md:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  {item.description}
                </p>
              </div>

              {/* Media Column (Optional) */}
              <div className="col-span-1 flex justify-start md:justify-center items-center mb-2 md:mb-0 ">
                {item.mediaSrc && (
                  <button
                    onClick={() => openMediaModal(item)}
                    className="relative w-24 h-16 rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {item.mediaType === 'video' ? (
                      // Video preview placeholder
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white absolute inset-0 m-auto opacity-75 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <img
                          src={item.mediaSrc} // Using placeholder for video preview
                          alt={`${item.title} video preview`}
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "https://placehold.co/100x75/FF7F50/000000?text=Video";
                          }}
                        />
                      </div>
                    ) : (
                      // Image preview
                      <img
                        src={item.mediaSrc}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/100x75/CCCCCC/000000?text=Image";
                        }}
                      />
                    )}
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.mediaType === 'video' ? 'Watch' : 'View'}
                    </span>
                  </button>
                )}
              </div>

              {/* Duration Column */}
              <div className="col-span-1 text-gray-600 text-lg md:text-base text-right font-medium">
                {item.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal */}
        {modalOpen && currentMedia && (
          <div className="fixed inset-0 bg-black/75  flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full relative p-4">
              <button
                onClick={closeMediaModal}
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {currentMedia.title}
              </h3>
              {currentMedia.mediaType === 'video' ? (
                <video controls className="w-full h-auto rounded-lg">
                  <source src={currentMedia.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={currentMedia.mediaSrc}
                  alt={currentMedia.title}
                  className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
                  onError={(e) => {
                    e.currentTarget.onerror = null; // prevents infinite loop
                    e.currentTarget.src = "https://placehold.co/600x400/CCCCCC/000000?text=Media+Unavailable";
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DailySchedule;
