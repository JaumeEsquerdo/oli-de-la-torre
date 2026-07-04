import { FooterLinks, Links } from '@/app/data/nav.js'
import { motion, Variants } from "framer-motion";
import Link from 'next/link';

const perspective: Variants = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateX: 40,
        translateY: -20
    },
    open: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateX: 0,
        translateY: 0,
        transition: {
            duration: 0.75,
            delay: 0.5 + i * 0.14,
            opacity: { duration: 0.55, delay: 0.7 + i * 0.14, },
            ease: [.251, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }

    }
}

const footerVariants: Variants = {
    initial: {
        opacity: 0,
        translateY: 20
    },
    open: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 1.2,
            delay: 1.2,
            ease: [.251, .61, .355, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }

    }
}


export const Nav = () => {
    return (
        <div className='flex flex-col justify-between px-8 pt-12 pb-14 h-full'>
            <div className='flex flex-col gap-6'>
                {Links.map((link, i) => (
                    <div key={link.title} className='perspective-dramatic perspective-origin-top-right'>
                        <motion.div
                            variants={perspective}
                            custom={i}
                            animate='open'
                            initial='initial'
                            exit='exit'
                        >
                            <Link href={link.href} className='text-4xl w-fit hover:text-black/60 duration-100 transition-colors'>
                                {link.title}
                            </Link>
                        </motion.div>
                    </div>
                ))
                }
            </div>

            {/* footer links del nav */}
            {FooterLinks.map((link) => (
                <motion.div
                    key={link.title}
                    variants={footerVariants}
                    animate='open'
                    initial='initial'
                    exit='exit'
                >
                    <Link href={link.href} className='text-xl w-fit hover:text-black/60 duration-100 transition-colors'>
                        {link.title}
                    </Link>
                </motion.div>

            ))
            }
        </div >
    );
}