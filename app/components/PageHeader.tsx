// components/PageHeader.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Breadcrumb {
    name: string;
    href: string;
}

interface PageHeaderProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    breadcrumbs?: Breadcrumb[];
    imageOverlayText?: string; // New prop for text like "IN-VERSE" on the image
    // You might want to add a 'liveStreamLink' if the "join the live stream" is interactive
    // liveStreamLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    imageUrl,
    imageAlt,
    breadcrumbs,
    imageOverlayText,
    // liveStreamLink,
}) => {
    return (
        <header className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs OUTSIDE the flex container */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="text-sm font-bold text-gray-500 mb-4" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={crumb.href} className="flex items-center">
                                    <Link href={crumb.href} className="hover:underline">
                                        {crumb.name}
                                    </Link>
                                    {index < breadcrumbs.length - 1 && (
                                        <svg
                                            className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}

                {/* Flex container with left and right sections */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/2 w-full mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                        <div className="h-1 bg-yellow-500 w-16 mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif italic">
                            {subtitle}
                        </p>
                        
                    </div>

                    {/* Right Section: Image/Video Thumbnail */}
                    <div className="md:w-1/2 w-full relative">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gray-200">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill 
                                className="rounded-lg object-cover"
                            />
                            {/* Overlay for dynamic text like "IN-VERSE" */}
                            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent text-white flex justify-between items-center">
                                {imageOverlayText && <span className="text-xl font-extrabold tracking-widest">{imageOverlayText}</span>}
                                
                            </div>
                            {/* Text "join the live stream" at the bottom-right, outside the image but part of the component logic */}
                            <div className="absolute bottom-4 right-4 text-white text-sm font-semibold">
                                join the live stream
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default PageHeader;