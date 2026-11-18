import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center">
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              PG.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={"https://github.com/Peolite001"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>

            <Link
              href={"https://linkedin.com/in/praisegodebubechukwu-392613260"}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </Link>

            <Link
              href={"https://x.com/PeOLITe001"}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800/80 pt-6">
          <p>&copy; {new Date().getFullYear()} PraiseGod Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
