"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import type { ProjectItem } from "./projectsData";

type Props = {
  item: ProjectItem;
  onOpen: (item: ProjectItem, startTime: number) => void;
};

export default function ProjectCard({ item, onOpen }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    const t = videoRef.current?.currentTime ?? 0;
    onOpen(item, t);
  };

  return (
    <motion.div
      className="relative cursor-pointer rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="h-52 sm:h-64 w-full object-cover"
        src={item.videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        <h4 className="text-lg font-semibold text-[#F7AB0A]">{item.title}</h4>
        <p className="text-sm text-gray-300 mt-1 line-clamp-1">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
