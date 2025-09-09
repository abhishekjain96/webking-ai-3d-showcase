import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Handle loading screen completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (!isLoading) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial active section
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}

      {/* Main Content */}
      {!isLoading && (
        <div className="smooth-scroll">
          {/* Navigation */}
          <Navigation activeSection={activeSection} />

          {/* Page Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
