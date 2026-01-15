import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

export default function ExperienceCard_Salesforce({}: Props) {
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
          src="/logos/codevoria.jpeg" 
          alt="Codevoria logo"
          width={80}
          height={80}
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-contain"
          priority
        />
      </div>

      <div className="mt-4 w-full">
        <h4 className="text-xl sm:text-2xl font-semibold leading-tight">Salesforce Developer</h4>
        <p className="text-sm sm:text-base font-bold mt-1">Codevoria</p>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
          <Image width={28} height={28} className="h-7 w-7" src="https://www.svgrepo.com/show/354306/salesforce.svg" alt="Salesforce" />
          <Image width={28} height={28} className="h-7 w-7" src="/logos/platform-app-builder.png" alt="Platform App Builder" />
          <Image width={28} height={28} className="h-7 w-7" src="/logos/Agentforce-Specialist-Certification.png" alt="Agentforce Specialist" />
        </div>

        <p className="uppercase text-gray-300 text-xs sm:text-sm mt-3">
          May 2025 – Present
        </p>

        <ul className="list-disc marker:text-gray-400 pl-5 mt-2 space-y-2 text-xs sm:text-sm">
          <li>Developed Flows, Apex classes, and Lightning Web Components for case automation.</li>
          <li>Implemented Named Credentials & External Credentials for secure API integrations.</li>
          <li>Built Service dashboards for overdue cases and promotions with retry handling.</li>
          <li>Hardened permissions and compliance audits across Salesforce orgs.</li>
        </ul>
      </div>
    </motion.article>
  );
}
