import { motion, Variants } from 'framer-motion'
import { oilBenefits } from '@/app/data/benefits'

const variantTitleLeft: Variants = {
    initial: { x: 800, y: 140 },
    animate: {
        x: 0, y: 0,
        transition: { type: 'spring', stiffness: 6 }

    }
}
const variantTitleRight: Variants = {
    initial: { x: -800, y: 120 },
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
            duration: 0.8,
            ease: 'easeOut'
        }

    }
}

export const Benefits = () => {
    return (
        <div className="flex flex-col items-center px-10 pt-20">
            <div className="flex flex-col gap-8 w-[90%] md:w-[50%]">
                <motion.h2 variants={variantTitleRight} initial='initial' whileInView='animate' viewport={{ once: true, amount: 0.1 }} className="text-7xl text-[#666] text-start w-full">los beneficios del</motion.h2>
                <motion.h2 variants={variantTitleLeft} initial='initial' whileInView='animate' viewport={{ once: true, amount: 0.1 }} className="text-7xl text-end w-full">aceite de oliva virgen</motion.h2>
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

