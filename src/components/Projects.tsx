import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, AlertTriangle } from 'lucide-react';
import { contactData } from '../data/data';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/RutujaKumbhar17/repos?sort=updated&direction=desc`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects from GitHub.');
        }
        const data: Repo[] = await response.json();
        const sortedRepos = data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
        setRepos(sortedRepos);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <div className="text-center text-slate-600 dark:text-slate-300">Loading projects...</div>;
    }

    if (error) {
      return (
        <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg flex items-center justify-center">
            <AlertTriangle className="mr-2" /> {error}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, index) => (
          <div
            key={repo.id}
            className="group bg-white/60 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 dark:border-slate-600/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate" title={repo.name}>
                  {repo.name.replace(/[-_]/g, ' ')}
                </h3>
                <div className="flex items-center text-yellow-500 flex-shrink-0">
                  <Star size={16} className="fill-current" />
                  <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">{repo.stargazers_count}</span>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed flex-grow">
                {repo.description || 'No description available.'}
              </p>

              {repo.language && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600/50 text-slate-700 dark:text-slate-300 text-sm rounded-full font-medium">
                    {repo.language}
                  </span>
                </div>
              )}

              <div className="flex space-x-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-600/50">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github size={20} className="mr-2" />
                  <span className="font-medium">Code</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section 
        id="projects" 
        className="py-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100 dark:from-slate-800 dark:via-blue-900 dark:to-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            My most-starred projects, fetched directly from my GitHub profile.
          </p>
        </div>
        {renderContent()}
        <div className="text-center mt-12">
          <a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;