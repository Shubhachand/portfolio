import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#1E1E1E] to-[#121212] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">Let's work together on something great</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <FaEnvelope className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:shubhachandpatel2022@gmail.com" className="text-white hover:text-blue-500 transition">
                      shubhachandpatel2022@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <FaPhone className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="+91 7978051090" className="text-white hover:text-blue-500 transition">
                      +91 7978051090
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400">Sambalpur</p>
                    <p className="text-white">Odisha ,India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {/* Add your social media links here */}
                  <a  className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-500/20 transition">
                    {/* Add social media icon */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#333333] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#333333] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;