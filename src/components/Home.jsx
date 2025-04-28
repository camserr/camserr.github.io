import { FaGithub, FaLinkedin, FaFileDownload, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const socialLinks = {
    github: 'https://github.com/camserr',
    linkedin: 'https://linkedin.com/in/cameronserr'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-gray-100 tracking-tight">
          Cameron M. Serr
        </h1>
        <div className="flex items-center justify-center mb-4 text-accent-100">
          <FaMapMarkerAlt className="mr-2" />
          <span>Fort Worth, TX</span>
        </div>
        <p className="text-xl text-gray-400 mb-8 font-light tracking-wide">
          Software Engineer at Lockheed Martin
          <span className="mx-2">•</span>
          AWS Cloud Practitioner
          <span className="mx-2">•</span>
          Secret Clearance
        </p>
        
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-accent-100 transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-accent-100 transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/projects"
            className="bg-accent-200 text-white px-8 py-3 rounded-lg hover:bg-accent-100 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl font-medium"
          >
            View My Work
          </Link>
          <a
            href="/Cameron_Serr_Resume.pdf"
            download
            className="flex items-center justify-center bg-dark-300 text-white px-8 py-3 rounded-lg hover:bg-dark-400 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl font-medium"
          >
            <FaFileDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
