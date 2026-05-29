import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const vairantText: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: .8,
            ease: 'easeOut'
        }

    }
}

export const AnimatedCard = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const moveX = useTransform(scrollYProgress, [0, 0.7], [1800, 0])
    const radius = useTransform(scrollYProgress, [0.2, 0.6], [0, 80])
    // const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 1, 1])

    return (
        <div ref={containerRef} className="min-h-screen h-screen flex flex-col items-center w-full overflow-hidden pt-40">
            {/* <div className="sticky top-0 h-screen w-full flex items-center justify-center"> */}
            <motion.div style={{ x: moveX, borderRadius: radius }} className="w-[80dvw] h-[80dvh] bg-amber-800  flex flex-col justify-end px-12 py-20">
                <motion.div variants={vairantText} initial='initial' whileInView='animate' viewport={{ amount: 0.9 }} className="flex flex-col gap-8">
                    <h3 className="text-4xl text-white max-w-200">Compromiso con el medio ambiente. Olivos sin tratar químicamente, con cariño y trato humano, como toda la vida</h3>
                    <Link href={'/'} className="text-3xl px-8 py-4 bg-white text-black w-fit rounded-2xl">descubre cómo lo hacemos</Link>
                </motion.div>
            </motion.div>
            {/* </div> */}
        </div>
    );
}
