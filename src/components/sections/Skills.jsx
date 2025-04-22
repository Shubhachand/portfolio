import { FaReact, FaNodeJs, FaJava, FaPhp } from 'react-icons/fa';
import { SiGraphql, SiPrisma, SiMongodb, SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si';
import { TbBrandVue } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { name: "React JS", level: 90, icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", level: 85, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "GraphQL", level: 80, icon: <SiGraphql className="text-[#E535AB]" /> },
    { name: "MongoDB", level: 85, icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Prisma", level: 75, icon: <SiPrisma /> },
    { name: "php", level: 70, icon: <FaPhp className="text-[#4FC08D]" /> },
    { name: "JavaScript", level: 90, icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Java", level: 80, icon: <FaJava className="text-[#007396]" /> },
    { name: "C++", level: 75, icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  ];

  return (
    <div id="skills" className="py-20 bg-[#1E1E1E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills with Progress Bars */}
          <div className="space-y-6">
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#333333] transition duration-300"
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;