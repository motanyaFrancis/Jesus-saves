import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import DailyHighlightsSection from '@/components/DailyHighlightsSection';

import VerticalDonateButton from '@/components/VerticalDonateButton';

const HomePage: React.FC = () => {
  const carouselImages = [
    { src: '/images/sample.avif', alt: 'Scenic mountain view' },
    { src: '/images/sample.avif', alt: 'Abstract colorful art' },
    { src: '/images/sample.avif', alt: 'Tropical beach sunset' },
    { src: '/images/sample.avif', alt: 'Person walking through a field' },
  ];
  const dailyHighlightsData = [
    {
      imageSrc: '/images/jesus-saves.jpg',
      imageAlt: 'Person reading a book by the window',
      title: 'Family Hub',
    },
    {
      imageSrc: '/images/sample.avif',
      imageAlt: 'Group of people volunteering',
      title: 'Health & Wellness',
    },
    {
      imageSrc: '/images/sample.avif',
      imageAlt: 'Speaker presenting to an audience',
      title: 'Jesus Saves',
    },
    {
      imageSrc: '/images/sample.avif',
      imageAlt: 'Beautiful natural landscape',
      title: 'Worship In Music',
    },
    {
      imageSrc: '/images/sample.avif',
      imageAlt: 'Additional highlight not displayed',
      title: 'Children',
    },
  ];

  return (
    <>
      <VerticalDonateButton />
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
}

export default HomePage;