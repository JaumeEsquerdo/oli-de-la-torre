
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import SelectorCantidadPrecio from "@/app/components/SelectorCantidadPrecio";
import { Leaf, Heart, Container, GlassWater, LucideIcon, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import { FAQ } from "@/app/components/FAQ";
import InfiniteMarquee from "@/app/components/InfiniteMarquee";
import { NavigationBanners } from "@/app/components/NavigationBanners";
import { SlideProducts } from "@/app/components/SlideProducts";



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
    'botella-1l': {
        id: '3', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '1l', precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
    'botella-0.5l': {
        id: '4', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '0.5l', precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
    'pack-botellas-2l': {
        id: '5', titulo: 'Pack de 3 botellas mediana de aceite de oliva virgen', subtitulo: '2l', precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
};

const caracteristicasProductos = [
    { title: 'Formato Familiar', color: '#000' },
    { title: 'Garrafa 5 Litros', color: '#333' },
    { title: 'Botella 2 Litros', color: '#333' },
    { title: 'Ideal para Cocinar', color: '#ebc034' }
];

//  Función para buscar el producto por su ID (la ruta ej: 'botella-5l')
async function obtenerDetalleProducto(id: string): Promise<Producto | null> {
    return baseDeDatos[id] || null;
}

//  Función para traer los recomendados mapeando las llaves del objeto
async function obtenerProductosRecomendados(urlActual: string) {
    // Convertimos el objeto en un array de parejas [slug, producto] y filtramos el actual
    return Object.entries(baseDeDatos)
        .filter(([slug]) => slug !== urlActual)
        .map(([slug, producto]) => ({ ...producto, slug })); // Le inyectamos el slug para el Link
}

//  El componente de la página
export default async function DetalleProductoPage({ params }: PaginaProps) {
    const { id } = await params;


    // Buscamos el producto actual y sus recomendados
    const producto = await obtenerDetalleProducto(id);
    const recomendados = await obtenerProductosRecomendados(id);

    if (!producto) {
        return <div className="p-8 font-bold">Lo sentimos, ese producto no existe.</div>;
    }


    // Si existe la búsqueda
    return (
        <>
            <div className="bg-bgColor w-full h-full ">
                <Header />
                <main className="flex flex-col">

                    <div className="w-full py-12 px-8 md:py-26 md:px-12 gap-20 flex justify-between overflow-hidden">
                        {/* section left */}
                        <div className="flex flex-col flex-1 basis-1/2 min-w-0 items-center gap-8">
                            <div className="flex flex-col gap-2 justify-center items-center max-w-xl">
                                <h1 className="text-4xl font-extrabold mb-4 text-textColor text-center">{producto.titulo}</h1>
                                <h2 className="text-4xl font-extrabold mb-4 text-textColor">{producto.subtitulo}</h2>
                            </div>
                            <div className="flex gap-8">

                                {/* iconos beneficios producto */}
                                <ul className="flex flex-col gap-4">
                                    {producto.logos.map((logo, i) => {

                                        const IconoComponente = logo.nombre ? misIconos[logo.nombre] : null;

                                        return (

                                            <li key={i} className="flex items-center gap-2" title={logo.alt}>

                                                {IconoComponente ? (
                                                    <IconoComponente className="w-6 h-6 text-textColor" />
                                                ) : (
                                                    <span>Icono no encontrado</span>
                                                )}

                                                <span className="text-sm text-gray-600">{logo.alt}</span>
                                            </li>)
                                    })}
                                </ul>
                            </div>

                            {/* Muestra el precio unitario original */}
                            <div className="flex justify-between items-center gap-2">
                                <span className="text-xl text-textColor font-semibold">Precio por unidad:</span>
                                <span className="text-xl font-bold text-textColor">{producto.precio}</span>
                            </div>

                            <div>
                                <SelectorCantidadPrecio producto={producto} />
                            </div>


                            <SlideProducts recomendados={recomendados} />



                            <div>
                                <div className="h-100">

                                    texto desrciptivo embalaje
                                </div>

                                {/* faqs */}
                                <div className="w-100">

                                    <FAQ bgColor="#e1efe3" color="#15472b" />
                                </div>
                            </div>
                        </div>

                        {/* section right */}
                        <div className="sticky top-12 h-200 basis-1/2 flex-1 bg-amber-400 rounded-4xl">
                            {/* <Image sizes="" fill src={''} alt="" /> */}
                        </div>

                    </div>

                    {/* fuera de la estructura de producto */}
                    <InfiniteMarquee textosNuevos={caracteristicasProductos} />

                    <NavigationBanners />
                </main >
            </div >
            <Footer />
        </>
    );
}


