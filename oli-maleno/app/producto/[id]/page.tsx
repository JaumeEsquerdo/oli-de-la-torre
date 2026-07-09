
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import SelectorCantidadPrecio from "@/app/components/SelectorCantidadPrecio";
import Link from "next/link";
import { Leaf, Heart, Container, GlassWater, LucideIcon, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import { FAQ } from "@/app/components/FAQ";
import InfiniteMarquee from "@/app/components/InfiniteMarquee";
import { NavigationBanners } from "@/app/components/NavigationBanners";


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

                        {/* ================= SECCIÓN MINI SLIDE DE RECOMENDADOS ================= */}
                        {recomendados.length > 0 && (
                            <div className="w-full px-8 md:px-12 pb-16">
                                <h3 className="text-2xl font-bold text-green-900 mb-6">Otros productos recomendados</h3>

                                {/* Contenedor con scroll horizontal nativo y suave */}
                                <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
                                    {recomendados.map((item) => (
                                        <Link
                                            href={`/producto/${item.slug}`} // Modifica "/tu-ruta-de-productos/" por como tengas tus carpetas
                                            key={item.id}
                                            className="min-w-[260px] md:min-w-[300px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between"
                                        >
                                            <div className="w-full h-40 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-gray-400">
                                                <span>[Imagen {item.subtitulo}]</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-900 text-md truncate">{item.titulo}</h4>
                                                <div className="flex justify-between items-center mt-2">
                                                    <span className="text-xs text-gray-500">Tamaño: {item.subtitulo}</span>
                                                    <span className="font-bold text-emerald-600">{item.precio}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <div className="h-100">

                                texto desrciptivo embalaje
                            </div>

                            {/* faqs */}
                            <div className="w-100">

                                <FAQ />
                            </div>
                        </div>
                    </div>

                    {/* section right */}
                    <div className="sticky top-12 h-200 w-full bg-amber-400 rounded-4xl">
                        {/* <Image sizes="" fill src={''} alt="" /> */}
                    </div>
                </div>

                {/* fuera de la estructura de producto */}
                <InfiniteMarquee textosNuevos={caracteristicasProductos} />

                <NavigationBanners />
            </div >
            <Footer />
        </>
    );
}


