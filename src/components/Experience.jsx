import React from 'react';
import sangeet from '../assets/images/Responisve Wesbite.jpg';
import engding from '../assets/images/Screenshot 2024-04-28 233853.png';
import tototimer from '../assets/images/Screenshot 2024-04-28 233924.png';

const Experience = () => {
  const works = [
    {
      title: 'UX/UI Designer and Front-end Developer',
      description: 'Developed an interactive website with 3000+ monthly visitors within the span of 3 months. Redesigned the website interface, reducing user clicks by 30%. Leveraged memoization with React.memo, enhancing DOM rendering speed by 20%',
     
      live: 'https://dentistryonphillip.ca',
      
      
      thumbnail: tototimer,
    },
    {
      title: 'Web Development Tutor',
      description: 'Developed and implemented two 8-week introductory curricula in web development and Python programming Mentored 20+ campers, igniting genuine interest in computer science through personalized guidance',
   
      live: 'false',
   
      thumbnail: sangeet,
    },
    {
      title: 'Full Stack Developer',
      description: 'Designed a robust website using NextJs to leverage server-side rendering for enhanced speed. Incorporated pythons Flask framework for server-side to ensure efficient backend functionality and seamless integration with the frontend',

      live: 'https://future-stone.com',


      thumbnail: engding,
    },
    
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Experience</h1>
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
              <div className="flex flex-row items-center w-full">
              {
                work.live == 'false' ? <></> :
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Website{' '}
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
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
