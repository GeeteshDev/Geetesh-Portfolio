"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ProjectItem } from "./projectsData";

type Props = {
  isOpen: boolean;
  item: ProjectItem | null;
  startTime: number;
  onClose: () => void;
};

export default function FullscreenProject({ isOpen, item, startTime, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen || !item) return;
    const v = videoRef.current;
    if (!v) return;

    const playVideo = () => {
      try {
        v.currentTime = startTime || 0;
      } catch {}
      v.play().catch(() => {});
    };

    if (v.readyState >= 2) playVideo();
    else v.addEventListener("loadedmetadata", playVideo);

    return () => {
      v.pause();
    };
  }, [isOpen, item, startTime]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Video */}
          <div className="relative w-full max-w-6xl mx-auto aspect-video">
            <video
              ref={videoRef}
              src={item.videoSrc}
              className="h-full w-full object-contain rounded-lg"
              muted
              loop
              playsInline
              preload="auto"
              controls
            />
          </div>

          {/* Overlay card (bottom-right corner) */}
          <motion.div
            className="absolute bottom-8 right-8 max-w-lg bg-[#1a1a1a]/60 backdrop-blur-md border border-[#F7AB0A]/30 text-gray-100 rounded-2xl p-5 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-xl font-semibold text-[#F7AB0A]">
              {item.title}
            </h4>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#2a2a2a] border border-[#F7AB0A]/40 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                className="mt-4 inline-block text-black font-semibold px-4 py-2 bg-[#F7AB0A] rounded-md hover:bg-[#fbbf24]"
              >
                View Project
              </a>
            )}
          </motion.div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 bg-[#F7AB0A]/20 hover:bg-[#F7AB0A]/40 text-[#F7AB0A] 
            font-semibold rounded-md px-4 py-2 transition-all"
          >
            Close ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
