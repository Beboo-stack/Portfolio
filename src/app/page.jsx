"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 mb-12 lg:mb-0 z-30">
          <Image
            alt=""
            src="/hero.png"
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">
            Crafting Digital Exprereinces, Designing Tommorow.
          </h2>
          {/* Desk */}
          <p className="md:text-xl ">
            Welcome to My Digital Canvas, Where Innovation and creativity
            converge. with a keen eye for aesthetics and a mystery of code
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
