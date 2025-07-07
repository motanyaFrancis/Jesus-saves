'use client';

import React from 'react';

interface VideoPlayerProps {
    url: string;
    title: string;
}

const extractYouTubeIdAndStart = (url: string) => {
    try {
        const parsed = new URL(url);
        let videoId = parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
        let startTime = 0;

        const tParam = parsed.searchParams.get('t');
        if (tParam) {
            const match = tParam.match(/(\d+)/);
            if (match) {
                startTime = parseInt(match[1], 10);
            }
        }

        return { videoId, startTime };
    } catch {
        return { videoId: null, startTime: 0 };
    }
};

const extractVimeoId = (url: string) => {
    return url.split('/').pop();
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const { videoId, startTime } = extractYouTubeIdAndStart(url);
        const embedUrl = `https://www.youtube.com/embed/${videoId}${startTime ? `?start=${startTime}` : ''
            }`;

        return (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={embedUrl}
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
