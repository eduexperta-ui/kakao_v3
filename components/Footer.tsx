import React, { useState } from 'react';
import ChangelogModal from './ChangelogModal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showChangelog, setShowChangelog] = useState(false);

  return (
    <>
      <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="container mx-auto py-8 px-4 flex flex-col items-center justify-center gap-3">
          <button 
            onClick={() => setShowChangelog(true)}
            className="text-base font-medium text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors underline decoration-dotted underline-offset-4 decoration-gray-400 dark:decoration-gray-600"
            title="Click to view version history"
          >
            Built with Google AI Studio (Vibe Coding Project)
          </button>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} TJ. Kim. All rights reserved.
          </div>
        </div>
      </footer>
      
      {showChangelog && <ChangelogModal onClose={() => setShowChangelog(false)} />}
    </>
  );
};

export default Footer;