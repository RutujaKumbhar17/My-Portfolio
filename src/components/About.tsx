import React from 'react';
import { ABOUT_TITLE, ABOUT_DESCRIPTION } from '../utils/constants';
import { Code, Lightbulb, Rocket, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap size={32} className="text-blue-600 dark:text-blue-400 sm:w-10 sm:h-10" />,
      title: 'VIT Bhopal Student',
      description: 'B.Tech CSE with specialization in AI & ML | Core Member - Meraki -The Fine Art Club | Passionate Tech Enthusiast.'
    },
    {
      icon: <Code size={32} className="text-blue-600 dark:text-blue-400 sm:w-10 sm:h-10" />,
      title: 'Developer & Researcher',
      description: 'Hands-on with Python, ML/DL, TensorFlow, Streamlit, Java and real-world projects.'
    },
    {
      icon: <Lightbulb size={32} className="text-blue-600 dark:text-blue-400 sm:w-10 sm:h-10" />,
      title: 'AI/ML Project Builder',
      description: 'Built intelligent apps like Weather Prediction, Cancer Detection, Smart City Dashboards, and KYC via Blockchain.'
    },
    {
      icon: <Rocket size={32} className="text-blue-600 dark:text-blue-400 sm:w-10 sm:h-10" />,
      title: 'Growth-Driven',
      description: 'Python & C++ HackerRank | Machine Learning Certified | Committed to impactful tech for society .'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-blue-900 dark:to-slate-700 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">{ABOUT_TITLE}</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <p className="text-md sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            {ABOUT_DESCRIPTION}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 dark:border-slate-600/50"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-slate-900 dark:text-white leading-tight">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;