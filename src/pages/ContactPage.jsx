import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;