import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  name: string;
  image: string;
  proficiency: number;
  directionLeft?: boolean;
};

function Skill({ name, image, proficiency, directionLeft = false }: SkillProps) {
  return (
    <motion.div
    className="
        group relative flex items-center justify-center
        w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24
    "
    whileHover={{ scale: 1.08, y: -6 }}   // ✅ move hover animation here
    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
    {/* ICON */}
    <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={image}
        alt={name}
        className="
        absolute inset-0 m-auto
        rounded-full bg-white border border-gray-500
        object-contain p-1
        w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24
        transition duration-300 ease-in-out
        group-hover:grayscale
        z-0
        "
    />

    {/* HOVER OVERLAY */}
    <div
        className="
        absolute inset-0 rounded-full
        bg-white/90 opacity-0
        group-hover:opacity-80
        transition-opacity duration-300 ease-in-out
        flex items-center justify-center
        z-10 pointer-events-none    // ✅ make overlay ignore pointer
        "
    >
        <p className="text-[10px] sm:text-xs md:text-sm xl:text-lg font-bold text-black">
        {proficiency}%
        </p>
    </div>
    </motion.div>
  );
}

export default Skill;
