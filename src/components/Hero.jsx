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
        I’m a Computer Science student at the University of Waterloo with a passion for creating impactful tech solutions. 
        I co-founded Talkhappi, an AI-driven web app offering virtual counseling with personalized feedback and incentive-based support. 
        As a Full-Stack Developer and Web Designer, I’ve built platforms like Calendarium Cloud for seamless calendar synchronization and websites for businesses
         like Rock Star Falcon Transport and Future Stone. My skill set includes expertise in React, Node.js, Python (FastAPI, Flask), MongoDB, and cloud services
          like Azure and AWS. Additionally, I have experience with AI/ML projects, such as developing a neural network from scratch. Beyond coding, I am also a Tutor 
          and Graphics Designer. Let’s connect on GitHub, LinkedIn, and Instagram!


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
        <img 
            className="myimage" 
            src={myImage} 
            alt="Wajih" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '10px', // Optional for rounded corners
            }}
          />
        
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
