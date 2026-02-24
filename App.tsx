import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import WelcomeModal from './components/WelcomeModal';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the welcome modal in this session
    const hasSeenWelcome = sessionStorage.getItem('portfolio_welcome_seen');
    
    if (!hasSeenWelcome) {
      // Add a small delay for better UX (let the site load a bit first)
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeWelcome = () => {
    sessionStorage.setItem('portfolio_welcome_seen', 'true');
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen font-sans leading-relaxed selection:bg-brand selection:text-black">
      <Cursor />
      {showWelcome && <WelcomeModal onClose={closeWelcome} />}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;