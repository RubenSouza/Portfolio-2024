"use client";

import Image from "next/image";
import logo from "../assets/img/logo/color-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const Nav = () => {
  const activeLink = "font-medium text-accent border-b-2 border-accent";
  const inactiveLink =
    "font-medium text-white hover:text-accent transition-all";
  const pathname = usePathname();

  return (
    <nav
      className="max-w-[80rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <Link
          className="inline-flex items-center text-xl font-semibold "
          href="/"
        >
          <Image
            className="w-28 h-auto"
            src={logo}
            width={200}
            height={200}
            alt="Logo"
          />
          <span className="pt-5">{/* {"{...}"} */}</span>
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 
            bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none 
               "
            data-hs-collapse="#navbar-image-2"
            aria-controls="navbar-image-2"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-image-2"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <Link
            className={`${pathname === "/" ? activeLink : inactiveLink}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${
              pathname === "/services" ? activeLink : inactiveLink
            }`}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={`${pathname === "/resume" ? activeLink : inactiveLink}`}
            href="/resume"
          >
            Resume
          </Link>
          <Link
            className={`${pathname === "/work" ? activeLink : inactiveLink}`}
            href="/work"
          >
            Work
          </Link>
          <Link
            className={`${
              pathname === "/contact" ? activeLink : inactiveLink
            } `}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
