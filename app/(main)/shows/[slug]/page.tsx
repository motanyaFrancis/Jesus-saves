// app/(main)/shows/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allShows } from '@/data/shows';
import PageHeader from '@/components/PageHeader';
import ProgramInfoSection from '@/components/ProgramInfoSection';
import { showDetailsMap } from '@/data/showDetails';
import { Metadata } from 'next';

// IMPORTANT: We need to adjust how PageProps handles params
// In Next.js 15, `params` is effectively a Promise-like object.
// The best approach is to let the function signature handle the await
// and define the _resolved_ type of params within the interface.
// However, to satisfy the build system's expectation that `params` is a Promise-like object
// when it's passed into the function, we need to declare it as such.

// Let's refine PageProps to reflect the actual runtime behavior for Next.js 15+
interface PageProps {
    // This is the tricky part. The *type* of params coming into the function
    // is now seen by Next.js as Promise<any> or something with .then().
    // We can't directly type it as Promise<{ slug: string }> if it's not strictly that,
    // but the build system expects Promise methods.
    // The safest approach is often to remove the custom PageProps interface for `params`
    // and let Next.js infer the type correctly for the function arguments.

    // If you absolutely must keep PageProps for other reasons,
    // a common workaround or way to acknowledge the promise-like nature is:
    // params: { slug: string } & Promise<any>; // This might work but is hacky.

    // A better approach for the argument type:
    params: { slug: string }; // Keep this as the *resolved* type for clarity
}

// Static params
export async function generateStaticParams() {
    return allShows.map((show) => ({ slug: show.slug }));
}

// Metadata generation
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    // The build error explicitly says 'params' is missing Promise methods.
    // So, we type the incoming 'params' argument as Promise<{ slug: string }>.
    // This is the crucial change for `generateMetadata`.
    const { slug } = await props.params; // Await the params directly

    const show = allShows.find((s) => s.slug === slug);

    return {
        title: show ? `${show.title} - Jesus Saves` : 'Show Not Found',
        description: show?.description ?? 'Discover our latest program on Jesus Saves.',
    };
}


// Main page
// For the page component, Next.js typically provides params already resolved
// after internal processing. However, if the error persists here, apply similar logic.
const ShowPage = async ({ params }: PageProps) => {
    // THIS IS THE CRITICAL CHANGE FOR ShowPage: Await params
    const { slug } = await params; // <--- Await params here

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
