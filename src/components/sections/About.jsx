import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from "../image/images.jpg.png";
const About = () => {
  return (
    <div id="about" className="py-20 bg-[#1E1E1E] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-2xl w-full object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-6"></div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi, I'm a third-year B.Tech student at Lovely Professional University (LPU),
                  passionate about web development and software engineering. I specialize in 
                  creating responsive and user-friendly web applications using modern technologies 
                  like React, Node.js, and MongoDB.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Currently pursuing my B.Tech in Computer Science, I'm focused on
                building practical projects that solve real-world problems. I enjoy
                learning new technologies and implementing them in my projects.
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#2A2A2A] p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-white">B.Tech in Computer Science</p>
                <p className="text-gray-400">Lovely Professional University • 2022-2026</p>
                <p className="text-gray-400">CGPA: 7.0</p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'JavaScript',
                  'Tailwind CSS',
                  'Git',
                  'Java',
                  'C++',
                  'HTML/CSS'
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#2A2A2A] text-gray-300 rounded-full text-sm hover:bg-[#333333] transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/shubhachand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhachand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
               <a href='/src/assets/resume.pdf' download>
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </motion.button>
               </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;