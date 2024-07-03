"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web development",
    description:
      "Sites modernos, responsivos e de alto desempenho usando as mais recentes tecnologias da Web para garantir que sua empresa tenha uma presença on-line forte e eficiente.",
    link: "/contact",
  },
  {
    number: "02",
    title: "Mobile development",
    description:
      "Aplicativos móveis intuitivos e de alto desempenho para iOS e Android, proporcionando aos usuários uma experiência perfeita e agradável.",
    link: "/contact",
  },
  {
    number: "03",
    title: "UX/UI Design",
    description:
      "Interfaces de usuário atraentes e funcionais que garantem uma navegação intuitiva e uma experiência de usuário excepcional, alinhando estética com usabilidade.",
    link: "/contact",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Sites otimizados para os mecanismos de busca, aumentando a visibilidade e melhorando o ranqueamento do seu site nos resultados de busca, atraindo mais tráfego orgânico.",
    link: "/contact",
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
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
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
