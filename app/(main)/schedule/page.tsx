import DailySchedule from '@/components/DailySchedule';
import Link from 'next/link'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule',
};

const HomePage = () => {
    return (
        <main className='bg-gray-50'>
            <div className="max-w-7xl  mx-auto px-4 py-8 flex items-center justify-between text-base font-semibold text-gray-600">
                <nav className="flex items-center space-x-2">
                    <Link href="/" className="hover:underline">Jesus saves</Link>
                    <span>/</span>
                    <span className="text-gray-800 font-medium">Schedule</span>

                </nav>
                <Link href="/services" className="text-red-900 font-semibold hover:underline max-sm:hidden">
                    ← Back Home
                </Link>
            </div>

            <DailySchedule />

        </main>
    );
};

export default HomePage;