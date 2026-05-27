import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const variantContainerLeft = {
    initial: { x: -400, opacity: 0 },
    show: {
        x: 0,
        opacity: 1
    },
}
const variantContainerRight = {
    initial: { x: 400, opacity: 0 },
    show: {
        x: 0,
        opacity: 1
    },
}

const variantsText = {
    initial: { y: 0 },
    hover: { y: "-50%" }, // Sube la mitad del contenedor
};

export const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Comprobar si la pantalla es tamaño MD de Tailwind (768px) o más
        const media = window.matchMedia("(min-width: 768px)");

        const listener = (e: MediaQueryListEvent | { matches: boolean }) => setIsDesktop(e.matches);
        /* evaluar el estado inicial */
        listener(media)

        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

    // Si es desktop activa "hover", si es móvil se queda en "initial" (desactivado)
    const hoverState = isDesktop ? "hover" : "initial";
    return (
        <>
            <motion.div variants={variantContainerLeft} initial='initial' animate='show' whileHover={hoverState} transition={{ duration: 1.4, ease: "easeInOut" }}
                className="cursor-pointer w-11/12 h-[60dvh] md:w-1/2 md:h-[70dvh] bg-red-800/80 p-8 rounded-4xl">
                <div className="flex items-center gap-3">
                    <span className="h-4 w-4 rounded-full bg-white" /> {/* círculo */}
                    <div className="h-10 overflow-hidden relative">
                        <motion.div
                            variants={variantsText}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col"
                        >
                            {/* Texto 1: El que se ve al principio */}
                            <h2 className="text-4xl leading-none text-white h-10 flex items-center">
                                Productos
                            </h2>

                            {/* Texto 2: El que está escondido abajo esperando subir */}
                            <h2 className="text-4xl leading-none text-white h-10 flex items-center">
                                Productos
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </motion.div >

            <div className="gap-0 flex flex-col items-center md:w-1/2 md:gap-4 ">
                <motion.div variants={variantContainerRight} initial='initial' animate='show' whileHover={hoverState} transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }} className="cursor-pointer w-11/12 h-[40dvh] md:w-full md:h-[calc(35dvh-0.5rem)] bg-green-800/80 p-8 z-10 -mt-10 md:mt-0 rounded-4xl">
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-4 rounded-full bg-white" /> {/* círculo */}
                        <div className="h-10 overflow-hidden relative ">
                            <motion.div
                                variants={variantsText}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex flex-col"
                            >
                                <h2 className="text-4xl leading-none text-white h-10 flex items-center">Beneficios</h2>
                                <h2 className="text-4xl leading-none text-white h-10 flex items-center">Beneficios</h2>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={variantContainerRight} initial='initial' animate='show' whileHover={hoverState} transition={{ duration: 1, delay: 1, ease: "easeInOut" }} className="cursor-pointer w-11/12 h-[40dvh] md:w-full md:h-[calc(35dvh-0.5rem)] bg-yellow-800/80 p-8 z-20 -mt-10 md:mt-0 rounded-4xl">
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-4 rounded-full bg-white" /> {/* círculo */}
                        <div className="h-20 md:h-10 overflow-hidden relative ">
                            <motion.div
                                variants={variantsText}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex flex-col"
                            >
                                <h2 className="text-4xl leading-none text-white h-20 md:h-10 flex items-center">Preguntas Frecuentes</h2>
                                <h2 className="text-4xl leading-none text-white h-20 md:h-10 flex items-center">Preguntas Frecuentes</h2>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

