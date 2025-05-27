'use client';

import { useDonateOverlay } from './DonateOverlayProvider';
import { FaHeart } from "react-icons/fa6";

import clsx from 'clsx'; // optional but recommended

type InlineDonateButtonProps = {
    label?: string;
    className?: string;
};

export default function InlineDonateButton({
    label = "Support Us",
    className = "",
}: InlineDonateButtonProps) {
    const { open } = useDonateOverlay();

    return (
        <button
            onClick={open}
            className={clsx(
                "relative overflow-hidden bg-rose-900 text-white px-4 py-2 rounded-lg hover:bg-rose-800 transition pulse-spread cursor-pointer",
                className
            )}
        >
            <span className="flex items-center gap-2 font-bold relative z-10">

                <FaHeart className="w-4 h-4 text-white animate-pulse" />
                {/* <Heart className="w-4 h-4 text-white font-bold animate-pulse" /> */}
                {label}
            </span>
        </button>
    );
}
