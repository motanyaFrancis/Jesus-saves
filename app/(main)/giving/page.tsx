import DonationImpactSection from '@/components/DonationImpactSection';
import ImpactPartnerSection from '@/components/ImpactPartnerSection';
import WaysToGiveSection from '@/app/components/WaysToGiveSection';
import PageHeader from '@/components/PageHeaderSlim';
import FaqsSection from '@/app/components/FaqsSection';
import MetricsSection from '@/app/components/MetricsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giving',
};

const show = {
    title: 'Giving',
    subtitle: 'Support the Mission',
    description: 'Your support helps us reach more souls with the Gospel.',


};

const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Giving', href: '/giving' },
];

const Schedule = () => {
    return (
        <main className='bg-gray-50 pt-24'>
            <PageHeader
                title={show.title}
                subtitle={show.subtitle}
                description={show.description}
                breadcrumbs={breadcrumbs}
            />
            <DonationImpactSection />
            <MetricsSection />
            <ImpactPartnerSection />
            <WaysToGiveSection />
            <FaqsSection />
        </main>
    );
};

export default Schedule;
