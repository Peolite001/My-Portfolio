"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import FadeContent from './FadeContent/page';  

const Home = () => {
  const Typewriter = ({ text, speed = 200 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);    

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return (
      <div className="font-mono">
        {displayText}
        <span className="animate-pulse hidden">|</span>
      </div>
    );
  };

  return ( 
    <div id="bg" className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <div> 
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="items-center pt-20 md:pt-32 lg:pt-10 mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="mt-8 lg:mt-15">
                  <div className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white">
                    <Typewriter text="Hi, I'm PraiseGod" speed={120}/>
                  </div>
                  <div className="font-semibold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6 lg:mb-10">
                    <Typewriter text="Web Developer with React and Next.js" speed={150} />
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                    <Typewriter text="Creating high-quality web applications with modern tools and best practices for exceptional user experiences" speed={100}/>
                  </div>
                  
                  <div className="relative flex flex-col sm:flex-row justify-center lg:justify-start gap-4 text-center font-semibold text-lg mt-8 animate-fadeIn">
                    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                      <Link href={"/contact"} className="border h-12 sm:h-15 rounded-xl bg-blue-600 px-6 sm:px-8 lg:px-20 hover:bg-blue-700 border-blue-500 hover:border-blue-600
                       transition-all duration-300 ease-in-out hover:-translate-y-1 transform hover:scale-105 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                        Hire Me
                      </Link>
                    </FadeContent>
                    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                      <Link href={"/contact"} className="border border-blue-500 text-blue-600 dark:text-blue-400 h-12 sm:h-15 rounded-xl bg-transparent px-6 sm:px-8 lg:px-20 hover:text-white
                       hover:bg-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 transform hover:scale-105 flex items-center justify-center">
                        Let's Talk
                      </Link>
                    </FadeContent>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                  <Image
                    src="/profile.jpg"
                    alt="PraiseGod"
                    width={400}
                    height={400}
                    priority
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-top border-4 sm:border-7 border-gray-300 dark:border-gray-800 rounded-full hover:border-blue-500 dark:hover:border-white transition-all duration-300 shadow-2xl"
                  />
                </FadeContent>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="mt-10 lg:mt-30">
          <div className='lg:mb-40 px-4'>
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">What's in my Toolkit</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 text-center mb-8 lg:mb-12 mt-2">
              What makes my imaginations come to life in my webapp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:scale-100 lg:mt-25 p-5 lg:p-0 lg:ml-7 gap-10 lg:gap-0">
            <div className="object-cover lg:m-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full lg:w-70 lg:h-78 p-6 lg:p-8 lg:mb-20 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/20 rounded-xl lg:rotate-6 lg:hover:rotate-0 duration-500 hover:-translate-y-3 lg:hover:-translate-y-12 hover:scale-105 lg:hover:scale-130 transform transition-all lg:origin-bottom">
              <div className="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white w-12 text-xl h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                <FaPaintBrush />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-4">Modern UI Design</h3>
              <p className="text-gray-600 dark:text-gray-400">Creating beautiful, responsive interfaces that look great on any device using the latest design trends.</p>
            </div>

            <div className="object-cover lg:m-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full lg:w-70 lg:h-78 p-6 lg:p-8 lg:mb-20 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/20 rounded-xl lg:-rotate-10 lg:hover:rotate-0 duration-500 hover:-translate-y-3 lg:hover:-translate-y-12 hover:scale-105 lg:hover:scale-130 transform transition-all lg:origin-bottom">
              <div className="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white w-12 text-xl h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                <FaCode />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-4">Pure Code</h3>
              <p className="text-gray-600 dark:text-gray-400">Writing maintainable, efficient code following best practices and modern development standards.</p>
            </div>

            <div className="object-cover lg:m-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full lg:w-70 lg:h-78 p-6 lg:p-8 lg:mb-20 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/20 rounded-xl lg:rotate-6 lg:hover:rotate-0 duration-500 hover:-translate-y-3 lg:hover:-translate-y-12 hover:scale-105 lg:hover:scale-130 transform transition-all lg:origin-bottom">
              <div className="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white w-12 text-xl h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                <FaBolt />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-4">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400">Ensuring fast load times and smooth experience through efficient code and asset optimization.</p>
            </div>

            <div className="object-cover lg:m-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full lg:w-70 lg:h-78 p-6 lg:p-8 lg:mb-20 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/20 rounded-xl lg:-rotate-10 lg:hover:rotate-0 duration-500 hover:-translate-y-3 lg:hover:-translate-y-12 hover:scale-105 lg:hover:scale-130 transform transition-all lg:origin-bottom">
              <div className="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white w-12 text-xl h-12 rounded-full flex items-center justify-center mb-6 transition-colors">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white font-bold mb-4">Responsive Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Building websites that work flawlessly across all screen sizes, from phones to large displays.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
