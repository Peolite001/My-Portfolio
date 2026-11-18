import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      title: "Tubidy-Clone",
      description: "A fast, ad-free platform to download your favourite MP3 music and MP4 videos.",
      image: "/1.png",
      tags: ["HTML5", "CSS3", "Fontawesome"],
      demoUrl: "https://peolite001.github.io/tubidy-clone/",
      codeUrl: "https://github.com/Peolite001/tubidy-clone.git"
    },
    {
      title: "PeoFile",
      description: "A Platform where you can share your ideas, get feedback, and learn from others.",
      image: "/PeoFile.png",
      tags: ["React", "Tailwind CSS", "React Icons"],
      demoUrl: "https://peo-file.vercel.app/",
      codeUrl: "https://github.com/Peolite001/PeoFile"
    },
    {
      title: "HubSpot Homepage-Clone",
      description: "Software and Tools for your business.",
      image: "/hub.png",
      tags: ["HTML5", "CSS3", "Fontawesome"],
      demoUrl: "https://peolite001.github.io/Hobsport-homepage-Clone/",
      codeUrl: "https://github.com/Peolite001/Hobsport-homepage-Clone.git"
    },
    {
      title: "Uber Eat Clone",
      description: "Find the best restaurants that deliver. Get contactless delivery for restaurant takeout, groceries, and more!",
      image: "/ubaeat.png",
      tags: ["HTML5", "CSS3", "Fontawesome"],
      demoUrl: "https://peolite001.github.io/Ubereat-clone-Landingpage/",
      codeUrl: "https://github.com/Peolite001/Ubereat-clone-Landingpage.git"
    },
    {
      title: "Icon Weather Site",
      description: "Know the weather by knowing the environment's degree.",
      image: "/weath.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://peolite001.github.io/Weather-icon-website-with-js/",
      codeUrl: "#"
    },
    {
      title: "Calculator",
      description: "A beautiful, free online scientific calculator with basic mathematical functions.",
      image: "/calcu.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Web Card",
      description: "A card describing the backbone of every modern website.",
      image: "/cad.png",
      tags: ["HTML5", "CSS3"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "7up HomePage-Clone",
      description: "Seven-up Bottling Company homepage clone showcasing products and beverage refreshers.",
      image: "/7up.png",
      tags: ["HTML5", "CSS3", "Fontawesome"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "BMI Calculator",
      description: "Body mass index screening tool estimating body fat ratio from height and weight.",
      image: "/BMI.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white pb-16 transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-500">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{proj.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 my-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <Link
                      href={proj.demoUrl}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href={proj.codeUrl}
                      className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      <FaGithub className="text-base" /> Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
