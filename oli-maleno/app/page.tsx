'use client'
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { FAQ } from "./components/FAQ";

const variants: Variants = {
  open: {
    width: "min(600px, 90vw)",
    height: "min(420px, 80vh)",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }

  },
  closed: {
    width: "40px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { delay: 0.35, duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
}

export default function Home() {
  const [isAnimate, setIsAnimate] = useState(false)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white">
      <div className="fixed right-8 top-10 md:right-25 md:top-12.5 z-50">

        <motion.div variants={variants} animate={isAnimate ? "open" : 'closed'} initial='closed'
          className="relative  bg-green-200 rounded-4xl">

          <AnimatePresence>
            {isAnimate && <Nav />}
          </AnimatePresence>

        </motion.div>

        <button
          onClick={() => setIsAnimate((prev) => !prev)}
          className="absolute cursor-pointer top-0 right-0 bg-black rounded-4xl h-10 w-10 flex flex-col justify-center items-center hover:opacity-85 duration-100 transition-all">
          <span
            className={`
      absolute  h-0.5 w-5 bg-white rounded-2xl
      transition-all duration-300
      ${isAnimate ? "rotate-45" : "-translate-y-1"}
    `}
          />

          <span
            className={`
      absolute  h-0.5 w-5 bg-white rounded-2xl
      transition-all duration-300
      ${isAnimate ? "-rotate-50" : "translate-y-1"}
    `}
          />
        </button>

      </div>
      <div className="flex-1 p-20 flex flex-col gap-20">
        <FAQ />
        <FAQ color="#15472B" textSecondary="#15472B99" />
      </div>
    </div>
  );
}
