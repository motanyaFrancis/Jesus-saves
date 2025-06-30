// app/(main)/shows/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { allShows } from '@/data/shows';
import PageHeader from '@/components/PageHeader';
import ProgramInfoSection from '@/components/ProgramInfoSection';
import { showDetailsMap } from '@/data/showDetails';
import { getEpisodesByShowSlug } from '@/lib/episode-utils';
import { Episode } from '@/lib/types';
import EpisodeList from '@/components/EpisodeList';
import { Metadata } from 'next';


// CRITICAL FIX: Update the PageProps interface definition
// params is now expected to be a Promise<object> by Next.js 15's types.
interface PageProps {
    params: Promise<{ slug: string }>; // This is the change you need to ensure is present
}


// Static params
export async function generateStaticParams() {
    return allShows.map((show) => ({ slug: show.slug }));
}

// Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // You MUST await params here to deconstruct it
    const { slug } = await params;

    const show = allShows.find((s) => s.slug === slug);

    return {
        title: show ? `${show.title} - Jesus Saves` : 'Show Not Found',
        description: show?.description ?? 'Discover our latest program on Jesus Saves.',
    };
}


// Main page
const ShowPage = async ({ params }: PageProps) => {
    // And you MUST await params here too
    const { slug } = await params;

    const show = allShows.find((s) => s.slug === slug);
    const extras = showDetailsMap[slug];

    if (!show || !extras) {
        console.warn(`Missing data for slug: ${slug}`);
        return notFound();
    };

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: show.title, href: `/shows/${show.slug}` },
    ];

    const episodes: Episode[] = getEpisodesByShowSlug(slug);

    return (
        <main className="pt-24">
            <PageHeader
                title={show.title}
                subtitle={show.subtitle}
                description={show.description}
                imageUrl={show.imageUrl}
                imageAlt={show.imageAlt}
                breadcrumbs={breadcrumbs}
                imageOverlayText={show.imageOverlayText}
            />
            {episodes.length > 0 && (
                <section className="max-w-7xl mx-auto py-8 px-4">
                    <h2 className="text-xl font-bold mb-6 text-center md:text-left uppercase">Episodes</h2>
                    <EpisodeList episodes={episodes} showSlug={show.slug} />
                </section>
            )}
            {episodes.length === 0 && (
                <section className="container mx-auto py-8 px-4 text-center text-gray-600">
                    <p>No episodes available for this show yet. Check back soon!</p>
                </section>
            )}
            <ProgramInfoSection show={show} host={extras.host} panelists={extras.panelists} />
        </main>
    );
};

export default ShowPage;