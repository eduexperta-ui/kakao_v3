import React, { useEffect } from 'react';
import type { Skill } from '../types';

interface SkillModalProps {
  skill: Skill;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <div 
        className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-scaleUp p-6 md:p-8"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition p-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 flex items-center justify-center text-brand bg-brand/5 rounded-full">
                {React.isValidElement(skill.icon)
                  ? React.cloneElement(skill.icon as React.ReactElement<any>, { className: 'w-10 h-10' })
                  : skill.icon}
            </div>

            <h3 id="skill-modal-title" className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {skill.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed break-keep">
                {skill.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;