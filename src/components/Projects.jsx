import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">Personal Projects</h2>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-100">File Synchronization Tool</h3>
            <div className="text-sm text-accent-100 mt-2 md:mt-0">Jan 2025 - Feb 2025</div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Developed a high-performance CLI tool for efficient file synchronization using Rust. The project showcases:
            • Multithreading implementation for optimal performance
            • Comprehensive automated testing suite
            • Efficient file system operations
            • Error handling and recovery mechanisms
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Rust</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">CLI Development</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Multithreading</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">System Programming</span>
          </div>
        </div>

        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-100">Personal Portfolio Website</h3>
            <div className="text-sm text-accent-100 mt-2 md:mt-0">April 2025</div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Modern, responsive portfolio website showcasing my professional experience and personal interests. Features include:
            • Component-based architecture using React
            • Responsive design with Tailwind CSS
            • Dark mode aesthetics
            • Interactive UI elements and smooth animations
            • Optimized performance and accessibility
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">React</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Tailwind CSS</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">JavaScript</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Responsive Design</span>
          </div>
        </div>

        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <h3 className="text-2xl font-semibold text-gray-100">Regatta Scoring System</h3>
            <div className="text-sm text-accent-100 mt-2 md:mt-0">2022</div>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Automated scoring system for sailing regattas at Camp Michigania, demonstrating:
            • Python-based automation reducing scoring time by 70%
            • Data processing and validation
            • User-friendly interface for race officials
            • Real-time results calculation and display
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Python</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Data Processing</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">Automation</span>
            <span className="px-4 py-2 bg-dark-300 rounded-lg text-sm text-gray-300 font-medium">UI Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
