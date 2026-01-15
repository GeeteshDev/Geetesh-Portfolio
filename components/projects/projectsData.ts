// components/projects/projectsData.ts
export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  videoSrc: string;   
  thumbSrc: string;   
  link?: string;
};

export const projectsData: ProjectItem[] = [
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    description:
      "Next.js + Tailwind + Spotify API + Redux. Auth, playlists, user profile, real-time music data.",
    tech: ["Next.js", "Tailwind", "Redux", "Spotify API"],
    videoSrc: "/spotify-clone.mp4",
    thumbSrc: "/thumbs/spotify.png",
    link: "https://spotify-clone-next-js-five.vercel.app/",
  },
  {
    id: "g-mart",
    title: "G-mart",
    description: "MERN e-commerce: auth, cart, payments, animated UI.",
    tech: ["React", "Tailwind", "Redux", "Node", "Express", "MongoDB"],
    videoSrc: "/Artistic-Gallery.mp4",
    thumbSrc: "/thumbs/gmart.jpg",
  },
  {
    id: "pygame-space-shooter",
    title: "Space Shooter (Pygame)",
    description: "Arcade shooter with Python/Pygame: collisions, scoring, enemy waves.",
    tech: ["Python", "Pygame"],
    videoSrc: "/Clip.mp4",
    thumbSrc: "/thumbs/Space Shooter.jpg",
  },
  {
    id: "jarvis-assistant",
    title: "Jarvis Desktop Assistant",
    description: "Python voice assistant: open apps, search, email, music.",
    tech: ["Python", "Speech Rec", "Automation"],
    videoSrc: "/Jarvis.mp4",
    thumbSrc: "/thumbs/jarvis.png",
  },
  {
  id: "VastraFactory",
  title: "VastraFactory",
  description: "A modern fashion e-commerce landing page designed for VastraFactory, showcasing premium clothing and lifestyle products with an elegant blend of minimal UI, bold typography, and dynamic animations. Built using React, Three.js, GSAP, and Framer Motion to create smooth transitions, interactive visuals, and a luxurious shopping experience.",
  tech: ["React", "Three.js", "Gsap", "Framer Motion"],
  videoSrc: "/vastrafactory.mp4",
  thumbSrc: "/thumbs/vastrafactory.png",
  },

  {
    id: "project-1",
    title: "chatApp",
    description: "Short demo clip.",
    tech: ["Demo"],
    videoSrc: "/ChatApp.mp4",
    thumbSrc: "/thumbs/chatApp.png",
  },
  {
    id: "project-2",
    title: "project-2",
    description: "Short demo clip.",
    tech: ["Demo"],
    videoSrc: "/project-2.mp4",
    thumbSrc: "/thumbs/project-2.jpg",
  },
  {
    id: "project-3",
    title: "project-3",
    description: "Short demo clip.",
    tech: ["Demo"],
    videoSrc: "/project-3.mp4",
    thumbSrc: "/thumbs/project-3.jpg",
  },
  {
    id: "project-4",
    title: "project-4",
    description: "Short demo clip.",
    tech: ["Demo"],
    videoSrc: "/project-4.mp4",
    thumbSrc: "/thumbs/project-4.jpg",
  },
  {
    id: "project-5",
    title: "project-5",
    description: "Short demo clip.",
    tech: ["Demo"],
    videoSrc: "/project-5.mp4",
    thumbSrc: "/thumbs/project-5.jpg",
  },
];
