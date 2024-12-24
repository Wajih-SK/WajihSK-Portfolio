import React from 'react';
import sangeet from '../assets/images/155285315.png';
import engding from '../assets/images/Screenshot 2024-04-28 232233.png';
import tototimer from '../assets/images/therahapi_logo.jpg';
import tik from '../assets/images/tik.png';
import watan from '../assets/images//watan.png';
import rsf from '../assets/images/RSFLOGO.png';
import triangle from '../assets/images/triangle.png';
import envlop from '../assets/images/Envlop.png';

const Projects = () => {
  const works = [
    {
      title: 'TalkHappi',
      description: 'TalkhAPPi is an AI-driven web app designed to revolutionize access to mental health support by providing virtual counseling, personalized feedback, and score-based incentives. Leveraging advanced AI models, TalkhAPPi ensures individuals lacking proper resources can receive meaningful assistance. Successfully pitched at The Diamond Challenge 2023, The Paradigm Challenge, and SXSW Startup Competition, TalkhAPPi showcases the power of AI in transforming mental health accessibility.',
      code: 'https://github.com/SimerusM/Talkhappi',
      live: 'https://talkhappi.ca/',
      youtube: 'false',
      stack: 'Next.js, Tailwind CSS, Express, Mongoose, JsonWebToken, Bycrpt',
      thumbnail: tototimer,
    },
    {
      title: 'Envlop',
      description: 'Envlop AI is an intelligent email management system that utilizes Python, the Gmail API, and OpenAI\'s API to revolutionize the way you handle your inbox. Say goodbye to sifting through dozens or even hundreds of emails. With Envelope AI, your emails are automatically categorized, prioritized, and summarized, ensuring you never miss anything important. The system also goes a step further by learning from your email habits to help generate more efficient and personalized email responses.',
      code: 'https://github.com/Envlop-AI',
      live: 'false',
      youtube: 'false',
      stack: 'FastAPI, SQLAlchemy, React, BootStrap, Stripe, OpenAI, Authlib',
      thumbnail: envlop,
    },
    {
      title: 'Calendarium',
      description: 'Calendarium Cloud is a SaaS platform that redefines calendar management by seamlessly synchronizing data across Google Calendar, Outlook Calendar, and iCloud Calendar. Designed for instant and reliable synchronization, it ensures all your calendars are always up-to-date. With Calendarium Cloud, enjoy a streamlined and enhanced experience across all your favorite platforms.',
      code: 'https://github.com/Calendarium-Cloud',
      live: 'false',
      youtube: 'false',
      stack: 'Python, Flask, MySQL, React, Azure, Azure DevOps, Swagger',
      thumbnail: sangeet,
    },
    {
      title: 'TriangleNet',
      description: 'Developed a Python library providing a simple yet robust framework for building neural networks, implementing core functionalities like gradient descent, forward and backward propagation, and ReLU activation. Included dynamic learning rate adjustment and visualization tools for tracking training progress and debugging',
      code: '',
      live: 'false',
      youtube: 'false',
      stack: 'Python, Numpy, Pandas, Matplotlib, MNIST Digit Recognizer',
      thumbnail: triangle,
    },
    {
      title: 'Student-of-Watan',
      description: 'Watan is a modified version of Catan, built with a modular design using patterns like Observer, Strategy, and Factory for player interactions, board setup, and game phases. Smart pointers ensure efficient memory management with no leaks, while the architecture focuses on scalability and maintainability for flexible gameplay.',
      code: 'https://github.com/Wajih-SK/students-of-watan',
      live: 'false',
      youtube: 'false',
      stack: 'C++',
      thumbnail: watan,
    },
    {
      title: 'ActionOnRadon',
      description: 'A web app mapping Radon Gas levels across Canada, addressing the second-highest cause of lung cancer. It allows users to submit their postal code as community involvement to build a collective database, providing instant Radon concentration info for the area',
      code: 'false',
      live: 'false',
      youtube: 'https://www.youtube.com/watch?v=XCxO08MTZ_c',
      stack: 'HTML, Bootstrap 5',
      thumbnail: engding,
    },
    {
      title: 'Tic-Tac-Toe-AI',
      description: 'Web app which seamlessly synchronizes calendars across multiple accounts. It implemented OAuth to securely access users’ calendar information, ensuring robust data protection',
      code: 'https://github.com/Wajih-SK/AI-Tic-Tac-Toe',
      live: 'false',
      youtube: 'false',
      stack: 'Python, Minimax Alg',
      thumbnail: tik,
    },
    {
      title: 'Rock Star Falcon Transportation Official Website',
      description: 'Web app which seamlessly synchronizes calendars across multiple accounts. It implemented OAuth to securely access users’ calendar information, ensuring robust data protection',
      code: 'https://github.com/Wajih-SK/RSF-App',
      live: 'false',
      youtube: 'false',
      stack: 'React.js Tailwind CSS',
      thumbnail: rsf,
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 hover:border-zinc-200 rounded-2xl"
          >
            <img
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="object-cover w-full h-auto rounded-2xl"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <p>Stack: {work.stack}</p>
              <div className="flex flex-row items-center w-full">
              

              {
                work.live == 'false' ? <></> :
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Live{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-devices"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
}
                {
                work.code == 'false' ? <></> : <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg ms-3 hover:bg-zinc-900 hover:text-white"
                >
                  Source Code{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                </a>
}
              {
                work.youtube == 'false' ? <></> : <a
                href={work.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg ms-3 hover:bg-zinc-900 hover:text-white"
              >
                Video{' '}
              </a>
              }
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
