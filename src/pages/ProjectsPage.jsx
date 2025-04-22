import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
  return (
    <div className="pt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;