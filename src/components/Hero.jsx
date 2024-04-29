import React from 'react';
import myImage from '../assets/images/1689031441956.jpg';
const Hero = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
        <h1 className="text-4xl font-semibold">
          Hey, I'm Wajih. <br />{' '}
        </h1>
        <h2 className="text-3xl">
        Entrepreneur & Computer Science Enthusiast
        </h2>
        
        <div className='image-div'>
        <p className="text-xl para">
        I am a current Computer Science student, at the University of Waterloo, hard-working and ambitious. 
        The co-founder of Talkhappi an AI-based web app that provides virtual counseling by providing feedback and score-based incentives.
        In addition, I'm a Full-Stack Developer, Web & Graphics Designer, and a Tutor. 
        <br /> Find me on{' '}
          <a
            href="https://github.com/Wajih-SK"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/wajih-salam-khan-6a27581ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          , and {' '}
          <a
            href="https://www.instagram.com/wajih_sk/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram.
          </a>{' '}
        
        </p>
        <img className='myimage' src={myImage}/>
        
        </div>
        
        <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/wajih-salam-khan-6a27581ab/"
            className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
          >
            Projects
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;
