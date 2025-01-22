import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
       
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-3xl font-bold mb-4 text-center sm:text-left">ChatBot</h3>
          <p className="text-sm lg:text-center">© 2025 ChatBot. All rights reserved.</p>
        </div>

       
        <div className="flex gap-6 mt-6 sm:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;