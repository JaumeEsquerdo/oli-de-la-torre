
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import SelectorCantidadPrecio from "@/app/components/SelectorCantidadPrecio";
import { ul } from "framer-motion/client";
import { Leaf, Heart, Container, GlassWater, LucideIcon } from 'lucide-react';
import Image from "next/image";

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

interface PaginaProps {
    params: Promise<{ id: string }>;
}


const misIconos: Record<string, LucideIcon> = {
    Leaf: Leaf,
    Heart: Heart,
    Container: Container,
    GlassWater: GlassWater
};

// 1. función para simular que buscas los datos de ese producto específico
async function obtenerDetalleProducto(id: string): Promise<Producto | null> {
    // simulación:
    // const res = await fetch(`https://api.ejemplo.com/productos/${id}`)
    // return res.json()

    const baseDeDatos: Record<string, Producto> = {
        'botella-5l': {
            id: '1', titulo: 'Botella grande de aceite de oliva virgen', subtitulo: '5l', precio: '29€', logos: [
                { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural
                { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud
                { nombre: 'Container', src: '', alt: 'Formato Familiar 5L' }    // Formato: Grande
            ]
        },
        'botella-2l': {
            id: '2', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '2l', precio: '49€', logos: [
                { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
                { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
                { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
            ]
        },
    };

    return baseDeDatos[id] || null;
}

// 2. El componente de la página
export default async function DetalleProductoPage({ params }: PaginaProps) {
    // Desestructuramos el "id" que viene directamente de la URL
    const { id } = await params;

    // Buscamos los datos de ese producto concreto
    const producto = await obtenerDetalleProducto(id);

    // Si el usuario escribe una URL que no existe
    if (!producto) {
        return <div className="p-8 font-bold">Lo sentimos, ese producto no existe.</div>;
    }

    // Si existe la búsqueda
    return (
        <>
            <div className="bg-green-100 w-full h-full">
                <Header />
                <div className="w-full py-12 px-8 md:py-26 md:px-12 flex gap-20 justify-between">
                    {/* section left */}
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-col gap-2 justify-center items-center max-w-xl">
                            <h1 className="text-4xl font-extrabold mb-4 text-green-900 text-center">{producto.titulo}</h1>
                            <h2 className="text-4xl font-extrabold mb-4 text-green-900">{producto.subtitulo}</h2>
                        </div>
                        <span className="text-xl text-green-600 font-semibold">{producto.precio}</span>

                        <div className="flex gap-8">

                            {/* iconos beneficios producto */}
                            <ul>
                                {producto.logos.map((logo, i) => {

                                    const IconoComponente = logo.nombre ? misIconos[logo.nombre] : null;

                                    return (

                                        <li key={i} className="flex items-center gap-2" title={logo.alt}>

                                            {IconoComponente ? (
                                                <IconoComponente className="w-6 h-6 text-emerald-600" />
                                            ) : (
                                                <span>Icono no encontrado</span>
                                            )}

                                            <span className="text-sm text-gray-600">{logo.alt}</span>
                                        </li>)
                                })}
                            </ul>
                        </div>

                        <div>
                            <SelectorCantidadPrecio producto={producto} />
                        </div>
                    </div>

                    {/* section right */}
                    <div className="h-200 w-full bg-amber-400 rounded-4xl">
                        {/* <Image sizes="" fill src={''} alt="" /> */}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}