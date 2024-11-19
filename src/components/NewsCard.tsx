import React, { useState } from 'react';
import NewsModal from './NewsModal';

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  imageAlt: string;
  fullContent?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, title, description, imageAlt, fullContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform w-full flex">
        <img
          src={image}
          alt={imageAlt}
          className="w-1/3 object-cover"
        />
        <div className="p-6 flex-1">
          <span className="text-sm text-gray-400">{date}</span>
          <h3 
            className="text-white text-xl font-semibold mt-2 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>

      <NewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        date={date}
        image={image}
        fullContent={fullContent}
      />
    </>
  );
};

export default NewsCard;