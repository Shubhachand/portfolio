import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import scribbler from "../image/scribbler.png";
import bubblesort from "../image/bubble.png"; // Import your bubble sort image
import travel from '/src/assets/travel.png'
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Scribble",
      description: "A web application that allows users to create to-do lists, take React quizzes, and store notes.",
      image: scribbler, // Add your project screenshot
      technologies: ["React","Tailwind CSS"],
      liveLink: "https://scribler.netlify.app/", // Add your Netlify deployment link
      githubLink: "https://github.com/Shubhachand/PepReactProject.git" // Add your GitHub repository link
    },
    {
      title: "Travel Website",
      description: "A modern travel booking platform with features for discovering destinations, planning trips, and booking accommodations.",
      image: travel,
      technologies: ["React", "Tailwind CSS","netlify"],
      liveLink: "https://shub-travel.netlify.app/", // Add your Netlify deployment link
      githubLink: "https://github.com/Shubhachand/travel.git" // Add your GitHub repository link
    },
    {
      title: "Bubble Sort Visualizer",
      description: "An interactive tool that visually demonstrates the bubble sort algorithm with customizable array sizes and sorting speeds.",
      image: bubblesort,
      technologies: ["React","DSA",  "CSS"],
      liveLink: "https://bubblesortvirtue.netlify.app/", // Add your Netlify deployment link
      githubLink: "https://github.com/Shubhachand/BubbleSortVirtue-.git" // Add your GitHub repository link
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="projects" className="py-20 bg-[#1E1E1E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative">
              {/* Project Card */}
              <div 
                className="bg-[#2A2A2A] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => handleProjectClick(projects[currentSlide].liveLink)}
              >
                <div className="relative">
                  <img 
                    src={projects[currentSlide].image} 
                    alt={projects[currentSlide].title}
                    className="w-full h-64 object-cover transition duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50">
                    <span className="text-white text-lg font-semibold">Click to View Live Project</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{projects[currentSlide].title}</h3>
                  <p className="text-gray-300 mb-4">{projects[currentSlide].description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentSlide].technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-[#333333] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(projects[currentSlide].githubLink);
                      }}
                      className="flex items-center gap-2 bg-[#333333] px-4 py-2 rounded-lg hover:bg-[#444444] transition duration-300"
                    >
                      <FaGithub /> Code
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(projects[currentSlide].liveLink);
                      }}
                      className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-r-lg hover:bg-black/70 transition"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-l-lg hover:bg-black/70 transition"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;