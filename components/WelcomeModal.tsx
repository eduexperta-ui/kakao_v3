import React, { useEffect, useState } from 'react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    requestAnimationFrame(() => setIsVisible(true));

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => { 
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={`relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center transform transition-all duration-500 border border-gray-100 dark:border-neutral-800 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center">
                {/* Sparkles Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          김태진's 웹 포트폴리오에 <br/>방문해 주셔서 감사합니다!
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 break-keep">
          이 웹사이트는 <span className="font-semibold text-gray-900 dark:text-gray-100">Google AI Studio</span>와 <span className="font-semibold text-gray-900 dark:text-gray-100">Vercel</span>을 활용해<br/> 
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">직접 배포한 포트폴리오</span>입니다.
        </p>

        <button 
          onClick={onClose}
          className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/20 active:scale-95"
        >
          포트폴리오 살펴보기
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;