import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import ContactPopup from './ContactPopup';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const ThemeToggle: React.FC<Pick<HeaderProps, 'theme' | 'toggleTheme'>> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    {theme === 'dark' ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )}
  </button>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupType, setPopupType] = useState<'phone' | 'email' | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closePopup = () => setPopupType(null);

  const handleMobileNavClick = () => {
    // Just close the menu; browser handles hash navigation
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300 h-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-end md:justify-center h-full relative z-50">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center gap-x-10">
              {NAV_LINKS.map(link => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-bold text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-x-3 ml-12 border-l border-gray-300 dark:border-neutral-700 pl-8">
              <button 
                onClick={() => setPopupType('phone')} 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors focus:outline-none focus:ring-2 focus:ring-brand" 
                aria-label="Open phone contact"
              >
                {Icons.phone}
              </button>
              <button 
                onClick={() => setPopupType('email')} 
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors focus:outline-none focus:ring-2 focus:ring-brand" 
                aria-label="Open email contact"
              >
                {Icons.email}
              </button>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 text-gray-800 dark:text-gray-200 focus:outline-none" 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md flex flex-col items-center justify-start pt-24 h-[100dvh] animate-fadeIn">
            <nav className="flex flex-col items-center gap-8 w-full">
              {NAV_LINKS.map(link => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={handleMobileNavClick}
                    className="text-2xl font-bold text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-[#FEE500] transition-colors w-full text-center py-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-12 flex items-center gap-x-8">
              <button 
                onClick={() => { setPopupType('phone'); setIsMenuOpen(false); }} 
                className="flex flex-col items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-[#FEE500]" 
              >
                <div className="p-3 bg-gray-100 dark:bg-neutral-800 rounded-full shadow-sm">
                    {Icons.phone}
                </div>
                <span className="text-sm font-medium">Call</span>
              </button>
              <button 
                onClick={() => { setPopupType('email'); setIsMenuOpen(false); }} 
                className="flex flex-col items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-[#FEE500]" 
              >
                <div className="p-3 bg-gray-100 dark:bg-neutral-800 rounded-full shadow-sm">
                    {Icons.email}
                </div>
                <span className="text-sm font-medium">Email</span>
              </button>
            </div>
          </div>
        )}
      </header>
      {popupType && <ContactPopup type={popupType} onClose={closePopup} />}
    </>
  );
};

export default Header;