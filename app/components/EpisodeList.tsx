// components/EpisodeList.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Episode } from '@/lib/types';
import { useState, useMemo } from 'react';
import { MdOutlinePlayCircle } from "react-icons/md";

interface EpisodeListProps {
  episodes: Episode[];
  showSlug: string;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, showSlug }) => {
  const allSeasons = useMemo(() => {
    const years = Array.from(new Set(episodes.map(e => new Date(e.publishedAt).getFullYear())));
    if (years.length === 0) return ['All Seasons'];

    const sortedYears = years.sort((a, b) => b - a);
    const seasons = sortedYears.map(year => `Season ${year}`);
    return ['All Seasons', ...seasons];
  }, [episodes]);

  const [selectedSeason, setSelectedSeason] = useState<string>('All Seasons');

  const filteredEpisodes = useMemo(() => {
    if (selectedSeason === 'All Seasons') {
      return episodes;
    }
    const yearToFilter = parseInt(selectedSeason.replace('Season ', ''), 10);
    return episodes.filter(episode => new Date(episode.publishedAt).getFullYear() === yearToFilter);
  }, [episodes, selectedSeason]);

  // Helper function to extract the last numeral from the slug
  const getEpisodeNumberFromSlug = (slug: string): string => {
    const match = slug.match(/(\d+)$/);
    return match ? match[1] : 'N/A'; // Return the last number or 'N/A' if no number is found
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar for Season Filter */}
      <div className="lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Seasons</h3>
        <ul className="space-y-2">
          {allSeasons.map((season) => (
            <li key={season}>
              <button
                onClick={() => setSelectedSeason(season)}
                className={`w-full text-left py-2 px-3 rounded-md transition-colors duration-200
                  ${selectedSeason === season
                    ? 'bg-rose-900 text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {season}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area for Episode Cards */}
      <div className="lg:w-3/4">
        {filteredEpisodes.length === 0 && selectedSeason !== 'All Seasons' ? (
          <p className="text-gray-600 text-center py-8">No episodes found for {selectedSeason}.</p>
        ) : filteredEpisodes.length === 0 && selectedSeason === 'All Seasons' ? (
           <p className="text-gray-600 text-center py-8">No episodes available for this show yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <Link key={episode.slug} href={`/shows/${showSlug}/${episode.slug}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out h-full flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={episode.thumbnailUrl}
                      alt={episode.thumbnailAlt || 'Episode Thumbnail'}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x225/CCCCCC/FFFFFF?text=No+Image';
                      }}
                    />
                     {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-200">
                       <MdOutlinePlayCircle className="text-white text-6xl" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Episode Number */}
                    <div className="text-sm font-bold text-rose-800 mb-1 flex items-center">
                      <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2 py-1 rounded-full mr-2">
                        N
                      </span>
                      Episode - {getEpisodeNumberFromSlug(episode.slug)}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {episode.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                      {episode.description}
                    </p>
                    <div className="text-gray-500 text-xs mt-3">
                      {new Date(episode.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                      {' | '}
                      <span>30:00 min</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeList;