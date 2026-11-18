import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Services = () => {
  const skills = [
    {
      name: "HTML5",
      percent: "95%",
      icon: <FaHtml5 className="text-orange-500 text-3xl" />,
      bg: "bg-orange-500/10",
      barGrad: "from-orange-400 to-red-500"
    },
    {
      name: "CSS3",
      percent: "90%",
      icon: <IoLogoCss3 className="text-blue-500 text-3xl" />,
      bg: "bg-blue-500/10",
      barGrad: "from-blue-400 to-indigo-600"
    },
    {
      name: "JavaScript",
      percent: "85%",
      icon: <FaJs className="text-yellow-500 text-3xl" />,
      bg: "bg-yellow-500/10",
      barGrad: "from-yellow-400 to-amber-600"
    },
    {
      name: "React",
      percent: "85%",
      icon: <FaReact className="text-cyan-400 text-3xl" />,
      bg: "bg-cyan-500/10",
      barGrad: "from-cyan-400 to-blue-600"
    },
    {
      name: "GitHub",
      percent: "85%",
      icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-3xl" />,
      bg: "bg-gray-500/10",
      barGrad: "from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-200"
    },
    {
      name: "Next.js",
      percent: "90%",
      icon: <TbBrandNextjs className="text-gray-900 dark:text-white text-3xl" />,
      bg: "bg-purple-500/10",
      barGrad: "from-purple-500 to-indigo-700"
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white pb-16 transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-500">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I use to bring products to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 ${skill.bg} rounded-xl flex items-center justify-center`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{skill.percent}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skill.name}</h3>
              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.barGrad} rounded-full transition-all duration-1000`}
                  style={{ width: skill.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
