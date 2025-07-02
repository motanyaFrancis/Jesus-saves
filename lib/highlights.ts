import { allShows } from '@/data/shows';

export const getDailyHighlightLinks = () =>
  allShows.flatMap((show) =>
    show.dailyHighlights.map((highlight) => ({
      title: highlight.title,
      slug: highlight.slug,
    }))
  );
