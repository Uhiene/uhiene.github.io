import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ArticleCardProps {
  article: {
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="overflow-hidden w-80 lg:w-64">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <Image src={article.image} alt={article.name} layout="fit" quality={100} objectFit="contain" className="rounded-lg w-full h-44" />
      </a>
      <div className="py-2">
        <h2 className="font-bold text-sm mb-2">{article.name}</h2>
        {/* <p className="text-gray-600 mb-2">{article.description}</p> */}
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
