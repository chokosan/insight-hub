import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      
      {/* Top content */}
      <div className="w-full px-6 py-14">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          
          {/* Brand */}
          <div className='flex flex-col gap-2'>
            <h3 className="text-2xl font-bold text-white mb-3">
              Insight Hub
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A modern blog platform to share ideas, stories, and insights with the world.
            </p>

            <p>Email - mairaamjad905@gamil.com</p>
            <p>Contact - 03274115477</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition">Blogs</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Catagaries
            </h4>
            <div className='flex flex-col space-y-2 text-sm'>
              <a href="#" 
              className="hover:text-white transition">Technology</a>
               <a href="#" 
              className="hover:text-white transition">Weather</a>
              
              <a href="#" className="hover:text-white transition">News</a>
              <a href="#" className="hover:text-white transition">Lifestyle</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Blogify. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

