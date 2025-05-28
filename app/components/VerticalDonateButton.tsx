'use client';

import { FaHeart } from "react-icons/fa6";
import { useDonateOverlay } from './DonateOverlayProvider';

export default function VerticalDonateButton() {
    const { open } = useDonateOverlay();

    return (
        <button
            // FIX: Wrap 'open' in an arrow function
            onClick={() => open()} // Call open without any arguments
            className="fixed left-4 top-2/3 transform -translate-y-1/3 z-[999] bg-rose-900 text-white px-6 py-3 pt-4 rotate-[-90deg] origin-left rounded-br-lg rounded-bl-lg hover:bg-rose-800 shadow-lg transition cursor-pointer"
        >
            <span className="flex items-center gap-2 font-bold">
                <FaHeart className="w-4 h-4 text-white animate-pulse" />
                Support
            </span>
        </button>
    );
}