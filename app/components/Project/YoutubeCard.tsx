import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: StaticImageData;
    link: string;
    description: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white w-80 md:w-64">
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <Image src={video.thumbnail} alt={video.title}  quality={100} objectFit="contain"  className="w-full h-44" />
      </a>
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2">{video.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{video.description}</p>
        <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Watch Video
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
