import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
   
  //smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behaviour: "smooth"})
    }
  }

  return (
    <div className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semi-bold text-purple-500'>
          Shruti Sahu
        </h2>
        {/* Navigation links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About", id:"about"},
            {name:"Skills", id:"skills"},
            {name:"Experience", id:"experience"},
            {name:"Projects", id:"work"},
            {name:"Education", id:"education"},
          ].map((item, index) => (
            <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* social media icons*/}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaFacebook />, link:"https://www.facebook.com/shruti.sahu.906168"},
            {icon: <FaXTwitter />, link:"https://x.com/"},
            {icon: <FaInstagram />, link:"https://www.instagram.com/18._.shruti/"},
            {icon: <FaLinkedin />, link:"https://www.linkedin.com/in/shruti-sahu-9215b4281/"},
          ].map((item, index) => (
            <a 
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className='text-sm mt-6 text-gray-400'>
          &copy; 2025 Shruti Sahu. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;