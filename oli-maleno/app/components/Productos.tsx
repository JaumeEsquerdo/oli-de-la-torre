import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export const Productos = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <motion.div layout
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)} className="h-40 w-60 p-4 bg-gray-100 rounded-2xl cursor-pointer">
            <div className="h-full w-full flex gap-3 items-end justify-end">
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
                        <Plus size={20} strokeWidth={2.5} />
                    </motion.div>

                </motion.button>
            </div>
        </motion.div>
    );
}

