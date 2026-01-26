import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Geetesh Aheriya",
      "Let's Build Something",
      "<AmazingTogether />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {/* Hero Image (LCP) */}  
      <Image
        src="/Geetesh.png"
        alt="Geetesh Aheriya"
        width={128}
        height={128}
        priority
        sizes="128px"
        className="relative rounded-full object-cover"
      />



      <div className="z-20">
        {/* for Seo only */}
         <h1 className="sr-only">
          Geetesh Aheriya – Salesforce Developer & Frontend Engineer
        </h1>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-6 sm:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 space-x-2">
          <Link href="#about"><button className="heroButton">About</button></Link>
          <Link href="#experience"><button className="heroButton">Experience</button></Link>
          <Link href="#skills"><button className="heroButton">Skills</button></Link>
          <Link href="#projects"><button className="heroButton">Projects</button></Link>
        </div>
      </div>
    </div>
  );
}
