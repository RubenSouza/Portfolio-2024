"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSpring } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoMdGitBranch } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

import cap from "../../assets/img/badge/badge.svg";
import TabContent from "@/components/TabContent";
import TabOptions from "@/components/TabOptions";
import { ResumeData } from "../../../types";
import { motion } from "framer-motion";

const resumeData: ResumeData = {
  about: {
    title: "About Me",
    description:
      "Sou um desenvolvedor full-stack apaixonado por criar aplicativos e websites de alta performance. Sou especialista em criar aplicações responsivas e de alta performance utilizando as mais recentes tecnologias.",
    info: [
      {
        fieldName: "Nome",
        description: "Rúben Eliel",
      },
      {
        fieldName: "Telefone",
        description: "(+55) 83 9 9135-8394",
      },
      {
        fieldName: "Experiência",
        description: "2 anos",
      },
      {
        fieldName: "Discord",
        description: "RúbenEliel#3296",
      },
      {
        fieldName: "Nacionalidade",
        description: "Brasileiro",
      },

      {
        fieldName: "Email",
        description: "rubem.eliel2012@gmail.com",
      },

      {
        fieldName: "Freelance",
        description: "Disponível",
      },
      {
        fieldName: "Idiomas",
        description: "Português, Inglês, Espanhol",
      },
    ],
  },
  education: {
    icon: cap,
    title: "Minhas formações",
    description: "Dê uma olhada nas minhas formações acadêmicas e cursos.",
    items: [
      {
        title: "Desenvolvimento de Sistemas",
        subtitle: "Descomplica - EAD",
        date: "2022 - 2024",
        description: "Tech University",
      },
      {
        title: "Desenvolvimento fullstack",
        subtitle: "Programador - BR",
        date: "2022",
        description: "Online Course",
      },
      {
        title: "Desenvolvimento Full Stack ",
        subtitle: "Hiring Coders",
        date: "2023",
        description: "Online Course",
      },
      {
        title: "Desenvolvimento Back end",
        subtitle: "ONE - Oracle",
        date: "2024",
        description: "Online Course",
      },
    ],
  },
  skills: {
    title: "Tecnologias",
    description: "Aqui estão algumas das ferramentas e tecnologias que utilizo",
    skillList: [
      {
        title: "HTML5",
        icon: FaHtml5,
      },
      {
        title: "CSS3",
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
      {
        title: "React Native",
        icon: TbBrandReactNative,
      },
      {
        title: "Git",
        icon: IoMdGitBranch,
      },
      {
        title: "Firebase",
        icon: IoLogoFirebase,
      },
      {
        title: "MongoDB",
        icon: DiMongodb,
      },
      {
        title: "Java",
        icon: FaJava,
      },
      {
        title: "Spring Boot",
        icon: SiSpring,
      },
      {
        title: "WordPress",
        icon: FaWordpress,
      },
    ],
  },
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="container py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center md:flex-row md:items-start gap-10 xl:gap-16">
          <div className="min-w-[350px] max-w-[350px] flex flex-col gap-10">
            <h2 className="text-5xl font-bold">Por que me contratar?</h2>
            <p className="text-primary-500">
              {
                "Um desenvolvedor focado em fornecer experiências de usuário criativas e completas"
              }
            </p>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="">
            <TabContent activeTab={activeTab} data={resumeData} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
