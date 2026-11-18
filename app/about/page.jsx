'use client'
import Link from 'next/link';
import React from 'react';
import { GoDownload } from "react-icons/go";
import TextType from './TextType/TextType';
import DecayCard from './Decaycard/page';
import FadeContent from '../FadeContent/page';

const About = () => {
  return (
    <div className="min-h-dvh bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              <TextType 
                text={["About Me"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter=""
              />
            </h2>
            <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              <TextType 
                text={["I'm a web developer focused on crafting clean & user-friendly experiences. I build responsive websites that are fast, easy to use, and follow best coding practices. My expertise includes HTML, CSS, JavaScript, and modern frameworks to create dynamic, engaging interfaces with clean, optimized code. When I'm not coding, you can find me exploring new technologies, enjoying a good book or watching aura framing animations."]}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                <Link
                  href={"/contact"}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-blue-500/20 text-center font-medium"
                >
                  Contact Me
                </Link>
              </FadeContent>
              <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                <Link
                  href={"/PRAISEGOD-EBUBECHUKWU-OKORIE-CV.docx"}
                  download="PRAISEGOD EBUBECHUKWU OKORIE CV.docx"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-blue-400 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors text-center font-medium shadow-sm"
                >
                  Download Resume <GoDownload className='text-lg' />
                </Link>
              </FadeContent>
            </div>
          </div>

          <div className="flex justify-center">
            <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
              <DecayCard src={"/my pic.jpg"} width={380} height={420} />
            </FadeContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
