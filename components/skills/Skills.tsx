import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import skillsData from './skillsData.json';

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        relative flex flex-col items-center
        text-center md:text-left
        max-w-[2000px] mx-auto
        px-5 sm:px-10
        min-h-screen
      "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-20">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-sm text-gray-500 mt-2">
        Hover over for current proficiency
      </h3>

      {/* Force 4 columns at all sizes */}
      <div className="grid grid-cols-4 gap-4 sm:gap-5 mt-10">
        {skillsData.map((skill, i) => (
          <Skill
            key={skill.name ?? i}
            name={skill.name}
            image={skill.image}
            proficiency={skill.proficiency}
            directionLeft={i % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
