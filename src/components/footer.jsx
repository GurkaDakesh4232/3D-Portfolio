import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // FontAwesome Icons
import { motion } from "framer-motion"; // Optional for adding animations

const Footer = () => {
  return (
    <footer className="bg-tertiary py-5 mt-20">
      <div className="container mx-auto flex flex-col items-center">
        {/* Your Details */}
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="mt-6 flex space-x-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-500"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={30} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Mr unique4232. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
