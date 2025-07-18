'use client';

import { useEffect } from 'react';
import { useDonateOverlay } from './DonateOverlayProvider';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

const donationUrl = 'https://www.sdackc.org/give-now/mpesa/living-word-series';

export default function DonationOverlayWithQR() {
    const { isOpen, close } = useDonateOverlay();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [close]);  

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-4" onClick={close}>
            <div className="w-full max-w-4xl rounded-xl shadow-xl overflow-hidden relative flex flex-col md:flex-row md:gap-8"
            onClick={(e) => e.stopPropagation()}  // Prevent click from closing the overlay
            >
                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 bg-white hover:bg-gray-200 p-2 rounded-full"
                >
                    ✕
                </button>

                {/* Left: Mission */}
                <div className="hidden md:block md:w-[60%] bg-gray-50 p-0 flex-col rounded-xl  shadow-lg overflow-hidden">
                    <Image
                        src="/images/jesus-saves.jpg"
                        alt="Support Illustration"
                        width={800}
                        height={200}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col items-start text-left">
                        <Image
                            src="/images/logo.png"
                            alt="Organization Logo"
                            width={96} // Equivalent to 24 tailwind width (w-24)
                            height={40}
                            className="w-24 h-auto mb-4"
                        />
                        <h2 className="text-lg font-bold text-gray-800 uppercase">Join Us in Sharing Eternal Hope</h2>
                        <p className="text-gray-600 mt-2 mb-8 text-sm text-justify">
                            More than <span className="font-bold text-rose-900">3.4 billion people</span> worldwide have yet to hear the message of Eternal Hope. Through <span className="font-bold text-rose-900">The Living Word series</span> and the ministry of <span className="font-semibold">Seventh-day Adventist Church Karen Community</span>, we are committed to sharing Christ’s love and truth across cultures and languages. With your support, we can continue spreading hope to unreached hearts and help fulfill the gospel mission. <span className="font-semibold">Join us in bringing Eternal Hope to the world.</span>
                        </p>
                    </div>
                </div>

                {/* Right: QR Code */}
                <div className="md:w-1/2 p-6 flex bg-white flex-col items-center justify-center text-center rounded-xl md:rounded-r-xl md:rounded-bl-none shadow-lg overflow-y-auto max-h-full">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Scan to Donate</h3>
                    <QRCodeSVG value={donationUrl} size={180} />
                    <p className="text-gray-700 mt-4 break-words text-sm">
                        {donationUrl}
                    </p>
                    <button
                        onClick={() => window.open(donationUrl, '_blank')}
                        className="mt-4 bg-rose-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-rose-700 transition"
                    >
                        Donate Online
                    </button>
                </div>
            </div>
        </div>
    );
}
