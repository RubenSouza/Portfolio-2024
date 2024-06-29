"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import Cover from "@/components/Cover";
import Stats from "@/components/Stats";

const Home = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <section className="h-full">
      <div className="container h-full px-4 mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:py-10 justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software developer</span>
            <h1 className="h1">
              Hello I`m
              <br />
              <span className="text-accent">Rúben Eliel</span>
            </h1>
            <p className="max-w-[500px] my-5 text-primary-500">
              {
                "I am a freelance software developer with expertise in web development. Let's work together to bring your ideas to life!"
              }
            </p>
            <div
              className="flex w-full pt-4 flex-col xl:flex-row items-center justify-center xl:justify-start 
            space-y-4 xl:space-y-0"
            >
              {/* download button */}
              <Button
                type="outline"
                key={"cv_button"}
                onClick={handleButtonClick}
              >
                <p>Download CV</p>
                <CgSoftwareDownload className="w-6 h-6" />
              </Button>
              {/* social medias */}
              <div className="flex space-x-4 xl:px-6">
                <Link href={"https://github.com/RubenSouza"} target="_blank">
                  <FaGithub className="text-primary-500 w-8 h-8 hover:text-accent  " />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/ruben-oliveira-dev/"}
                  target="_blank"
                >
                  <FaLinkedin className="text-primary-500 w-8 h-8 hover:text-accent  " />
                </Link>
                <Link
                  href={"https://www.instagram.com/rub3neliel/"}
                  target="_blank"
                >
                  <FaInstagram className="text-primary-500 w-8 h-8 hover:text-accent " />
                </Link>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none ">
            <Cover />
          </div>
        </div>
        <div className="py-10">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
