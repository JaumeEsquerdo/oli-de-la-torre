'use client';

import { useState } from 'react';
import { useCartStore } from '@/app/store/useCartStore'

interface Logo {
    src: string;
    alt: string;
    nombre?: string;
}

interface Producto {
    id: string;
    titulo: string;
    subtitulo: string;
    precio: string;
    logos: Logo[]
}

interface SelectorCantidadPrecioProps {
    producto: Producto;
}

export default function SelectorCantidadPrecio({ producto }: SelectorCantidadPrecioProps) {
    // Limpiamos el precio (ej: '29€' -> 29)
    const precioBase = parseFloat(producto.precio.replace('€', ''));

    // Estado de la cantidad elegida
    const [cantidad, setCantidad] = useState(1);

    // Estado global zustand
    const addToCart = useCartStore((state) => state.addToCart);

    // Funciones de control
    const incrementar = () => setCantidad(prev => prev + 1);
    const decrementar = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    // Operación matemática del subtotal
    const precioTotal = (precioBase * cantidad).toFixed(2);

    const añadirAlCarrito = () => {

        addToCart({
            id: producto.id,
            titulo: producto.titulo,
            subtitulo: producto.subtitulo,
            precio: producto.precio,
            precioNumerico: precioBase
        }, cantidad);
        alert(`Añadido: ${cantidad} x ${producto.titulo} por ${precioTotal}€`);
    };

    return (
        <div className="space-y-6">


            {/* Selector de cantidad */}
            <div className="flex justify-center items-center">
                {/* <span className="text-[#666] font-medium">Cantidad:</span> */}
                <div className="flex items-center overflow-hidden">
                    <button
                        type="button"
                        onClick={decrementar}
                        disabled={cantidad === 1}
                        className={`px-4 py-2 bg-white hover:bg-white/80 rounded-4xl text-gray-700 font-bold transition-colors cursor-pointer disabled:bg-white/40 disabled:pointer-events-none`}
                    >
                        -
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-semibold min-w-[45px] text-center">
                        {cantidad}
                    </span>
                    <button
                        type="button"
                        onClick={incrementar}
                        className="px-4 py-2 bg-white hover:bg-white/80 rounded-4xl text-gray-700 font-bold transition-colors cursor-pointer"
                    >
                        +
                    </button>
                </div>
            </div>



            {/* Precio Total acumulado dinámicamente */}
            <div className="flex justify-between items-center p-4 min-w-[320px] bg-green-50 rounded-xl border border-green-100">
                <span className="font-bold text-textColor text-base">Total estimado:</span>
                <span className="text-3xl font-black text-textColor">{precioTotal}€</span>
            </div>

            {/* Botón de compra */}
            <button
                type="button"
                onClick={añadirAlCarrito}
                className="w-full bg-white hover:bg-white/80 text-textColor font-bold py-3 px-6 text-2xl rounded-4xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
                añadir al carrito
            </button>
        </div>
    );
}