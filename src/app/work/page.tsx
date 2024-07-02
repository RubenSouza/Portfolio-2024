"use client";

import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
import projectCover1 from "../../assets/img/projects/thumb1.png";
import projectCover2 from "../../assets/img/projects/thumb2.png";
import projectCover3 from "../../assets/img/projects/thumb3.png";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Front End Project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt unde commodi et quia repellat repellendus dolorem iste libero ab dolor saepe tenetur atque, ullam officia perspiciatis harum inventore fugit itaque?",
    tech: "Html 5, Css 3, Javascript",
    image: projectCover1,
    site: "https://github.com",
    code: "https://github.com",
  },
  {
    id: 2,
    title: "Back End Project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt unde commodi et quia repellat repellendus dolorem iste libero ab dolor saepe tenetur atque, ullam officia perspiciatis harum inventore fugit itaque?",
    tech: "Node Js, Express Js, Mongodb",
    image: projectCover1,
    site: "https://github.com",
    code: "https://github.com",
  },
  {
    id: 3,
    title: "Full Stack Project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt unde commodi et quia repellat repellendus dolorem iste libero ab dolor saepe tenetur atque, ullam officia perspiciatis harum inventore fugit itaque?",
    tech: "Html 5, Css 3, Javascript, Node Js, Express Js, Mongodb",
    image: projectCover1,
    site: "https://github.com",
    code: "https://github.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiper = useSwiper();

  const handleChangeProject = (index: number) => {
    setProject(projects[index]);
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]">
            <div
              className="flex flex-col gap-2 xl:w-[50%] xl:h-[460px]
            xl:justify-between order-2 xl:order-none"
            >
              <div className="flex flex-col gap-6">
                <div
                  className="text-8xl font-extrabold text-outline text-transparent
                group-hover:text-outline-hover transition-all duration-500"
                >
                  {String(project.id).padStart(2, "0")}
                </div>
                <h1 className="text-4xl font-bold">{project.title}</h1>
                <p className="text-primary-500">{project.description}</p>
                <p className="text-accent text-lg font-semibold">
                  {project.tech}
                </p>
                <div className="border-b border-2 border-secondary-300" />
              </div>
              <div className="flex gap-6">
                <Link href={project.site} target="_blank">
                  <div className="flex flex-col gap-3 group">
                    <span
                      className="text-xs text-accent invisible group-hover:visible
                    "
                    >
                      View Site
                    </span>
                    <div
                      className="flex items-center justify-center bg-secondary-300/60 
                  rounded-full w-16 h-16 text-primary-100 group-hover:text-accent"
                    >
                      <BsArrowUpRight className="w-7 h-7 " />
                    </div>
                  </div>
                </Link>
                <Link href={project.code} target="_blank">
                  <div className="flex flex-col gap-3 group">
                    <span
                      className="text-xs text-accent invisible group-hover:visible
                   "
                    >
                      View Code
                    </span>
                    <div
                      className="flex items-center justify-center bg-secondary-300/60 
                  rounded-full w-16 h-16 text-primary-100 group-hover:text-accent"
                    >
                      <FaGithub className="w-7 h-7 " />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full xl:w-[50%] relative">
              {
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] "
                  onSlideChange={swiper =>
                    handleChangeProject(swiper.activeIndex)
                  }
                  navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button",
                  }}
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={project.image}
                        alt="Project Image"
                        quality={100}
                        layout="responsive"
                        width={300}
                        height={300}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              }
              <div
                className="flex justify-between xl:justify-end w-full absolute 
              right-0 top-[50%] gap-4 z-20 xl:inline-flex xl:top-auto"
              >
                <button
                  className="bg-accent w-10 h-10 flex items-center justify-center hover:cursor-pointer
                hover:bg-accent/80 text-secondary-500 prev-button "
                >
                  <RiArrowLeftWideFill className="h-6 w-6" />
                </button>
                <button
                  className="bg-accent w-10 h-10 flex items-center justify-center hover:cursor-pointer
                hover:bg-accent/80 text-secondary-500 next-button"
                >
                  <RiArrowRightWideFill className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
