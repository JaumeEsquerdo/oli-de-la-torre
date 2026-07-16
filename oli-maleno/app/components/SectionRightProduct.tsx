'use client'
import { motion } from "framer-motion";

const variantsContainerRight = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: { duration: 1.4 }
    }
}

export const SectionRightProduct = () => {
    return (
        <motion.div
            variants={variantsContainerRight}
            initial='initial'
            animate='animate'
            className="sticky top-12 h-200 basis-1/2 flex-1 bg-amber-400 rounded-4xl">
            {/* <Image sizes="" fill src={''} alt="" /> */}
        </motion.div>
    );
}

