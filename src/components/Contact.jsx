import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Concept only - email functionality not yet implemented
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-gray-100">Professional Networks</h3>
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/cameronserr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-accent-100 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl mr-3" />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="https://github.com/camserr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-accent-100 transition-colors duration-300"
            >
              <FaGithub className="text-2xl mr-3" />
              <span>Follow on GitHub</span>
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            For immediate contact, please reach out via LinkedIn messaging.
          </div>
        </div>

        <div className="bg-dark-200 rounded-xl shadow-xl p-8">
          <div className="mb-4 text-sm text-accent-100 bg-dark-300 p-3 rounded-lg">
            Note: This contact form is a concept demonstration and is not yet functional. 
            Please use LinkedIn for direct communication.
          </div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-300 text-gray-100 border border-dark-400 focus:outline-none focus:border-accent-100"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-300 text-gray-100 border border-dark-400 focus:outline-none focus:border-accent-100"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-300 text-gray-100 border border-dark-400 focus:outline-none focus:border-accent-100"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-dark-300 text-gray-100 border border-dark-400 focus:outline-none focus:border-accent-100 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-200 text-white px-6 py-3 rounded-lg hover:bg-accent-100 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl font-medium"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-accent-100 mb-4">Demo Message Received</h3>
              <p className="text-gray-300">
                This is a concept demonstration. For actual communication, 
                please connect with me on LinkedIn.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-accent-100 hover:text-accent-200 transition-colors"
              >
                Reset Demo Form
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>
          Currently, the contact form is a demonstration. For actual communication, 
          please reach out through LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default Contact;
