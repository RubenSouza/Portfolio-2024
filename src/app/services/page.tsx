"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web development",
    description:
      "We build modern, responsive, and high-performance websites using the latest web technologies to ensure your business has a strong and efficient online presence.",
    link: "/service-1",
  },
  {
    number: "02",
    title: "Mobile development",
    description:
      "We develop intuitive and high-performance mobile apps for iOS and Android, providing users with a seamless and enjoyable experience.",
    link: "/service-2",
  },
  {
    number: "03",
    title: "UX/UI Design",
    description:
      "We create attractive and functional user interfaces that ensure intuitive navigation and an exceptional user experience, aligning aesthetics with usability.",
    link: "/service-3",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "We optimize websites for search engines, increasing visibility and improving your site's ranking in search results, attracting more organic traffic.",
    link: "/service-3",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center ">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent
                group-hover:text-outline-hover transition-all duration-500"
                >
                  {service.number}
                </div>
                <Link
                  href={service.link}
                  className="w-[70px] h-[70px] rounded-full bg-primary-200 group-hover:bg-accent 
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-secondary-500 text-3xl" />
                </Link>
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500"
              >
                {service.title}
              </h2>
              <p className="text-primary-500">{service.description}</p>
              <div className="border-b border-primary-500 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
