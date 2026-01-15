import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function ExperienceCard_2({}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.6 }}
      className="
        group w-full h-full
        flex flex-col rounded-2xl bg-[#292929]
        p-5 sm:p-6
        md:hover:opacity-100 md:opacity-95
        ring-0 hover:ring-1 hover:ring-white/10
      "
    >
      <div className="shrink-0">
        <Image
          src="/globe.png" /* local in /public */
          alt="Universal Informatics logo"
          width={80}
          height={80}
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-contain"
        />
      </div>

      <div className="mt-4 w-full">
        <h4 className="text-xl sm:text-2xl font-semibold leading-tight">
          Front-end Developer <span className="font-normal">Intern</span>
        </h4>
        <p className="text-sm sm:text-base font-bold mt-1">Universal Informatics</p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="JavaScript" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/452242/jquery.svg" alt="jQuery" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind CSS" />
        </div>

        <p className="uppercase text-gray-300 text-xs sm:text-sm mt-3">
          Jul 2023 – Apr 2025
        </p>

        <ul className="list-disc marker:text-gray-400 pl-5 mt-2 space-y-2 text-xs sm:text-sm">
          <li>Built responsive UI with HTML/CSS/JS from wireframes.</li>
          <li>Collaborated with designers to deliver features.</li>
          <li>Debugged performance and cross-browser issues.</li>
          <li>Participated in reviews; documented components.</li>
        </ul>
      </div>
    </motion.article>
  );
}
