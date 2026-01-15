import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-20 py-16 sm:py-24">
      {/* Section Header */}
      <h3 className="uppercase tracking-[10px] sm:tracking-[15px] text-gray-500 text-lg sm:text-2xl text-center mb-10">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Illustration */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <Image
            src="/logos/developer.svg" 
            alt="Developer Illustration"
            width={400}
            height={400}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] object-contain"
            priority
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl md:max-w-2xl text-center md:text-left space-y-5"
        >
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            As a passionate MERN stack developer, I have a solid foundation in
            building dynamic web applications using MongoDB, Express.js, React,
            and Node.js. With one year of experience as a React developer, I
            have honed my skills in creating user-friendly interfaces and
            optimizing performance. Additionally, I completed a 5-month
            internship as a front-end developer, where I collaborated on various
            projects, enhancing my understanding of responsive design and best
            practices in web development. My goal is to leverage my expertise to
            create innovative solutions that deliver seamless user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
