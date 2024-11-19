import React from 'react';

interface FeaturedNewsProps {
  image: string;
  title: string;
  description: string;
  tag: string;
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ image, title, description, tag }) => {
  return (
    <div className="w-full">
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <span className="text-white bg-red-600 px-3 py-1 rounded-full text-sm">{tag}</span>
          <h2 className="text-white text-2xl font-bold mt-2">{title}</h2>
          <p className="text-gray-200 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;