'use client';

import { useState } from 'react';
import { useCartStore } from '@/app/store/useCartStore'

interface Logo {
    src: string;
    alt: string;
    nombre?: string; // Por si quieres poner un texto abajo del logo
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
            {/* Muestra el precio unitario original */}
            <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Precio por unidad:</span>
                <span className="text-xl font-bold text-gray-900">{producto.precio}</span>
            </div>

            <hr className="border-gray-200" />

            {/* Selector de cantidad */}
            <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Cantidad:</span>
                <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                    <button
                        type="button"
                        onClick={decrementar}
                        className="px-4 py-2 hover:bg-gray-100 text-gray-700 font-bold transition-colors"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-semibold min-w-[45px] text-center">
                        {cantidad}
                    </span>
                    <button
                        type="button"
                        onClick={incrementar}
                        className="px-4 py-2 hover:bg-gray-100 text-gray-700 font-bold transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Precio Total acumulado dinámicamente */}
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="font-bold text-green-800 text-base">Total estimado:</span>
                <span className="text-3xl font-black text-green-700">{precioTotal}€</span>
            </div>

            {/* Botón de compra */}
            <button
                type="button"
                onClick={añadirAlCarrito}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
            >
                Añadir al carrito
            </button>
        </div>
    );
}