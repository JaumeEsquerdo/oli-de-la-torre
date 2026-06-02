'use client'
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Nav } from "../components/Nav";

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
export const Menu = () => {
    const [isAnimate, setIsAnimate] = useState(false)
    const MenuRef = useRef<HTMLDivElement>(null)

    //    Escuchamos los clics en toda la página
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Si el menú está abierto Y el usuario clica fuera de menuRef...
            if (isAnimate && MenuRef.current && !MenuRef.current.contains(event.target as Node)) {
                setIsAnimate(false); // ...cerramos el menú, pero NO bloqueamos el clic original
            }
        };

        // Registramos el evento nativo del navegador
        document.addEventListener("mousedown", handleClickOutside);

        // Limpiamos el evento cuando el componente se desmonte
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isAnimate, setIsAnimate]);

    return (
        <div ref={MenuRef} className="fixed right-8 top-10 md:right-12 md:top-15 z-50">
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
    );
}

