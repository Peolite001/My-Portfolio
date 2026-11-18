"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoSunnyOutline, IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, toggleTheme, mounted } = useTheme();

  const navItems = [
    { label: "Showcase", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/offer" },
    { label: "Projects", url: "/works" },
    { label: "Contact", url: "/contact" },
  ];

  const isDark = mounted ? theme === "dark" : true;

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="font-extrabold text-3xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              PG.
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={index}
                  href={item.url}
                  className={`transition-all duration-200 text-base font-medium px-4 py-2 rounded-lg ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right side controls: Theme toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - Top Right */}
            <div
              className="border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl flex items-center gap-1 shadow-inner transition-colors"
              role="group"
              aria-label="Theme toggle"
            >
              <button
                type="button"
                onClick={() => setTheme("light")}
                title="Light Mode"
                aria-label="Light mode"
                className={`p-2 rounded-lg text-lg cursor-pointer transition-all duration-200 flex items-center justify-center ${
                  !isDark
                    ? "bg-white text-amber-500 shadow-sm scale-105"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {!isDark ? <IoSunny className="text-xl" /> : <IoSunnyOutline className="text-xl" />}
              </button>

              <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700" />

              <button
                type="button"
                onClick={() => setTheme("dark")}
                title="Dark Mode"
                aria-label="Dark mode"
                className={`p-2 rounded-lg text-lg cursor-pointer transition-all duration-200 flex items-center justify-center ${
                  isDark
                    ? "bg-gray-900 text-blue-400 shadow-sm scale-105 border border-gray-700"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                <FaMoon className="text-lg" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="lg:hidden p-2 text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {navOpen ? <IoIosClose className="text-3xl" /> : <RiMenu3Line className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between z-40 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    onClick={() => setNavOpen(false)}
                    className={`text-xl font-medium px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Theme</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {isDark ? <FaMoon className="text-blue-400" /> : <IoSunny className="text-amber-500" />}
                <span className="text-sm font-medium">{isDark ? "Dark" : "Light"}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
