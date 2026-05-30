import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const vairantText: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: .8,
            ease: 'easeOut'
        }
    }
}

const variantOverlay: Variants = {
    initial: {
        opacity: 0
    }
    ,
    animate: {
        opacity: 0.4,
        transition: {
            duration: .8,
            ease: 'easeOut'
        }
    }
}

export const AnimatedCard = () => {
    const containerRef = useRef(null)

    const { scrollYProgress: scrollEntrada } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"] // Se completa cuando el contenedor llega al centro
    })

    const { scrollYProgress: scrollTexto } = useScroll({
        target: containerRef,
        offset: ["center end", "end start"] // Empieza cuando el centro del contenedor asoma por abajo
    })

    const moveX = useTransform(scrollEntrada, [0, 0.7], [1800, 0], { clamp: true })
    const radius = useTransform(scrollEntrada, [0.4, 0.7], [0, 80], { clamp: true })
    // const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 1, 1])
    const overlayOpacity = useTransform(scrollTexto, [0, 0.2], [0, 0.4], { clamp: true })

    return (
        <div ref={containerRef} className="min-h-screen h-[140vh] flex flex-col items-center w-full overflow-hidden pt-50">
            {/* <div className="sticky top-0 h-screen w-full flex items-center justify-center"> */}
            <motion.div style={{ x: moveX, borderRadius: radius }} className="relative w-[90dvw] h-[90dvh] bg-amber-200  flex flex-col justify-end px-12 py-20 overflow-hidden">

                <motion.div
                    // variants={variantOverlay}
                    // initial
                    // whileInView='animate'
                    // viewport={{ amount: 0.5 }}
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black pointer-events-none  z-10"
                />

                <motion.div variants={vairantText} initial='initial' whileInView='animate' viewport={{ amount: 0.8 }} className="flex flex-col gap-8 z-20">
                    <h3 className="text-4xl text-white max-w-200">Compromiso con el medio ambiente. Olivos sin tratar químicamente, con cariño y trato humano, como toda la vida</h3>
                    <Link href={'/'} className="text-3xl px-8 py-4 bg-white text-black w-fit rounded-2xl">descubre cómo lo hacemos</Link>
                </motion.div>
            </motion.div>
            {/* </div> */}
        </div >
    );
}
