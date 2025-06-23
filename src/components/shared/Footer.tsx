import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0f1117] text-gray-400 px-6 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-white font-semibold mb-4">PithonKids</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact">Contacts</a></li>
              <li><a href="/messaging">Messaging</a></li>
            </ul>
          </div>


          {/* <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Terms of service</li>
              <li>Contract</li>
              <li>License</li>
            </ul>
          </div> */}

          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4">
              Get weekly updates
            </h3>
            <p className="text-sm mb-4">
              Be invested and stay ahead on our latest developments.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a1c23] text-sm px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none w-full"
              />
              <button className="bg-[#004fcc] hover:bg-[#004384]-500 text-white px-4 py-2 rounded-r-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 PithonKids. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/people/Pithon-kids/61563960541682/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/pithonkids/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@JoyOmenukoPithonKids" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
