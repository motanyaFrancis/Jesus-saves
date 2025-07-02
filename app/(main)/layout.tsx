import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDailyHighlightLinks } from '@/lib/highlights';

export default function MainLayout({ children }: { children: ReactNode }) {
  const highlightLinks = getDailyHighlightLinks();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer links={highlightLinks} />
    </div>
  );
}
// This layout wraps the main content with a Navbar and Footer, ensuring consistent structure across pages.