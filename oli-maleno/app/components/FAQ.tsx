import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';

interface FaqItem {
    title: string;
    description: string;
}

const dataFAQ: FaqItem[] = [
    {
        title: "faq 1",
        description: "description faq 1...."
    }
    ,
    {
        title: "faq 2",
        description: "description faq 2...."
    },
    {
        title: "faq 3",
        description: "description faq 3...."
    },
    {
        title: "faq 4",
        description: "description faq 4...."
    },
    {
        title: "faq 5",
        description: "description faq 5...."
    }
]

export const FAQ = ({ color = "#000000", textSecondary = "#666666" }) => {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null)
    const [pressedTab, setPressedTab] = useState<string | null>(null)


    // Función para alternar abrir/cerrar al presionar
    const handlePress = (title: string) => {
        setPressedTab((prev) => (prev === title ? null : title));
    };
    return (
        <div className="h-fit w-full flex flex-col justify-center items-center md:items-end"
            onMouseLeave={() => setHoveredTab(null)}
        >
            {
                dataFAQ.map((data, i) => {

                    const isHovered = hoveredTab === data.title
                    const isPressed = pressedTab === data.title



                    return (
                        <motion.div
                            key={data.title}
                            onMouseEnter={() => setHoveredTab(data.title)}
                            // onMouseLeave={() => setHoveredTab(null)}
                            onMouseDown={() => handlePress(data.title)}
                            animate={{
                                height: isPressed ? "400px" : "80px"
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            style={{ backgroundColor: 'white' }}
                            className={`relative w-full max-w-80 md:max-w-100 rounded-4xl flex justify-center items-start cursor-pointer z-20  ${isHovered && " text-white"}  duration-200 transition-colors ${i > 0 ? "-mt-0.5" : ""}`}>


                            {/* borde q no se oculta con la burbuja del hover */}
                            <div style={{ borderColor: color }} className="absolute inset-0 z-10 border-2 rounded-4xl pointer-events-none" />
                            {/* CONTENEDOR DEL TÍTULO: Controla el hover individualmente */}
                            <div
                                onMouseEnter={() => setHoveredTab(data.title)}
                                // onMouseLeave={() => setHoveredTab(null)}
                                className="absolute top-0 left-0 w-full h-20 flex items-center px-6 z-10 rounded-4xl"
                            >
                                <span style={{ color: isHovered ? "white" : color }} className={`inline-block z-20 font-medium transition-colors duration-200  rounded-4xl`}>
                                    {data.title}
                                </span>

                                {/* La burbuja se renderiza solo detrás del área del título */}
                                {(isHovered) && (
                                    <motion.div
                                        layoutId="bubble"
                                        style={{ backgroundColor: color }}
                                        className="absolute inset-0 w-full z-10 bg-[#${textColor}] rounded-4xl"
                                        transition={{ type: "spring", bounce: 0.3, stiffness: 70, duration: 1 }}
                                    />
                                )}

                            </div>

                            {/* DESCRIPCIÓN: Aparece empujando hacia abajo */}
                            <AnimatePresence>
                                {isPressed && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ color: textSecondary }}
                                        // Separamos la descripción usando un margen superior equivalente a la altura del título
                                        className="p-8 mt-14 w-full opacity-60 z-20"
                                    >
                                        <p className="pt-2">{data.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>


                        </motion.div >
                    )
                })
            }


        </div >
    );
}