'use client';

import React from 'react';

interface VideoPlayerProps {
    url: string;
    title: string;
}

const extractYouTubeId = (url: string) => {
    const parsed = new URL(url);
    return parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
};

const extractVimeoId = (url: string) => {
    return url.split('/').pop();
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = extractYouTubeId(url);
        return (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    if (url.includes('vimeo.com')) {
        const videoId = extractVimeoId(url);
        return (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={`https://player.vimeo.com/video/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    // Fallback for direct video files (MP4, WebM, etc.)
    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg bg-black">
            <video className="w-full h-full" controls>
                <source src={url} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
