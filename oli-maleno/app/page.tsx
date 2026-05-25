'use client'
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    width: "600px",
    height: "420px",
    top: "-25px",
    right: "-25px"
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px"
  }
}

export default function Home() {
  const [isAnimate, setIsAnimate] = useState(false)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="fixed right-[100px] top-[50px] z-50">

        <motion.div variants={variants} animate={isAnimate ? "open" : 'closed'} initial='closed'
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="relative  bg-amber-600 rounded-2xl">


        </motion.div>
        <button
          onClick={() => setIsAnimate((prev) => !prev)}
          className="absolute top-0 right-0 bg-green-50 rounded-2xl h-10 w-25">
          button Menu
        </button>

      </div>
      <div className="flex-1">

      </div>
    </div>
  );
}
