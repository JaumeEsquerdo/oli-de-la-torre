'use client'
import { motion } from 'framer-motion'
import { ShoppingCart } from "lucide-react";
import { Menu } from "@/app/components/Menu";
import { useState } from 'react';
import { Cart } from './Cart';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const Header = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const handleOpenCart = () => {
        setCartOpen(prev => !prev)
    }
    return (
        <header className="flex justify-between pt-20 md:pt-10 px-8 md:pl-12 md:pr-28 w-full relative items-center">
            <Link href={'/'} className="flex flex-col justify-center items-center">
                <span className="text-xl">OLI DE LA TORRE</span>
                <span className="font-light">X</span>
                <span className="text-xl">OLI MALENO</span>
            </Link>

            <div className="flex w-fit  justify-end items-center gap-6 md:gap-12">

                <div className="flex w-fit justify-end items-center gap-6 md:gap-12 relative">
                    <motion.div layout onClick={handleOpenCart} style={{ display: "flex", alignItems: "center" }} className='rounded-full bg-gray-200 p-2 cursor-pointer hover:bg-gray-300 transition-colors duration-75'>
                        <ShoppingCart size={25} strokeWidth={2} />
                    </motion.div>
                    <AnimatePresence mode='wait'>
                        {cartOpen && (
                            <div className='absolute top-full right-0 mt-2 z-50 min-w-xl'>
                                <Cart close={handleOpenCart} />
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                <Menu />
            </div>
        </header>
    );
}

