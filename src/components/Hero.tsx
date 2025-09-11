import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { heroData, contactData } from '../data/data';

const Hero: React.FC = () => {
  const introTexts = ["Hello, I'm", heroData.name, heroData.title];
  const [displayedLines, setDisplayedLines] = useState(['', '', '']);
  const [phase, setPhase] = useState('initial-typing'); 
  const [lineIndex, setLineIndex] = useState(0);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const initialPause = 3000;
  const loopPause = 500;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'initial-typing') {
      const currentLine = introTexts[lineIndex];
      const currentDisplayed = displayedLines[lineIndex];

      if (lineIndex < introTexts.length && currentDisplayed.length < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[lineIndex] = currentLine.substring(0, currentDisplayed.length + 1);
            return newLines;
          });
        }, typingSpeed);
      } else if (lineIndex < introTexts.length - 1) {
        timeout = setTimeout(() => setLineIndex(lineIndex + 1), 300);
      } else {
        timeout = setTimeout(() => {
            setLineIndex(introTexts.length - 1);
            setPhase('deleting-all');
        }, initialPause);
      }
    } else if (phase === 'deleting-all') {
        const currentDisplayed = displayedLines[lineIndex];
        if (currentDisplayed.length > 0) {
            timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    newLines[lineIndex] = currentDisplayed.substring(0, currentDisplayed.length - 1);
                    return newLines;
                });
            }, deletingSpeed);
        } else if (lineIndex > 0) {
            timeout = setTimeout(() => setLineIndex(lineIndex - 1), 100);
        } else {
            timeout = setTimeout(() => {
                setLineIndex(0);
                setPhase('re-typing-all');
            }, loopPause);
        }
    } else if (phase === 're-typing-all') {
        const currentLine = introTexts[lineIndex];
        const currentDisplayed = displayedLines[lineIndex];
        if (currentDisplayed.length < currentLine.length) {
            timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    newLines[lineIndex] = currentLine.substring(0, currentDisplayed.length + 1);
                    return newLines;
                });
            }, typingSpeed);
        } else if (lineIndex < introTexts.length - 1) {
            timeout = setTimeout(() => setLineIndex(lineIndex + 1), 300);
        } else {
            timeout = setTimeout(() => {
                setLineIndex(introTexts.length - 1);
                setPhase('deleting-all');
            }, loopPause);
        }
    }

    return () => clearTimeout(timeout);
  }, [displayedLines, lineIndex, phase]);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-blue-900 dark:to-slate-700 transition-colors duration-300 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="space-y-4 md:space-y-6 h-48 md:h-56">
              <p className="text-blue-600 dark:text-blue-300 text-lg font-medium">
                {displayedLines[0]}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-800 dark:text-white">
                {displayedLines[1]}
              </h1>
              <p className="text-xl sm:text-2xl font-light text-slate-700 dark:text-blue-200">
                {displayedLines[2]}
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-6">
                <button
                  onClick={scrollToProjects}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold flex items-center transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
                >
                  View my work <ArrowRight className="ml-2" size={18} />
                </button>
                <a
                  href="/resume.pdf"
                  download="Rutuja_Kumbhar_Resume.pdf"
                  className="bg-slate-800 hover:bg-slate-700 dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold flex items-center transform hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  Resume <Download className="ml-2" size={18} />
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold flex items-center transform hover:scale-105 transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  Get In Touch <Mail className="ml-2" size={18} />
                </button>
              </div>
              <div className="flex justify-center md:justify-start space-x-6 pt-8">
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-white transform hover:scale-110 transition-all duration-200" aria-label="GitHub profile"><Github size={28} /></a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-white transform hover:scale-110 transition-all duration-200" aria-label="LinkedIn profile"><Linkedin size={28} /></a>
                <a href={`mailto:${contactData.email}`} className="text-slate-600 dark:text-blue-300 hover:text-blue-600 dark:hover:text-white transform hover:scale-110 transition-all duration-200" aria-label="Email me"><Mail size={28} /></a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center mt-12 md:mt-0 animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl animate-float-subtle">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img src={heroData.profileImageUrl} alt={heroData.name} className="w-full h-full object-cover object-top rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;