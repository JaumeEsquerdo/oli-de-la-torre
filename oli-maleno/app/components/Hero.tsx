import { motion } from "framer-motion";

const variantsText = {
    initial: { y: 0 },
    hover: { y: "-50%" }, // Sube la mitad del contenedor
};

export const Hero = () => {
    return (
        <>
            <motion.div initial='initial' whileHover='hover' className="w-11/12 h-[60dvh] md:w-1/2 md:h-[70dvh] bg-red-300 p-8 rounded-4xl">
                <div className="h-10 overflow-hidden relative ">
                    <motion.div
                        variants={variantsText}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col"
                    >
                        {/* Texto 1: El que se ve al principio */}
                        <h2 className="text-4xl leading-none h-10 flex items-center">
                            Productos
                        </h2>

                        {/* Texto 2: El que está escondido abajo esperando subir */}
                        <h2 className="text-4xl leading-none h-10 flex items-center">
                            Productos
                        </h2>
                    </motion.div>
                </div>
            </motion.div>
            <div className="hidden md:flex md:flex-col md:w-1/2 md:gap-4">

                <motion.div initial='initial' whileHover='hover' className="w-11/12 h-[40dvh] md:w-full md:h-[calc(35dvh-0.5rem)] bg-green-300 p-8 z-10 -mt-10 md:mt-0 rounded-4xl">
                    <div className="h-10 overflow-hidden relative ">
                        <motion.div
                            variants={variantsText}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col"
                        >
                            <h2 className="text-4xl leading-none h-10 flex items-center">Beneficios</h2>
                            <h2 className="text-4xl leading-none h-10 flex items-center">Beneficios</h2>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div initial='initial' whileHover='hover' className="w-11/12 h-[40dvh] md:w-full md:h-[calc(35dvh-0.5rem)] bg-yellow-300 p-8 z-20 -mt-10 md:mt-0 rounded-4xl">
                    <div className="h-10 overflow-hidden relative ">
                        <motion.div
                            variants={variantsText}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col"
                        >
                            <h2 className="text-4xl leading-none h-10 flex items-center">Preguntas Frecuentes</h2>
                            <h2 className="text-4xl leading-none h-10 flex items-center">Preguntas Frecuentes</h2>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

