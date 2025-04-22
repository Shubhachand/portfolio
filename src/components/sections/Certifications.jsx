import React from 'react';
import Images from '../image/image.png';
import iot from '/src/assets/iot.png';
import nodejs from '/src/assets/nodejs.png';
import ach from '/src/assets/pythonach.png';
const CertificateCard = ({ title, provider, imageUrl, link }) => {
  return (
    <div className=" bg-gradient-to-b from-[#0e0d0d] to-[#121212] shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">Provided by: {provider}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

const CertificatePage = () => {
  const certificates = [
    {
      title: "Introduction to IOT",
      provider: "NPTEL",
      imageUrl: iot,
      link: "https://drive.google.com/file/d/1FNUmpXV5_T1y9LT418moRHjhSwvIxfRj/view?usp=drive_link"
    },
    {
      title: "Building Web Applications in PHP",
      provider: "Coursera",
      imageUrl: Images,
      link: "https://www.coursera.org/account/accomplishments/certificate/12GJRVG8ON9J"
    },
    {
      title: "Server Side Development with NodeJS",
      provider: "Coursera",
      imageUrl: nodejs,
      link: "http://coursera.org/account/accomplishments/certificate/SXTAPHURXQ69"
    },
    {
      title:"python bootcamp ",
      provider: "CodingBlockLPU",
      imageUrl: ach,
      link:"https://certificate.givemycertificate.com/c/fb950603-3f90-4c34-bc79-234c03ea1204"
    },
  ];

  return (
    <div className="py-24  bg-gradient-to-b from-[#141414] to-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Certificates</h1>
          <p className="text-gray-400 text-lg">A collection of my achievements and certifications</p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
