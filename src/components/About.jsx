import { FaFileDownload } from 'react-icons/fa';

function About() {
  const skills = {
    languages: [
      'Python',
      'C++',
      'Rust',
      'JavaScript',
      'R',
      'SQL',
      'HTML/CSS'
    ],
    frameworks: [
      'React',
      'Flask',
      'Pandas',
      'NumPy',
      'Tailwind CSS'
    ],
    tools: [
      'Git',
      'Jenkins',
      'GitLab CI/CD',
      'Selenium',
      'AWS Cloud',
      'Jira'
    ],
    concepts: [
      'Test-Driven Development',
      'CI/CD Pipelines',
      'Automation',
      'Agile Methodology',
      'Cross-functional Collaboration'
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">About Me</h2>
      
      <div className="bg-dark-200 rounded-xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          Results-driven Software Engineer with 2.5 years of experience in software development, automation, and DevOps.
          Currently based in Fort Worth, Texas, working at Lockheed Martin Aeronautics. Skilled in Python, C++, CI/CD in Jenkins 
          and Gitlab, with a proven ability to collaborate within cross-functional teams and adapt to evolving project requirements.
        </p>
        
        <p className="text-gray-300 leading-relaxed text-lg">
          While I'm currently enjoying the vibrant tech scene in Fort Worth, I'm open to opportunities in the Midwest 
          and East Coast regions, particularly near the Great Lakes or coastal areas. My background in sailing and 
          outdoor activities has taught me valuable lessons in leadership, adaptability, and problem-solving that I 
          bring to my software engineering work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-accent-100"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">Technical Skills</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-accent-100 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-dark-300 rounded-lg text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-accent-100 mb-3">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-dark-300 rounded-lg text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-accent-100 mb-3">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-dark-300 rounded-lg text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-accent-100 mb-3">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-dark-300 rounded-lg text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">Experience</h3>
          <ul className="space-y-6 text-gray-300">
            <li>
              <div className="font-semibold text-lg text-gray-100">Software Engineer</div>
              <div className="text-sm text-accent-100 mb-2">Lockheed Martin Aeronautics • Fort Worth, TX • April 2024 - Present</div>
              <div className="text-base">
                • Collaborated on Python-based state machine infrastructure, reducing testing costs by 30%<br />
                • Developed and optimized CI/CD pipelines using Jenkins<br />
                • Led development of new capabilities while managing Jira stories and estimates
              </div>
            </li>
            <li>
              <div className="font-semibold text-lg text-gray-100">Associate Software Engineer</div>
              <div className="text-sm text-accent-100 mb-2">Lockheed Martin Aeronautics • Fort Worth, TX • Nov 2022 - April 2024</div>
              <div className="text-base">
                • Developed critical software features improving performance by 50%<br />
                • Utilized test-driven development practices<br />
                • Mentored junior developers and collaborated with cross-functional teams
              </div>
            </li>
            <li>
              <div className="font-semibold text-lg text-gray-100">Area Leader, Sailing</div>
              <div className="text-sm text-accent-100 mb-2">University of Michigan Alumni Association • Boyne City, MI • May 2019 - August 2022</div>
              <div className="text-base">
                • Managed team of 6 employees and program operations<br />
                • Created Python program reducing scoring time by 70%<br />
                • Led sailing sessions across multiple difficulty levels
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-dark-200 rounded-xl shadow-xl p-8 mt-8 transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-6 text-gray-100">Education</h3>
        <div className="text-gray-300">
          <div className="font-semibold text-lg text-gray-100">University of Michigan, Ann Arbor</div>
          <div className="text-base mt-2">Bachelor of Science - Computer Science</div>
          <div className="text-base">Minor in Applied Statistics</div>
          <div className="text-sm text-accent-100 mt-1">Graduated April 2022</div>
          <div className="text-base italic mt-3 text-gray-400">Max Tobias Scholarship Recipient</div>
          <div className="mt-6">
            <a
              href="/Cameron_Serr_Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-accent-200 text-white rounded-lg hover:bg-accent-100 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
            >
              <FaFileDownload className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
