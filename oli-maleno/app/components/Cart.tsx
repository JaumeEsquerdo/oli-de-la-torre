import { useCartStore } from '@/app/store/useCartStore';
import { easeInOut, motion, Variants } from 'framer-motion';

interface Close {
    close: () => void
}

const variantsCart: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeInOut } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.8, ease: easeInOut } }
}

export const Cart = ({ close }: Close) => {
    const items = useCartStore((state) => state.items);

    // Calculamos el total de unidades sumando la cantidad de cada item
    const totalUnidades = items.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <>

            {totalUnidades > 0 ? (
                <motion.div variants={variantsCart}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="cart-full" className='flex flex-col gap-2 relative bg-gray-50 p-4 rounded-4xl'>
                    <span className='absolute top-4 right-6' onClick={close}>X</span>
                    <div className='flex flex-col gap-4'>
                        <h3 className="font-bold text-lg text-gray-800">Tu Carrito</h3>

                        {/* 1. Recorremos los items con .map() */}
                        <div className="flex flex-col gap-3">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center p-2 border-b last:border-none">
                                    <div>

                                        <p className="font-semibold text-gray-900">{item.titulo}</p>
                                        <p className="text-xs text-gray-500">Formato: {item.subtitulo}</p>
                                    </div>
                                    <div className="text-right">
                                        {/* cantidad y precio */}
                                        <p className="text-sm font-medium text-gray-700">{item.cantidad} x {item.precio}</p>
                                        <p className="text-sm font-bold text-green-700">
                                            {(item.precioNumerico * item.cantidad).toFixed(2)}€
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Resumen del total de productos */}
                        <div className="flex justify-between items-center pt-2 border-t font-bold text-gray-900">
                            <span>Total unidades:</span>
                            <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-full">
                                {totalUnidades}
                            </span>
                        </div>
                    </div>

                </motion.div>
            )
                :
                (
                    <motion.div key="cart-empty">

                        <span>Aún no has añadido ningún producto al carrito de compras</span>
                    </motion.div>
                )
            }
        </>

    );
}

