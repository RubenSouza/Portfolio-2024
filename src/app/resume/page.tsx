"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// import badge from "../../assets/img/badge/badge.svg";
import cap from "../../assets/img/badge/badge.svg";
import TabContent from "@/components/TabContent";
import TabOptions from "@/components/TabOptions";
import { ResumeData } from "../../../types";

const resumeData: ResumeData = {
  about: {
    title: "About Me",
    description:
      "I am a full-stack developer with a passion for building beautiful and functional apps and websites. I specialize in creating responsive and high-performance applications using the lates technologies.",
    info: [
      {
        fieldName: "Name",
        description: "Rúben Eliel",
      },
      {
        fieldName: "Phone",
        description: "(+55) 83 9 9135-8394",
      },
      {
        fieldName: "Experience",
        description: "2 years",
      },
      {
        fieldName: "Nationality",
        description: "Brazilian",
      },

      {
        fieldName: "Email",
        description: "rubem.eliel2012@gmail.com",
      },

      {
        fieldName: "Freelance",
        description: "Available",
      },
      {
        fieldName: "Languages",
        description: "Portuguese, English, Spanish",
      },
    ],
  },
  education: {
    icon: cap,
    title: "My Education",
    description: "Take a look at all my bachelor's, bootcamp's and courses.",
    items: [
      {
        title: "Bachelor in Information Systems",
        subtitle: "Descomplica - EAD",
        date: "2022 - 2024",
        description: "Tech University",
      },
      {
        title: "Full Stack Web Development Course",
        subtitle: "Programador - BR",
        date: "2022",
        description: "Online Course",
      },
      {
        title: "Full Stack Web Development Bootcamp",
        subtitle: "Hiring Coders - Gama Academy",
        date: "2023",
        description: "Online Course",
      },
      {
        title: "Back End Web Development Bootcamp",
        subtitle: "ONE - Oracle",
        date: "2024",
        description: "Online Course",
      },
    ],
  },
  skills: {
    title: "My Skills",
    description: "My technical skills and tools.",
    skillList: [
      {
        title: "HTML",
        icon: FaHtml5,
      },
      {
        title: "CSS",
        icon: FaCss3,
      },
      {
        title: "JavaScript",
        icon: FaJs,
      },
      {
        title: "React",
        icon: FaReact,
      },
      {
        title: "Node.js",
        icon: FaNodeJs,
      },
      {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
      },
      {
        title: "Figma",
        icon: FaFigma,
      },
    ],
  },
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="container py-12">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-10 xl:gap-16">
        <div className="max-w-[350px] flex flex-col gap-10">
          <h2 className="text-5xl font-bold">Why hire me?</h2>
          <p className="text-primary-500">
            {
              "I'm a dedicated developer focused on providing creative yet complete user experiences"
            }
          </p>
          <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="">
          <TabContent activeTab={activeTab} data={resumeData} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
