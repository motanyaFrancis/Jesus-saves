// lib/episode-utils.ts
import { allEpisodes } from '@/data/episodes'; // Import the episode data
import { Episode } from '@/lib/types'; // Import the Episode interface/type


export const getEpisodesByShowSlug = (showSlug: string): Episode[] => {
  return allEpisodes.filter((episode) => episode.showSlug === showSlug);
};

// Get a specific episode by showSlug and episodeSlug
export const getEpisodeBySlug = (
  showSlug: string,
  episodeSlug: string
): Episode | null => {
  const episode = allEpisodes.find(
    (episode) =>
      episode.showSlug === showSlug && episode.slug === episodeSlug
  );
  if (!episode) {
    console.warn(`No episode found for showSlug="${showSlug}", episodeSlug="${episodeSlug}"`);
  }
  return episode || null;
};

