'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import DailyHighlightsSection from '@/components/DailyHighlightsSection';

import { allShows } from '@/data/shows'; 

const HomePage: React.FC = () => {
  const carouselImages = [
    { src: '/images/sample.avif', alt: 'Scenic mountain view' },
    { src: '/images/sample.avif', alt: 'Abstract colorful art' },
    { src: '/images/sample.avif', alt: 'Tropical beach sunset' },
    { src: '/images/sample.avif', alt: 'Person walking through a field' },
  ];

  const dailyHighlightsData = allShows.flatMap(show => show.dailyHighlights || []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 h-full w-full flex flex-col min-h-screen pt-24">
        <main className="flex-grow py-12">
          <ImageCarousel
            images={carouselImages}
            autoSlide={true}
            autoSlideInterval={5000}
          />
          <DailyHighlightsSection highlights={dailyHighlightsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
