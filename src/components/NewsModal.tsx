import React from 'react';
import { X } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  date: string;
  image: string;
  fullContent?: string;
}

const NewsModal: React.FC<NewsModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  date,
  image,
  fullContent
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 w-full max-w-2xl rounded-xl overflow-hidden animate-fade-in">
        <div className="relative h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <span className="text-sm text-gray-400">{date}</span>
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <p className="text-gray-300 mt-4">{description}</p>
          {fullContent && (
            <div className="mt-6 text-gray-300">
              {fullContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsModal;