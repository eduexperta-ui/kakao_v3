import React, { useEffect } from 'react';

interface ChangelogModalProps {
  onClose: () => void;
}

const ChangelogModal: React.FC<ChangelogModalProps> = ({ onClose }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-scaleUp"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Version History
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - Scrollable Timeline */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="relative border-l-2 border-gray-200 dark:border-neutral-800 space-y-10 ml-3">
                
                {/* v1.0.0 Entry */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-neutral-900"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">v1.0.0 Portfolio Launch</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">2024.02.12</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-gray-600 dark:text-gray-300">
                        <li>포트폴리오 웹사이트 배포 (React 19, TypeScript)</li>
                        <li>다크모드(Dark Mode) 지원 및 시스템 테마 연동</li>
                        <li>Hero 섹션 인터랙티브 파티클 애니메이션 구현</li>
                        <li>SEO 최적화 및 모바일 반응형 디자인 적용</li>
                    </ul>
                </div>

                {/* Future Entry Example (Hidden or Commented out) */}
                {/* 
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-neutral-900"></div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">v1.1.0 Update</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">Coming Soon</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-gray-600 dark:text-gray-300">
                        <li>블로그 섹션 추가 예정</li>
                        <li>성능 최적화</li>
                    </ul>
                </div> 
                */}

            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-100 dark:border-neutral-800 text-center">
                <p className="text-sm text-gray-400">
                    This project is continuously evolving.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogModal;