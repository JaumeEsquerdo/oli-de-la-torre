import { motion } from 'framer-motion'
import { ShoppingCart } from "lucide-react";
import { Menu } from "@/app/components/Menu";

export const Header = () => {
    return (
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
    );
}

