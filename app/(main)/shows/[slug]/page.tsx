// app/(main)/shows/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { allShows } from '@/data/shows';
import PageHeader from '@/components/PageHeader';
import ProgramInfoSection from '@/components/ProgramInfoSection';
import { showDetailsMap } from '@/data/showDetails';
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
        { name: 'Jesus Saves', href: '/' },
        { name: show.title, href: `/shows/${show.slug}` },
    ];

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
            <ProgramInfoSection show={show} host={extras.host} panelists={extras.panelists} />
        </main>
    );
};

export default ShowPage;