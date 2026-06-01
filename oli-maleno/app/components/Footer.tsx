import { FooterLinks, Links } from '@/app/data/nav.js'
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='min-h-[65vh] w-full flex flex-col gap-22 md:gap-0 justify-between px-4 py-16 md:p-12'>
            <div className='w-full flex flex-col md:flex-row gap-16 md:gap-0 justify-between'>
                {/* navs principales */}
                <div className='w-full'>
                    <div className='flex flex-col gap-10'>
                        {Links.map((link) => (
                            <motion.div
                                key={link.title}
                            >
                                <a href={link.href} className='text-6xl w-fit hover:text-black/60 duration-100 transition-colors'>
                                    {link.title}
                                </a>
                            </motion.div>
                        ))
                        }
                    </div>

                </div>

                {/* navs secundarios */}
                <div className='w-1/2 flex flex-col gap-4 justify-end items-start'>
                    {FooterLinks.map((link) => (
                        <Link key={link.title} href={link.href} className='text-lg w-fit font-medium hover:text-black/60 duration-100 transition-colors'>
                            {link.title}
                        </Link>
                    ))
                    }
                    <div className='flex flex-col gap-2'>
                        <Link href={''} className=' font-medium text-[#666] hover:text-[#666]/80 '>Politica de privacidad</Link>
                        <Link href={''} className=' font-medium text-[#666] hover:text-[#666]/80 '>Términos y condiciones</Link>
                    </div>

                </div>
            </div>

            <div className='relative flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center '>

                <div className="flex flex-col items-center">
                    <span className="text-xl">OLI DE LA TORRE</span>
                    <span className="font-light">X</span>
                    <span className="text-xl">OLI MALENO</span>
                </div>

                <span className='md:absolute md:top-1/2 md:left-1/2 md:-translate-1/2'>2026</span>

                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/jaume-esquerdo/" className='hover:text-black/80 duration-100 transition-colors'>web creada por Jaume</a>

            </div>
        </footer >
    );
}

