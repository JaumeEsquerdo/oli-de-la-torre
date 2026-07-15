'use client'
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from "next/link";

{/* ================= SECCIÓN MINI SLIDE DE RECOMENDADOS ================= */ }


interface Logo {
    src: string;
    alt: string;
    nombre?: string; // Por si quieres poner un texto abajo del logo
}

type Product = {
    slug: string;
    id: string;
    titulo: string;
    subtitulo: string;
    precio: string;
    logos: Logo[];
}

interface SlideProductsProps {
    recomendados: Product[];
}

export const SlideProducts = ({ recomendados }: SlideProductsProps) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // 1. Escuchamos el scroll horizontal del contenedor
    const { scrollXProgress } = useScroll({ container: containerRef });

    // 2. Mapeamos el progreso (0 a 1) a la opacidad de los indicadores
    // Izquierda: opacidad 0 al inicio (0 progress), opacidad 1 cuando avanzas
    const leftOpacity = useTransform(scrollXProgress, [0, 0.1], [0, 1]);
    // Derecha: opacidad 1 al inicio, opacidad 0 al llegar al final (1 progress)
    const rightOpacity = useTransform(scrollXProgress, [0.9, 1], [1, 0]);

    if (!recomendados || recomendados.length === 0) return null;

    return (
        <>
            {
                recomendados.length > 0 && (
                    <div className="w-full px-8 md:px-12 py-16 flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-textColorb-6">Otros productos que te recomendados</h3>

                        {/* <div className="relative w-full">
                            {leftOpacity > 0 && (
                                <motion.div
                                    style={{ opacity: leftOpacity }}
                                    className="absolute right-0 top-0 w-12 h-12 bg-black z-10 pointer-events-none"
                                />
                            )}


                            <motion.div
                                style={{ opacity: rightOpacity }}
                                className="absolute right-0 top-1/2 bottom-4 w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" 
                            /> */}

                        <div ref={containerRef} className="gap-6 pb-4 flex overflow-x-auto snap-x snap-mandatory  overflow-x-hidden">
                            <motion.div
                                drag="x"
                                dragConstraints={containerRef}
                                dragElastic={0.1}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={() => {
                                    setTimeout(() => setIsDragging(false), 50);
                                }}
                                className="flex gap-6 pb-4">
                                {recomendados.map((item) => (

                                    <Link
                                        href={`/producto/${item.slug}`}
                                        key={item.id}
                                        onDragStart={(e) => e.preventDefault()}
                                        onClick={(e) => isDragging && e.preventDefault()}
                                        className="w-[120px] md:w-[220px] shrink-0 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between"
                                    >
                                        <div className="w-full h-40 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-gray-400">
                                            <span>[Imagen {item.subtitulo}]</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-textColor text-md">{item.titulo}</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-gray-500">Tamaño: {item.subtitulo}</span>
                                                <span className="font-bold text-textColor">{item.precio}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    // </div >
                )
            }
        </>
    );
}

