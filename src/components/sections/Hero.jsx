import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      id="home"
      className="w-full min-h-screen relative bg-[#1E1E1E]  text-white overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#64ffda",
            },
            links: {
              color: "#64ffda",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center sm:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#64ffda] font-mono mb-4"
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl sm:text-7xl font-bold mb-4 text-[#ccd6f6]"
            >
              Shubhachand Patel.
            </motion.h1>

            {/* Dynamic Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl sm:text-6xl font-bold text-[#8892b0] mb-6"
            >
              <TypeAnimation
                sequence={[
                  "I build things for the web.",
                  2000,
                  "Full Stack Developer.",
                  2000,
                  "MERN Stack Expert.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="max-w-lg text-[#8892b0] mb-8 text-lg"
            >
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently focused on building responsive
              full-stack web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda1a] transition-colors duration-300"
              >
                Check out my work!
              </motion.button> */}
              <a href="/src/assets/resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded hover:bg-[#64ffda]/90 transition-colors duration-300"
                >
                  Download Resume
                </motion.button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex justify-center sm:justify-start gap-6"
            >
              <motion.a
                href="https://github.com/shubhachand"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shubhachand/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        {/* <span className="text-[#64ffda] text-sm mb-2">Scroll Down</span> */}
        {/* <FaArrowDown className="text-[#64ffda] animate-bounce" /> */}
      </motion.div>
    </div>
  );
};

export default Hero;
