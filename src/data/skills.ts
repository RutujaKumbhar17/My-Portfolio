import { BrainCircuit, Code, DatabaseZap, GitBranch, Users, MessageSquare, GraduationCap, Trophy, Brain, Lightbulb, Cpu, Building2 } from 'lucide-react';

export const machineLearningSkills = [
  { name: "Machine Learning", level: 4, icon: BrainCircuit, color: "from-purple-500 to-pink-500" },
  { name: "Deep Learning", level: 4, icon: BrainCircuit, color: "from-blue-500 to-cyan-500" },
  { name: "TensorFlow", level: 3, icon: BrainCircuit, color: "from-orange-500 to-red-500" },
  { name: "Scikit-learn", level: 4, icon: BrainCircuit, color: "from-green-500 to-emerald-500" },
  { name: "NLP", level: 4, icon: BrainCircuit, color: "from-indigo-500 to-purple-500" }
];

export const programmingLanguages = [
  { name: "Python", level: 4, icon: Code, color: "from-yellow-500 to-amber-500" },
  { name: "Java", level: 3, icon: Code, color: "from-red-500 to-orange-500" },
  { name: "C++", level: 4, icon: Code, color: "from-sky-500 to-blue-500" },
  { name: "JavaScript", level: 3, icon: Code, color: "from-yellow-400 to-yellow-500" },
];

export const dataScienceTools = [
  { name: "Pandas", level: 4, icon: DatabaseZap, color: "from-slate-500 to-gray-500" },
  { name: "NumPy", level: 4, icon: DatabaseZap, color: "from-blue-400 to-sky-400" },
  { name: "Matplotlib", level: 3, icon: DatabaseZap, color: "from-purple-400 to-violet-400" },
  { name: "Streamlit", level: 4, icon: DatabaseZap, color: "from-red-400 to-rose-400" },
  { name: "SQL", level: 3, icon: DatabaseZap, color: "from-teal-500 to-cyan-500" }
];

export const developmentTools = [
  { name: "Git & GitHub", level: 4, icon: GitBranch, color: "from-black to-gray-700" },
  { name: "VS Code", level: 5, icon: GitBranch, color: "from-blue-600 to-sky-600" },
  { name: "Docker", level: 2, icon: GitBranch, color: "from-cyan-500 to-blue-500" },
  { name: "Jira", level: 3, icon: GitBranch, color: "from-sky-500 to-indigo-500" }
];

export const softSkills = [
  { name: "Teamwork", level: 5, icon: Users, color: "from-green-500 to-lime-500" },
  { name: "Problem-Solving", level: 5, icon: Users, color: "from-yellow-500 to-amber-500" },
  { name: "Communication", level: 4, icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
  { name: "Leadership", level: 4, icon: Users, color: "from-red-500 to-rose-500" },
  { name: "Adaptability", level: 5, icon: Users, color: "from-indigo-500 to-purple-500" }
];

export const education = [
    {
      degree: "B.Tech in CSE (AI & ML)",
      institution: "VIT Bhopal University",
      location: "Bhopal, MP, India",
      period: "2023 - 2027 ",
      description: "Core coursework in Data Structures, Algorithms, Machine Learning, Deep Learning. Active member of the university's technical clubs and hackathon participant."
    },
    // Add more education items here if needed
];

export const experience = [
  {
    organization: "Meraki - The Fine Arts Club",
    role: "Core Team Member, Event Management",
    period: "Oct 2023 - Present",
    description: "Led and contributed to the planning and execution of multiple university-wide cultural and technical events. Responsible for team coordination, logistics, and ensuring successful event outcomes.",
    links: {
      // Add relevant links here if available
    }
  },
  // Add more experience items here if needed
];

export const skillClusters = []; // This was in your component but seems unused. Kept for compatibility.