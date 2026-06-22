'use client'

import { Footer } from '@/app/components/Footer';
import { textNosotros } from '@/app/data/nosotros'
import { Header } from '@/app/components/Header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';


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



const Nosotros = () => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
                <Header />
                <main className="flex flex-col gap-16 md:gap-36 flex-1 pt-8 md:mx-12 md:py-36">
                    <h1 className='flex flex-col gap-6'><span className='text-8xl text-[#666]'>SOBRE</span> <span className='text-8xl'>NOSOTROS</span></h1>
                    <div className="flex flex-col md:gap-20 max-w-3/5 mx-auto items-center">
                        <div className='h-260 bg-amber-800 w-full relative rounded-4xl fill-neutral-900'>
                            {/* <Image src="" alt="" fill sizes='' /> */}
                            <motion.h2 variants={vairantText} initial='initial' whileInView='animate' viewport={{ amount: 0.9 }} className='absolute top-2/5 left-1/2 -translate-x-1/2 text-5xl w-[80%] text-white'>Más de 30 años cuidando nuestros olivos y manteniendo viva nuestra tradición familiar</motion.h2>
                        </div>
                        {textNosotros.filter(text => text.id === 1).map((text) => (
                            <div key={text.id} className='flex flex-col gap-10 w-[90%]'>
                                <h3 className='text-2xl md:text-4xl font-semibold'>{text.title}</h3>
                                <div className='flex flex-col gap-6'>
                                    <p>{text.p1}</p>
                                    <p>{text.p2}</p>
                                    <p>{text.p3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:gap-20 max-w-3/5 mx-auto items-center">
                        <div className='h-140 bg-amber-600 w-full rounded-4xl '></div>
                        {textNosotros.filter(text => text.id === 2).map((text) => (
                            <div key={text.id} className='flex flex-col gap-10  w-[90%]'>
                                <h3 className='text-2xl md:text-4xl font-semibold'>{text.title}</h3>
                                <div className='flex flex-col gap-6'>
                                    <p>{text.p1}</p>
                                    <p>{text.p2}</p>
                                    <p>{text.p3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Nosotros;