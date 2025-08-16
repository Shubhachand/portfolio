import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import scribbler from "../image/scribbler.png";
import bubblesort from "../image/bubble.png";
import travel from '/src/assets/travel.png';

const projects = [
  {
    title: "Scribble",
    description: "A web application that allows users to create to-do lists, take React quizzes, and store notes.",
    image: scribbler,
    technologies: ["React", "Tailwind CSS"],
    liveLink: "https://scribler.netlify.app/",
    githubLink: "https://github.com/Shubhachand/PepReactProject.git"
  },
  {
    title: "Travel Website",
    description: "A modern travel booking platform with features for discovering destinations, planning trips, and booking accommodations.",
    image: travel,
    technologies: ["React", "Tailwind CSS", "Netlify"],
    liveLink: "https://shub-travel.netlify.app/",
    githubLink: "https://github.com/Shubhachand/travel.git"
  },
  {
    title: "Bubble Sort Visualizer",
    description: "An interactive tool that visually demonstrates the bubble sort algorithm with customizable array sizes and sorting speeds.",
    image: bubblesort,
    technologies: ["React", "DSA", "CSS"],
    liveLink: "https://bubblesortvirtue.netlify.app/",
    githubLink: "https://github.com/Shubhachand/BubbleSortVirtue-.git"
  }
];

const Projects = () => {
  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="projects" className="py-20 bg-gradient-to-br from-[#181818] via-[#232526] to-[#1E1E1E] text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#232526] to-[#1E1E1E] rounded-3xl overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover transition duration-500 group-hover:opacity-80"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-300 drop-shadow-lg">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-xs font-semibold shadow hover:from-pink-500 hover:to-yellow-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.githubLink);
                    }}
                    className="flex items-center gap-2 bg-[#232526] px-4 py-2 rounded-lg hover:bg-[#33334d] transition duration-300 border border-white/20 shadow"
                  >
                    <FaGithub /> <span className="font-medium">Code</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.liveLink);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg hover:from-pink-500 hover:to-yellow-500 transition duration-300 border border-white/20 shadow"
                  >
                    <FaExternalLinkAlt /> <span className="font-medium">Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
