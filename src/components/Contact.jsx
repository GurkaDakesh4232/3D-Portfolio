import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

// Import the image
import profile from "../assets/certificates/profile.jpg";  // Adjust the path based on your project structure

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Details</h3>

        {/* Display your contact information */}
        <div className='mt-12 flex flex-col sm:flex-row gap-8'>
          {/* Profile Image */}
          <div className='w-full sm:w-1/3'>
            <img
              src={profile}
              alt='Your Name'
              className='w-30 h-auto rounded-full object-cover shadow-lg'
            />
          </div>

          {/* Contact Information */}
          <div className='w-full sm:w-2/3 flex flex-col gap-4'>
            <div className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Name</span>
              <p className='text-secondary text-[16px]'>G.Dakesh yadav</p> {/* Replace with your actual name */}
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Mobile</span>
              <p className='text-secondary text-[16px]'>7799887363</p> {/* Replace with your actual name */}
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Email</span>
              <p className='text-secondary text-[16px]'>gurkadakesh4232@gmail.com</p> {/* Replace with your actual email */}
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-medium mb-2'>GitHub</span>
              <a
                href='https://github.com/GurkaDakesh4232'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary text-[16px] hover:underline'
              >
                github.com/GurkaDakesh4232
              </a>
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-medium mb-2'>LinkedIn</span>
              <a
                href='linkedin.com/in/gurka-dakesh-719928314'
                target='_blank'
                rel='noopener noreferrer'
                className='text-secondary text-[16px] hover:underline'
              >
              linkedin.com/in/gurka-dakesh-719928314
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
