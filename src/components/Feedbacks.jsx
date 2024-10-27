// src/components/Feedbacks.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your images
import accproject from "../assets/certificates/accproject.jpg";
import py101 from "../assets/certificates/py101.jpg";
import walmart from "../assets/certificates/walmart.jpg";
import dev from "../assets/certificates/dev.jpg";
import tata from "../assets/certificates/Tata.jpg";

// Sample certification data with LinkedIn URLs
const certifications = [
  {
    name: "Accenture1",
    date: "July 2024",
    description: "Project Management Job Simulation.",
    image: accproject,
    linkedinUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7222634544007389185-MgLd?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "Cognitive class",
    date: "July 2024",
    description: "Python 101 for Data Science.",
    image: py101,
    linkedinUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7216686047538089984-1do8?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "Wallmart",
    date: "July 2024",
    description: " Adv Software Engineering .",
    image: walmart,
    linkedinUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7216686047538089984-1do8?utm_source=share&utm_medium=member_desktop"
  },

  {
    name: "Accenture2",
    date: "July 2024",
    description: " Developer and Technology .",
    image: dev,
    linkedinUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7222855582913884160-pg2v?utm_source=share&utm_medium=member_desktopp"
  },
   {
    name: "TATA",
    date: "Oct 2024",
    description: " Data visualization .",
    image: tata,
    linkedinUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7256158266718662656-dYIK?utm_source=share&utm_medium=member_desktop"
  },
];

// CertificationCard Component
const CertificationCard = ({ index, name, date, description, image, linkedinUrl }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl w-full sm:w-[280px] md:w-[300px]' // Set widths for responsive layout
    whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.3 } }} // Adding shaking effect
  >
    <div className='mt-1'>
      <p className='text-white font-medium text-[18px]'>{name}</p>
      <p className='mt-2 text-secondary text-[14px]'>{date}</p>
      <p className='mt-4 text-white tracking-wider text-[16px]'>{description}</p>
      <div className='mt-7 flex justify-center'>
        <img
          src={image}
          alt={`certificate-${name}`}
          className='w-25 h-30 rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-200'
        />
      </div>
      <div className='mt-4 flex justify-center'>
        <a 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-indigo-500 bg-opacity-30 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-50 transition duration-200'
        >
          View 
        </a>
      </div>
    </div>
  </motion.div>
);

// Certifications Component
const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've achieved</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}> {/* Added justify-center for centering */}
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

// Exporting Certifications wrapped in SectionWrapper
export default SectionWrapper(Certifications, ""); 
