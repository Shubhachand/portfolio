import About from '../components/sections/About.jsx';
// import Education from '../components/sections/Education';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <About />
        {/* <Education /> */}
      </div>
    </div>
  );
};

export default AboutPage;