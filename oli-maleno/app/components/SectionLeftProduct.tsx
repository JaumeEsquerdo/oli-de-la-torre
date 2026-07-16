'use client'
import { Leaf, Heart, Container, GlassWater, LucideIcon, ArrowUpRight } from 'lucide-react';
import { FAQ } from "@/app/components/FAQ";
import SelectorCantidadPrecio from "@/app/components/SelectorCantidadPrecio";
import { Producto, ProductoRecomendado } from '../producto/[id]/page';
import { SlideProducts } from "@/app/components/SlideProducts";
import { motion } from 'framer-motion';


interface SectionLeftProductProps {
    producto: Producto;
    recomendados: ProductoRecomendado[];
}

const variantsContainerLeft = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            // espera a que el padre termine o empiece antes de los hijos
            delayChildren: 0.2
        }
    }
}
const hijosContainerLeft = {
    initial: {
        y: 40,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7
        }
    }
}


const misIconos: Record<string, LucideIcon> = {
    Leaf: Leaf,
    Heart: Heart,
    Container: Container,
    GlassWater: GlassWater
};

export const SectionLeftProduct = ({ producto, recomendados }: SectionLeftProductProps) => {
    return (
        <motion.div
            variants={variantsContainerLeft}
            initial="initial"
            animate="animate"
            className="flex flex-col flex-1 basis-1/2 min-w-0 items-center gap-8">

            <motion.div
                variants={hijosContainerLeft}
                className="flex flex-col gap-2 justify-center items-center max-w-xl">
                <h1 className="text-4xl font-extrabold mb-4 text-textColor text-center">{producto.titulo}</h1>
                <h2 className="text-4xl font-extrabold mb-4 text-textColor">{producto.subtitulo}</h2>
            </motion.div>
            <div className="flex gap-8">

                {/* iconos beneficios producto */}
                <motion.ul
                    variants={hijosContainerLeft}
                    className="flex flex-col gap-4">
                    {producto.logos.map((logo, i) => {

                        const IconoComponente = logo.nombre ? misIconos[logo.nombre] : null;

                        return (

                            <li key={i} className="flex items-center gap-2" title={logo.alt}>

                                {IconoComponente ? (
                                    <IconoComponente className="w-6 h-6 text-textColor" />
                                ) : (
                                    <span>Icono no encontrado</span>
                                )}

                                <span className="text-sm text-[#666]">{logo.alt}</span>
                            </li>)
                    })}
                </motion.ul>
            </div>

            {/* Muestra el precio unitario original */}
            <motion.div
                variants={hijosContainerLeft}
                className="flex justify-between items-center gap-2">
                <span className="text-xl text-textColor font-semibold">Precio por unidad:</span>
                <span className="text-xl font-bold text-textColor">{producto.precio}</span>
            </motion.div>

            <motion.div
                variants={hijosContainerLeft}
            >
                <SelectorCantidadPrecio producto={producto} />
            </motion.div>


            <SlideProducts recomendados={recomendados} />



            <div>
                <div className="h-100 text-textBlack">

                    texto desrciptivo embalaje
                </div>

                {/* faqs */}
                <div className="w-100">

                    <FAQ bgColor="#e1efe3" color="#15472b" />
                </div>
            </div>
        </motion.div>
    );
}

