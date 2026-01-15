import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './experience/ExperienceCard';
import ExperienceCard_2 from './experience/ExperienceCard_2';
import ExperienceCard_Salesforce from './experience/ExperienceCard_Salesforce';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
      className="w-full px-5 sm:px-10 py-16 sm:py-24"
    >
      <h3 className="uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-lg sm:text-2xl text-center mb-8 sm:mb-12">
        Experience
      </h3>

      {/* Horizontal rail — scrollable on ALL sizes */}
      <div
        className="
          flex items-stretch gap-4 sm:gap-6
          overflow-x-auto snap-x snap-mandatory
          pb-2 -mx-5 px-5 sm:-mx-10 sm:px-10
          scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20
        "
      >
        {/* Each slide gets a fixed-but-responsive width to avoid squishing */}
        <div className="snap-center shrink-0 w-[88%] xxs:w-[90%] sm:w-[26rem] md:w-[32rem] xl:w-[36rem]">
          <ExperienceCard_Salesforce />
        </div>
        <div className="snap-center shrink-0 w-[88%] xxs:w-[90%] sm:w-[26rem] md:w-[32rem] xl:w-[36rem]">
          <ExperienceCard />
        </div>
        <div className="snap-center shrink-0 w-[88%] xxs:w-[90%] sm:w-[26rem] md:w-[32rem] xl:w-[36rem]">
          <ExperienceCard_2 />
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
