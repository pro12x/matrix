import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-matrix">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-matrix blink-slow" />
            <span className="text-matrix-bright">CODINGGOLINE</span>
            <span className="text-matrix blink">█</span>
          </div>
          
          <div className="flex gap-1 md:gap-4">
            {sections.map((section) => (
              <button
                type="button"
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-2 md:px-4 py-2 text-sm md:text-base transition-all border border-transparent ${
                  activeSection === section.id
                    ? 'text-matrix-bright border-matrix bg-matrix-dark'
                    : 'text-matrix hover:text-matrix-bright hover:border-matrix'
                }`}
              >
                <span className="blink-fast">&gt;</span> {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}