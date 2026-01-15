// pages/projects.tsx
import ProjectsAll from "@/components/projects/Projects";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects — Geetesh</title>
        <meta name="description" content="All projects by Geetesh Aheriya" />
      </Head>
      <ProjectsAll />
    </>
  );
}
