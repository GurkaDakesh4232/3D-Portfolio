import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Assuming styles contains the class names for heading and subtext

const Tech = () => {
  return (
    <div>
      {/* Section title for Skills */}
      <div className='text-left'>
        <p className={styles.sectionSubText}>What I Know</p> {/* Optional subtext */}
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </div>

      {/* Technology icons */}
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
