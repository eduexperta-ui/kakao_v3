import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-all animate-fadeIn cursor-default"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl flex items-center justify-center"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking the container
      >
        <button
            onClick={onClose}
            className="absolute -top-12 right-0 md:top-0 md:-right-12 text-white hover:text-gray-300 p-2 focus:outline-none z-50 cursor-pointer"
            aria-label="Close modal"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl bg-white dark:bg-gray-800"
        />
      </div>
    </div>,
    document.body
  );
};
export default ImageModal;