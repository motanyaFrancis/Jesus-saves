'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface HighlightCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  slug: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ imageSrc, imageAlt, title, slug }) => {
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <Link href={`/shows/${slug}`}>
      <div className="block">
        <div className="flex flex-col rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200">
          <div className="relative w-full pt-[56.25%] bg-gray-200 flex items-center justify-center">
            {imgError ? (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                Image not found
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                loading="lazy"
                onError={handleImageError}
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-md font-semibold text-gray-900 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );

};


interface DailyHighlightsSectionProps {
  highlights: HighlightCardProps[];
}

const DailyHighlightsSection: React.FC<DailyHighlightsSectionProps> = ({ highlights }) => {
  return (
    <section className="py-12 mt-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-black uppercase text-gray-900 text-left mb-6">
          Shows
        </h2>

        {highlights.length === 0 ? (
          <p className="text-left text-gray-600">No daily highlights to display.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {highlights.slice(0, 8).map((highlight, index) => (
              <HighlightCard
                key={index}
                imageSrc={highlight.imageSrc}
                imageAlt={highlight.imageAlt}
                title={highlight.title}
                slug={highlight.slug} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


export default DailyHighlightsSection;
