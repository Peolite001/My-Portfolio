"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaGlobeAfrica, FaMapMarkedAlt, FaGithub, FaSpinner } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoCheckmarkCircle, IoAlertCircle, IoInformationCircle, IoSend } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'activation_pending' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      // 1. Try sending via internal Next.js API route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        if (result.needsActivation) {
          setStatus('activation_pending');
          setFeedbackMessage(
            "An activation email from FormSubmit has been sent to praisegodebubechukwu@gmail.com! Please check your Gmail (including Spam or Promotions) and click 'Activate Form'."
          );
        } else {
          setStatus('success');
          setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
          setFormData({ name: '', email: '', message: '' });
        }
        return;
      }

      // 2. Direct fallback to FormSubmit in case of internal route issue
      const directRes = await fetch('https://formsubmit.co/ajax/praisegodebubechukwu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const directResult = await directRes.json().catch(() => ({}));

      if (directResult?.message && directResult.message.toLowerCase().includes('activation')) {
        setStatus('activation_pending');
        setFeedbackMessage(
          "An activation email from FormSubmit has been sent to praisegodebubechukwu@gmail.com! Please check your Gmail (including Spam or Promotions) and click 'Activate Form'."
        );
      } else if (directRes.ok && (directResult.success === 'true' || directResult.success === true)) {
        setStatus('success');
        setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || directResult.message || 'Unable to deliver message at this time.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setFeedbackMessage(
        err.message || 'Something went wrong while sending your message. Please try again or email me directly.'
      );
    }
  };

  const mailtoFallback = `mailto:praisegodebubechukwu@gmail.com?subject=Contact%20from%20${encodeURIComponent(formData.name || 'Portfolio Visitor')}&body=${encodeURIComponent(formData.message || '')}`;

  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300'>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-500">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">Get in Touch</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          Interested in working together? Let's connect
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdOutlineMail className="text-blue-600 dark:text-blue-400 text-2xl" />                
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email</h3>
              <a
                href="mailto:praisegodebubechukwu@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 break-words transition-colors inline-block"
              >
                praisegodebubechukwu@gmail.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-blue-600 dark:text-blue-400 text-2xl" />                
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Nigeria</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 text-center transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobeAfrica className="text-blue-600 dark:text-blue-400 text-2xl" />                
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Social</h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href={"https://github.com/Peolite001"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 h-10 w-10 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </Link>

                <Link
                  href={"https://linkedin.com/in/praisegodebubechukwu-392613260"}
                  className="flex justify-center items-center text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 h-10 w-10 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <CiLinkedin className="text-xl" />
                </Link>

                <Link
                  href={"https://x.com/PeOLITe001"}
                  className="flex justify-center items-center text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 h-10 w-10 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="text-lg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send me a Message</h3>

              {/* Activation Notice */}
              {status === 'activation_pending' && (
                <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
                  <IoInformationCircle className="text-blue-600 dark:text-blue-400 text-2xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-200">One-Time Activation Required</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">{feedbackMessage}</p>
                    <div className="mt-3 flex gap-3">
                      <a
                        href="https://mail.google.com/mail/u/0/#search/formsubmit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow-sm transition-colors"
                      >
                        Search Gmail for "FormSubmit" &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 flex items-start gap-3">
                  <IoCheckmarkCircle className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300">Message Delivered!</h4>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">{feedbackMessage}</p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-start gap-3">
                  <IoAlertCircle className="text-red-600 dark:text-red-400 text-2xl flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-red-800 dark:text-red-300">Message could not be sent</h4>
                    <p className="text-sm text-red-700 dark:text-red-400 mt-1">{feedbackMessage}</p>
                    <div className="mt-3">
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Click here to send directly from your email app &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none resize-none disabled:opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <IoSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
