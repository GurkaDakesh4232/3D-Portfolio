import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// Ensure this contains your achievements data
import { fadeIn, textVariant } from "../utils/motion";
import cisco from "../assets/certificates/cisco.jpg"; // Example image import

// Sample achievements data (make sure this is structured appropriately in your constants file)
const achievementsData = [
  {
    title: "Cisco Networking Academy",
    date: "September 2024",
    description: "Completed the Cisco Networking Academy program.",
    image: cisco,
    viewUrl: "https://www.linkedin.com/posts/gurka-dakesh-719928314_im-happy-to-share-that-ive-obtained-a-new-activity-7222940066636050432-LMF8?utm_source=share&utm_medium=member_desktop",
  },
  // Add more achievements as needed
];

// AchievementCard Component
const AchievementCard = ({ title, date, description, image, viewUrl }) => {
  return (
    <motion.div
      Apply the gradient border class
      variants={fadeIn("up", "spring", 0.5, 0.75)} // Add animation
    >
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-[20px] shadow-card w-full border border-indigo-500" // Added border here
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`Achievement - ${title}`}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        
        <div className="mt-3">
          <h3 className="text-white font-bold text-[20px]">{title}</h3>
          <p className="mt-1 text-secondary text-[14px]">{date}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4">
          <a 
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-64 py-2 text-center rounded-lg"
          >
            View
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};




// Achievements Component
const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These achievements reflect my dedication and success in various domains. Each entry highlights significant milestones in my career and education.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {achievementsData.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} {...achievement} />
        ))}
      </div>
    </>
  );
};

// Exporting Achievements wrapped in SectionWrapper
export default SectionWrapper(Achievements, "achievement");
