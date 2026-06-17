import { motion, Variants } from 'framer-motion'
import { oilBenefits } from '@/app/data/benefits'

// --lo-que-sea crea la variable y var() es la única función que acepta un valor de respaldo por si la variable falla
const variantTitleLeft: Variants = {
    initial: { x: 'var(--slide-x-left, 80px)', y: 'var(--slide-y, 30px)' },
    animate: {
        x: 0, y: 0,
        transition: { type: 'spring', stiffness: 6 }

    }
}
const variantTitleRight: Variants = {
    initial: {
        x: 'var(--slide-x-right, -80px)',
        y: 'var(--slide-y, 30px)',
    },
    animate: {
        x: 0, y: 0,
        transition: { type: 'spring', stiffness: 6 }
    }
}

const variantIcon: Variants = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: {
            delay: 0.4,
            duration: 0.8,
            ease: 'easeOut'
        }

    }
}

export const Benefits = () => {
    return (
        <div id='beneficios' className="scroll-mt-46 flex flex-col items-center px-10 pt-20">
            <div className="flex flex-col gap-8 w-[90%] md:w-[50%] [--slide-y:30px] [--slide-x-left:80px] [--slide-x-right:-80px]
            md:[--slide-y:140px] md:[--slide-x-left:800px] md:[--slide-x-right:-800px]">
                <motion.h2 variants={variantTitleRight} initial='initial' whileInView='animate' viewport={{ once: true, amount: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl text-[#666] text-start w-full">los beneficios del</motion.h2>
                <motion.h2 variants={variantTitleLeft} initial='initial' whileInView='animate' viewport={{ once: true, amount: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl text-end w-full">aceite de oliva virgen</motion.h2>
            </div>
            <div className='flex flex-col gap-8 pt-20'>

                {oilBenefits.map((benefits) => {
                    const IconComponent = motion.create(benefits.icon)

                    return (
                        <div className='w-80 flex flex-col items-start gap-2' key={benefits.title}>
                            <motion.div layout style={{ display: "flex", alignItems: "center" }}>
                                <IconComponent variants={variantIcon} initial='initial' whileInView='animate' size={40} strokeWidth={2} />
                            </motion.div>
                            <h3 className='text-xl font-bold'>{benefits.title}</h3>
                            <p className='text-sm text-[#666]'>{benefits.description}</p>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    );
}

