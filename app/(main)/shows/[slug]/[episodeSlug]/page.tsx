// app/shows/[slug]/[episodeSlug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

import { getEpisodeBySlug, getEpisodesByShowSlug } from '@/lib/episode-utils';
import EpisodeList from '@/components/EpisodeList';
import VideoPlayer from '@/components/VideoPlayer';

interface EpisodePageProps {
  params: { slug: string; episodeSlug: string };
}

// Generate static paths for all episodes
export async function generateStaticParams() {
  const allEpisodes = (await import('@/data/episodes')).allEpisodes;
  return allEpisodes.map((episode) => ({
    slug: episode.showSlug,
    episodeSlug: episode.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const { slug, episodeSlug } = await params;

  const episode = getEpisodeBySlug(slug, episodeSlug);

  if (!episode) {
    return {
      title: 'Episode Not Found',
      description: 'This episode could not be found.',
    };
  }

  return {
    title: `${episode.title} - ${slug.replace(/-/g, ' ')}`,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: episode.thumbnailUrl ? [{ url: episode.thumbnailUrl }] : [],
    },
  };
}

// Page component
const EpisodePage = async ({ params }: EpisodePageProps) => {
  const { slug, episodeSlug } = await params;

  const episode = getEpisodeBySlug(slug, episodeSlug);

  if (!episode) {
    console.warn(`Missing episode data for slug: ${episodeSlug}`);
    return notFound();
  }

  const relatedEpisodes = getEpisodesByShowSlug(slug).filter(
    (ep) => ep.slug !== episodeSlug
  );

  const thumbnailUrl =
    episode.thumbnailUrl || 'https://placehold.co/1280x720?text=Video+Unavailable';

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: slug.replace(/-/g, ' '), href: `/shows/${slug}` },
    { name: episode.title, href: `/shows/${slug}/${episode.slug}` },
  ];

  return (
    <>

      {/* Breadcrumbs OUTSIDE the flex container */}

      <div className="bg-gray-100 pt-24 mt-4">

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-sm font-bold text-gray-500 mb-4 max-w-7xl mx-auto py-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <svg
                      className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      <main className="pt-6 bg-white">
        <div className="container mx-auto p-4 max-w-5xl">

          {/* Video / Thumbnail */}
          <VideoPlayer url={episode.videoUrl} title={episode.title} />

          {/* Title and Info */}
          <h1 className="text-xl md:text-2xl font-bold mb- 4 text-gray-900">
            {episode.title}
          </h1>
          <div className="text-gray-600 text-sm mb-6 flex items-center space-x-2">
            <span>Published on</span>
            <time dateTime={episode.publishedAt}>
              {new Date(episode.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2 text-gray-400">•</span>
            <Link
              href={`/shows/${slug}`}
              className="capitalize text-rose-900 hover:underline"
            >
              {slug.replace(/-/g, ' ')}
            </Link>
          </div>

          


          {/* Description */}
          <div className="prose lg:prose-lg max-w-none text-gray-800 leading-relaxed">
            <p>{episode.description}</p>
          </div>

          {/* Related Episodes */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">More from this Show</h2>
            {relatedEpisodes.length > 0 ? (
              <EpisodeList episodes={relatedEpisodes} showSlug={slug} />
            ) : (
              <p className="text-gray-600">No other episodes available for this show.</p>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default EpisodePage;
