// components/projects/ProjectThumbCard.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectItem } from "./projectsData";

type Props = {
  item: ProjectItem;
  onOpen: (item: ProjectItem, startTime: number) => void;
};

export default function ProjectThumbCard({ item, onOpen }: Props) {
  const handleClick = () => onOpen(item, 0);

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="
        group relative w-full text-left overflow-hidden rounded-xl
        bg-[#1e1e1e]/70 border border-[#F7AB0A]/20
        hover:border-[#F7AB0A]/40 transition
        shadow-lg hover:shadow-[#F7AB0A]/20
      "
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-52 sm:h-64">
        <Image
          src={item.thumbSrc}
          alt={item.title}
          fill
          priority={false}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />

        {/* Dark gradient at bottom for title */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Play hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="flex items-center gap-2 rounded-full bg-black/60 border border-[#F7AB0A]/50 px-3 py-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#F7AB0A">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-xs text-[#F7AB0A]">Play</span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-base sm:text-lg font-semibold text-[#F7AB0A]">
            {item.title}
          </h4>
          <p className="text-[11px] sm:text-xs text-gray-400 truncate max-w-[40%]">
            {item.tech.slice(0, 2).join(" • ")}
            {item.tech.length > 2 ? " +" : ""}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-300/90 line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
}
