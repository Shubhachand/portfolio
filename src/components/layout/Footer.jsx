import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Install react-icons first

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shubhachand Patel</h3>
            <p className="text-gray-300">B.Tech | Web Developer</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className=" flex items-center justify-between ">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition duration-300">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/shubhachand" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shubhachand/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
             
               
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Shubhachand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;