import React from "react";
import certificate from '../../assets/certificate.png'
import { FaDownload } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom-2">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        EXPERIENCE
      </h2>
      <div className='w-32 h-1 bg-purple-500 mx-auto mt-4 mb-4'></div>
      <p className="text-gray-400 font-semibold">
          I am a fresher in the field of software development, but highly 
          <span className="text-[#8245ec] font-medium"> passionate about frontend development</span>.  
          I have built projects like a <span className="text-[#8245ec]">Blinkit Clone</span> and 
          <span className="text-[#8245ec]"> Food Delivery Web App</span>, which helped me learn 
          real-world problem-solving and clean coding practices.  
          I am eager to bring my skills, dedication, and hunger to learn into a professional environment, 
          and grow as part of an innovative company.
      </p><br/>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Internship Card */}
        <div className="bg-[#0f0e1a] border-purple-700 border-2  rounded-2xl shadow-lg p-6 hover:shadow-[#8245ec] transition duration-300">
          <h3 className="text-xl font-semibold text-[#8245ec]">
            Frontend Development Intern
          </h3>
          <p className="text-gray-400 italic">
            BR SofTech (Skillwala)- Remote <br/> April 2025 – June 2025
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>Worked on responsive UIs using ReactJS, HTML, CSS, and JavaScript.</li>
            <li>Gained hands-on experience in building reusable components.</li>
            <li>Improved frontend development skills and UI/UX knowledge.</li>
          </ul>
        </div>

        {/* Blinkit Clone Card */}
        <div className="bg-[#0f0e1a] rounded-2xl border-purple-700 border-2 shadow-lg p-6 hover:shadow-[#8245ec] transition duration-300">
          <h3 className="text-xl font-semibold text-[#8245ec]">
            Blinkit Clone (ReactJS Project)
          </h3>
          <p className="text-gray-400 mt-1">
            A clone of Blinkit, an online grocery delivery platform.
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>Developed product listing and shopping cart functionality.</li>
            <li>Used React hooks (<code>useState</code>, <code>useEffect</code>) for state management.</li>
            <li>Designed a mobile-friendly UI with Tailwind CSS.</li>
          </ul>
        </div>

        {/* certificate */}
        <div className="bg-[#0f0e1a] rounded-2xl border-purple-700 border-2 shadow-lg p-6 hover:shadow-[#8245ec] transition duration-300">
          <img src={certificate} alt="Frontend Development Certificate"/>
          <p className="text-gray-300 mb-5 mt-2">
            Successfully completed a 2-month remote Frontend Development Internship under the Skillwala program at BR SofTech, where I gained hands-on experience.
          <FaDownload  className="text-white bg-transparent inline mx-2"/>
          </p> 
          
          
          <a
          href="https://drive.google.com/file/d/1jTTZ5j6sxhNZMjkepqdAXp4DoT1m12t-/view" 
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(90deg, #8245ec, 0%, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
           className="p-4 rounded-full bg-[#8245ec] shadow-sm shadow-[#8245ec] text-white font-bold">
            CERTIFICATE
           </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
