import { notFound } from 'next/navigation';
import { allShows } from '@/data/shows';
import PageHeader from '@/components/PageHeader';
import ProgramInfoSection from '@/components/ProgramInfoSection';
import { showDetailsMap } from '@/data/showDetails';
import { Metadata } from 'next';

interface ShowPageProps {
  params: { slug: string };
}

// Static params
export async function generateStaticParams() {
  return allShows.map((show) => ({ slug: show.slug }));
}

// Metadata generation
export async function generateMetadata({ params }: ShowPageProps): Promise<Metadata> {
  const { slug } = await params; // await the proxy

  const show = allShows.find((s) => s.slug === slug);
  return {
    title: show ? `${show.title} - Jesus Saves` : 'Show Not Found',
  };
}

// Main page
const ShowPage = async ({ params }: ShowPageProps) => {
  const { slug } = await params; 

  const show = allShows.find((s) => s.slug === slug);
  const extras = showDetailsMap[slug];

  if (!show || !extras) return notFound();

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
