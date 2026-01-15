// import React from 'react';
// import { SocialIcon } from 'react-social-icons';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// type Props = {}

// const Header = (props: Props) => {
//     return (
//         <header
//             className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
//             <motion.div
//                 initial={{
//                     x: -500,
//                     opacity: 0,
//                     scale: 0.5,
//                 }}
//                 animate={{
//                     x: 0,
//                     opacity: 1,
//                     scale: 1,
//                 }}
//                 transition={{
//                     duration: 1.5,
//                 }}
//                 className='flex flex-row items-center'>
//                 {/* Social-icons  */}
//                 <SocialIcon url='https://www.youtube.com'
//                     fgColor='gray'
//                     bgColor='transparent' />
//                 <SocialIcon url='https://www.youtube.com'
//                     fgColor='gray'
//                     bgColor='transparent' />
//                 <SocialIcon url='https://www.youtube.com'
//                     fgColor='gray'
//                     bgColor='transparent' />
//             </motion.div>
//             <Link href='#contact'>
//                 <motion.div
//                     initial={{
//                         x: 500,
//                         opacity: 0,
//                         scale: 0.5,
//                     }}
//                     animate={{
//                         x: 0,
//                         opacity: 1,
//                         scale: 1,
//                     }}
//                     transition={{
//                         duration: 1.5,
//                     }}
//                     className='flex flex-row items-center cursor-pointer text-gray-300'>
//                     <SocialIcon
//                         className='cursor-pointer'
//                         network='email'
//                         fgColor='gray' bgColor='transparent' />
//                     <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
//                         Get In Touch
//                     </p>
//                 </motion.div>
//             </Link>
//         </header>
//     )
// }

// export default Header

import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {isClient && (
        <>
          {/* Left Social Icons */}
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center space-x-2"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/geeteshaheriya/"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/GeeteshA"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center cursor-pointer text-gray-300 space-x-2"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <SocialIcon
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Header;
