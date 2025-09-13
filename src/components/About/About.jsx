import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import ProfileImage from '../../assets/logo.jpg';


const About = () => {
  return (
    <section id='about' 
    className='px-[7vw] py-4 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Gretting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name  */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Shruti Sahu
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white '>
              I am a<span> </span>
            </span>
            {/*<ReactTypingEffect
              text={[
                'Frontend Developer',
                'React Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>
              )}
            />*/}
            <Typewriter
               words={['Frontend Developer', 'React Developer', 'Coder']}
               loop={0}
               cursor
               cursorStyle="|"
               typeSpeed={100}
               deleteSpeed={50}
               delaySpeed={2000}
            />
          </h3>
          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a motivated Frontend Developer with hands-on experience in ReactJS, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy building responsive, user-friendly, and modern web applications, and I’ve worked on projects like a Blinkit Clone and a Food Ordering Web Page.I am eager to learn emerging frontend technologies, improve my problem-solving skills, and contribute to impactful projects as I grow in my career as a React Developer.
          </p>
          { /* Resume button */}
          <a href='https://drive.google.com/file/d/1KgWwp9WHjKUmCANhUDtPaibmuxvq4wif/view' 
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform:hover:scale-105'
          style={{
            background: 'linear-gradient(90deg, #8245ec, 0%, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
        <Tilt 
          className='w-48 h-48 sm:h-64 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
          <img src={ProfileImage} 
          alt='Shruti Sahu'
          className='h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
        </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About