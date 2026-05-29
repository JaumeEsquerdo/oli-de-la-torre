import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export const Productos = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <motion.div layout
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)} className="h-60 w-80 p-4 relative bg-gray-100 rounded-2xl cursor-pointer">
            <Image src="/assets/imgs/aceite12.jpeg"
                fill
                sizes="240px"
                //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="h-full w-full object-cover rounded-2xl" alt="" />
            <div className="absolute inset-0 h-full w-full flex gap-3 items-end justify-end p-2">
                <AnimatePresence mode="wait">
                    {isExpanded && (
                        <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            className="whitespace-nowrap text-sm font-light p-2 bg-white rounded-2xl overflow-hidden"
                        >
                            Añadir producto
                        </motion.span>
                    )}
                </AnimatePresence>

                <motion.button
                    layout

                    className="overflow-hidden rounded-2xl flex items-center p-2 bg-white border-none cursor-pointer"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <motion.div layout style={{ display: "flex", alignItems: "center" }}>
                        <ShoppingCart size={20} strokeWidth={2} />
                    </motion.div>

                </motion.button>
            </div>
        </motion.div>
    );
}

