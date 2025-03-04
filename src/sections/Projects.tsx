"use client";

import cypressImage from "../../public/images/projects/cypresss.png";
import breaditImage from "../../public/images/projects/breadit.png";
import bookmarkImage from "../../public/images/projects/bookmark.jpg";
import ecommerceImage from "../../public/images/projects/ecommerce.png";
import galleryImage from "../../public/images/projects/gallery.png";
import rockImage from "../../public/images/projects/rockpaperscissor.png";
import spaceImage from "../../public/images/projects/space.jpg";
import ratemyuniImage from "../../public/images/projects/ratemyuni.jpg";
import chatImg from "../../public/images/projects/chatImg.webp";
import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";
import aboutme from "../../public/images/aboutme (2).png"

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    name: "Breadit",
    description:
      "Breadit is a full-stack website built using modern web technologies, including Next.js with the App Router, TypeScript, and Tailwind CSS. The project provides a smooth, dynamic user experience with features like infinite scrolling for loading posts, authentication via NextAuth with Google integration, and personalized feeds for authenticated users. It employs optimistic updates to enhance the user experience by reflecting changes immediately while processing, and advanced caching mechanisms using Upstash Redis. ",
    image: breaditImage,
    link: "https://breadit-nextjs.vercel.app",
    repo: "https://github.com/CodebyAliyah",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Postgres",
      "Prisma",
      "React Query",
      "NextAuth",
      "upstash",
    ],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Cypress",
    description:
      "This project is a simplified clone of the popular productivity application, Notion. It's designed to replicate some of the core features of Notion, providing a platform where users can create, edit, and organize their notes in a flexible and intuitive interface.",
    image: cypressImage,
    link: "https://cypress-note-taking.vercel.app",
    repo: "https://github.com/CodebyAliyah",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "Clerk"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Rate My Uni (Hackathon Project)",
    description:
      "The project is focused on building a simple, yet functional, web-based interface where students and users can rate universities based on various criteria (e.g., campus, academics). It aims to create a platform where users can submit and view ratings for different universities, much like popular 'Rate My Professor' services but focused on universities as a whole.",
    image: ratemyuniImage,
    link: "https://ratemyuniversity.com",
    repo: "https://github.com/CodebyAliyah",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Real Time Chat App",
    description:
      "A real-time chat application built using modern web technologies. It leverages Next.js for the frontend, styled with Tailwind CSS, and uses Redux Toolkit for state management. The backend is powered by Node.js and Express, with Firebase handling real-time messaging and authentication. The app ensures seamless, instant communication with an intuitive UI, optimized for both mobile and desktop users.",
    image: chatImg,
    link: "",
    repo: "https://github.com/CodebyAliyah/aliyahya-reactNative_ChatAPP",
    tech: [
      "Next.js",
      "TailwindCSS",
      "NeonDB",
      "Express",
      "Node.js",
      "Prisma",
      "firebase",
      "Redux Toolkit",
      "MUI",
    ],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Ethiopian Elegance",
    description:
      " E-commerce website designed to sell traditional Ethiopian clothing, jewelry, and home goods. The platform allows users to browse products by category, view detailed descriptions, and add items to a shopping cart. It includes essential e-commerce functionalities such as user account creation, order history tracking, and checkout with payment integration using Stripe.",
    image: ecommerceImage,
    link: "https://ethiopian-elegance.onrender.com",
    repo: "https://github.com/CodebyAliyah",
    tech: [
      "MongoDB",
      "Express",
      "React.js",
      "Node.js",
      "TailwindCSS",
      "Stripe",
      "Mantine UI",
    ],
    isTopProject: true,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Gallery Glimpses",
    description:
      "A gallery website where users can upload images in either private or public mode. If an image is set to private, only the uploader can view it. Public images are visible to all users.",
    image: galleryImage,
    link: "https://gallery-glimpse-web.vercel.app",
    repo: "https://github.com/CodebyAliyah",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: false,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Space Tourism Website ",
    description:
      "Frontend Mentor Challenge to build a space tourism landing page.",
    image: spaceImage,
    link: "https://frontend-mentor-rock-paper-scissors-challenge.netlify.app",
    repo: "https://github.com/CodebyAliyah",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Clipboard ",
    description:
      "A history of everything you copy Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
    image: bookmarkImage,
    link: "",
    repo: "https://github.com/CodebyAliyah",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Rock Paper Scissors Game",
    description: "A Rock Paper Scissors Game",
    image: rockImage,
    link: "",
    repo: "https://github.com/CodebyAliyah",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "PortFolio",
    description: "A modern personal portfolio built with Next.js and Tailwind CSS, showcasing my skills, projects, and experience with a sleek, responsive design. Optimized for performance and SEO, it reflects my expertise in full stack development",
    image: aboutme,
    link: "",
    repo: "https://github.com/CodebyAliyah",
    tech: ["Next.js ", "Tailwind", "MongoDB"],
    isTopProject: false,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <ScrollArea className="w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            Top Projects
          </p>
          <ProjectList chosenStack="top-projects" />
        </ScrollArea>
      ),
    },
    {
      title: "Next.js",
      value: "nextjs",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Next Js</p>
          <ProjectList chosenStack="nextjs" />
        </ScrollArea>
      ),
    },
    {
      title: "MERN Stack",
      value: "mern",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
          <ProjectList chosenStack="mern" />
        </ScrollArea>
      ),
    },
    {
      title: "HTML/CSS",
      value: "html-css",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">HTML/CSS</p>
          <ProjectList chosenStack="html-css" />
        </ScrollArea>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            All Projects
          </p>
          <ProjectList chosenStack="all-projects" />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div className="container mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === "nextjs") return project.isNextjs;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "html-css") return project.isHtmlCss;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-0 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">
                    {project.description}
                  </p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link
                      href={project.link}
                      className="w-2/3 md:w-2/5"
                      target="_blank"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
