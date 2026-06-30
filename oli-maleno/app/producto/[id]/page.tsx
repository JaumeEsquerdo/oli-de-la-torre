
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
    nombre?: string; // Por si quieres poner un texto abajo del logo
}

interface Producto {
    titulo: string;
    subtitulo: string;
    precio: string;
    logos: Logo[]
}

interface PaginaProps {
    params: Promise<{ id: string }>;
}

// 1. función para simular que buscas los datos de ese producto específico
async function obtenerDetalleProducto(id: string): Promise<Producto | null> {
    // simulación:
    // const res = await fetch(`https://api.ejemplo.com/productos/${id}`)
    // return res.json()

    const baseDeDatos: Record<string, Producto> = {
        'botella-5l': { titulo: 'Botella de aceite de oliva virgen extra', subtitulo: '5l', precio: '29€', logos: [{ nombre: 'logo', src: '', alt: ' ' }] },
        'pantalon-negro': { titulo: 'Pantalón Negro Slim', subtitulo: '5l', precio: '49€', logos: [{ nombre: 'logo', src: '', alt: ' ' }] },
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
                            logos
                        </div>

                        <span>cantidad:</span>

                        <button className="mt-6 w-full bg-white text-2xl text-green-900 py-3 rounded-2xl font-medium max-w-md">
                            Añadir al carrito
                        </button>
                    </div>

                    {/* section right */}
                    <div className="h-200 w-full bg-amber-400 rounded-4xl">
                        <Image sizes="" fill src={''} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}