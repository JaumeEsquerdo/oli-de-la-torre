import { FooterLinks, Links } from '@/app/data/nav.js'
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className='h-[60vh] w-full flex flex-col justify-between px-4 md:p-12'>
            <div className='w-full flex justify-between'>
                {/* navs principales */}
                <div className='w-full'>
                    <div className='flex flex-col gap-6'>
                        {Links.map((link) => (
                            <div key={link.title} className='perspective-dramatic perspective-origin-bottom'>
                                <motion.div

                                >
                                    <a href={link.href} className='text-6xl w-fit hover:text-black/60 duration-100 transition-colors'>
                                        {link.title}
                                    </a>
                                </motion.div>
                            </div>
                        ))
                        }
                    </div>

                </div>

                {/* navs secundarios */}
                <div className='w-full flex flex-col items-center'>
                    {FooterLinks.map((link) => (
                        <Link key={link.title} href={link.href} className='text-lg w-fit hover:text-black/60 duration-100 transition-colors'>
                            {link.title}
                        </Link>
                    ))
                    }


                </div>
            </div>

            <div className='relative flex justify-between items-center '>

                <div className="flex flex-col items-center">
                    <span className="text-xl">OLI DE LA TORRE</span>
                    <span className="font-light">X</span>
                    <span className="text-xl">OLI MALENO</span>
                </div>

                <span className='absolute top-1/2 left-1/2 -translate-1/2'>2026</span>

                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/jaume-esquerdo/" className='hover:text-black/80 duration-100 transition-colors'>web creada por Jaume</a>

            </div>
        </footer >
    );
}

