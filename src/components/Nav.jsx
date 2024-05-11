"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  const socials = [
    {
      src: "/dribbble.png",
    },
    {
      src: "/facebook.png",
    },
    {
      src: "/github.png",
    },
    {
      src: "/instagram.png",
    },
    {
      src: "/linkedin.png",
    },
    {
      src: "/pinterest.png",
    },
  ];

  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const lastVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3 items-center">
        {links.map((item, id) => (
          <Link
            href={item.path}
            key={id}
            className={`${
              pathName === item.path && "bg-black text-white p-1 rounded-lg"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex md:w-1/3 justify-center">
        <Link
          href="/"
          className=" text-sm p-1 bg-black rounded-md font-semibold flex justify-center items-center"
        >
          <span className="text-white">Peter</span>
          <span className="text-black p-1 items-center justify-center flex bg-white rounded-md ml-1">
            .dev
          </span>
        </Link>
      </div>
      {/* Socials */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {socials.map((item, id) => (
          <Link href="" key={id}>
            <Image src={item.src} alt="" width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="h-8 w-10 flex flex-col justify-between relative z-50"
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className={`h-1 w-10 bg-black rounded origin-left`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className={`h-1 w-10 bg-black rounded `}
          ></motion.div>
          <motion.div
            variants={lastVariants}
            animate={open ? "opened" : "closed"}
            className={`h-1 w-10 bg-black rounded origin-left`}
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute w-screen h-screen top-0 left-0 bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl"
          >
            {links.map((item, id) => (
              <motion.div variants={listItemVariant} key={id} className="">
                <Link
                  href={item.path}
                  onClick={() => setOpen(!open)}
                  className={`${
                    pathName === item.path &&
                    "bg-white text-black p-1 rounded-lg"
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Nav;
