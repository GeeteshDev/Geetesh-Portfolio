// components/projects/ProjectsAll.tsx
"use client";

import { useState } from "react";
import { projectsData, type ProjectItem } from "./projectsData";
import ProjectThumbCard from "./ProjectThumbCard";
import FullscreenProject from "./FullscreenProject";
import VideoWarmup from "./VideoWarmup";

export default function ProjectsAll() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [start, setStart] = useState(0);

  const handleOpen = (item: ProjectItem, startTime: number) => {
    setSelected(item);
    setStart(startTime);
    setOpen(true);
  };

  return (
    <section
      id="projects-all"
      aria-labelledby="projects-all-title"
      className="relative overflow-hidden min-h-screen max-w-7xl mx-auto px-6 sm:px-10 py-20 text-gray-200"
    >
      {/* Subtle themed BG */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 
        bg-[rgb(36,36,36)]"
      />

      {/* Header */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.55em] text-gray-400 text-xs sm:text-sm">
          Projects
        </p>
        {/* <h3
          id="projects-all-title"
          className="mt-3 text-3xl sm:text-4xl text-[#F7AB0A]"
        >
          All Projects
        </h3> */}
        <span className="block mx-auto mt-3 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#F7AB0A] to-transparent rounded-full" />
      </div>

      {/* Grid of THUMBNAIL cards (no inline video here) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((p) => (
          <ProjectThumbCard key={p.id} item={p} onOpen={handleOpen} />
        ))}
      </div>

      {/* Warm-up videos to reduce stutter on first open */}
      <VideoWarmup sources={projectsData.map((p) => p.videoSrc)} />

      {/* Fullscreen video viewer */}
      <FullscreenProject
        isOpen={open}
        item={selected}
        startTime={start}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
