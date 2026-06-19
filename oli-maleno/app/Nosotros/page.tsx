'use client'
import { motion } from 'framer-motion'
import { ShoppingCart } from "lucide-react";
import { Menu } from "@/app/components/Menu";
import { Footer } from '@/app/components/Footer';
import { textNosotros } from '@/app/data/nosotros'
import Image from 'next/image';


const Nosotros = () => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
                <header className="flex justify-between pt-20 md:pt-10 px-8 md:pl-12 md:pr-28 w-full relative items-center">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-xl">OLI DE LA TORRE</span>
                        <span className="font-light">X</span>
                        <span className="text-xl">OLI MALENO</span>
                    </div>

                    <div className="flex w-fit  justify-end items-center gap-6 md:gap-12">
                        <motion.div layout style={{ display: "flex", alignItems: "center", width: 'full' }}>
                            <ShoppingCart size={25} strokeWidth={2} />
                        </motion.div>
                        <Menu />
                    </div>

                </header>
                <main className="flex flex-col gap-16 md:gap-36 flex-1 pt-8 md:mx-12 md:py-36">
                    <h1 className='flex flex-col gap-6'><span className='text-8xl text-[#666]'>SOBRE</span> <span className='text-8xl'>NOSOTROS</span></h1>
                    <div className="flex flex-col md:gap-20 max-w-3/5 mx-auto items-center">
                        <div className='h-260 bg-amber-800 w-full relative rounded-4xl fill-neutral-900'>
                            {/* <Image src="" alt="" fill sizes='' /> */}
                            <h2 className='absolute top-2/5 left-1/2 -translate-x-1/2 text-5xl w-[80%] text-white'>Más de 30 años cuidando nuestros olivos y manteniendo viva nuestra tradición familiar</h2>
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