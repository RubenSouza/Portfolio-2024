"use client";

import CountUp from "react-countup";

const stats = [
  {
    title: "Projetos completos",
    count: 10,
  },
  {
    title: "Clientes satisfeitos",
    count: 10,
  },
  {
    title: "Xícaras de café",
    count: 150,
  },
  {
    title: "Horas de trabalho",
    count: 999,
  },
];

const Stats = () => {
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center 
              justify-center xl:justify-start"
            >
              <CountUp
                end={stat.count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.title.length < 15
                    ? "max-w-[120px]"
                    : "max-w-[150px] leading-snug text-primary-500"
                }`}
              >
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
