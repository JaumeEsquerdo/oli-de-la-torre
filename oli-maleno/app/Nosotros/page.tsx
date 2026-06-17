'use client'
import { motion } from 'framer-motion'
import { ShoppingCart } from "lucide-react";
import { Menu } from "@/app/components/Menu";
import { Footer } from '@/app/components/Footer';


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
                <main className="flex flex-col gap-16 md:gap-20 flex-1 pt-8 md:pt-20 w-full">
                    nosotros
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Nosotros;