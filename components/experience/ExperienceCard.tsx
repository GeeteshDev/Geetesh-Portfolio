import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

function ExperienceCard({}: Props) {
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
          src="/clear_greetLabs_logo.png"  /* local in /public */
          alt="Greet Labs logo"
          width={80}
          height={80}
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-contain"
        />
      </div>

      <div className="mt-4 w-full">
        <h4 className="text-xl sm:text-2xl font-semibold leading-tight">React Developer</h4>
        <p className="text-sm sm:text-base font-bold mt-1">Greet Labs Private Limited</p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/354259/react.svg" alt="React" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="JavaScript" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/452093/redux.svg" alt="Redux" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/355140/node.svg" alt="Node.js" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="Bootstrap" />
          <Image width={24} height={24} className="h-6 w-6" src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
        </div>

        <p className="uppercase text-gray-300 text-xs sm:text-sm mt-3">Dec 2023 – Present</p>

        <ul className="list-disc marker:text-gray-400 pl-5 mt-2 space-y-2 text-xs sm:text-sm">
          <li>Built user-facing features in React (Redux, Router) with modular components.</li>
          <li>Improved code quality and maintainability via refactors and linting.</li>
          <li>Ensured cross-browser compatibility and performance.</li>
          <li>Integrated REST APIs and refined error/empty states.</li>
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
