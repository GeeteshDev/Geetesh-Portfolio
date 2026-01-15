"use client";

import { useState } from "react";
import { projectsData, type ProjectItem } from "./projectsData";
import ProjectCard from "./ProjectCard";
import FullscreenProject from "./FullscreenProject";
import VideoWarmup from "./VideoWarmup";
import Link from "next/link";

export default function ProjectsHome() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [start, setStart] = useState(0);

  const handleOpen = (item: ProjectItem, startTime: number) => {
    setSelected(item);
    setStart(startTime);
    setOpen(true);
  };

  return (
    <section className="min-h-[80vh] relative max-w-7xl mx-auto px-5 sm:px-10 py-16">
      <h3 className="uppercase tracking-[14px] text-gray-500 text-xl sm:text-2xl text-center mb-10">
        Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.slice(0, 3).map((p) => (
          <ProjectCard key={p.id} item={p} onOpen={handleOpen} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="projects"
          className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold hover:bg-[#F7AB0A]/50"
        >
          View all
        </Link>
      </div>

      {/* Warm up the rest in the background */}
      <VideoWarmup
        sources={projectsData.map((p) => p.videoSrc)}
        excludeFirstN={3}
      />

      <FullscreenProject
        isOpen={open}
        item={selected}
        startTime={start}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
