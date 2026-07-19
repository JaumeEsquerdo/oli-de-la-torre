
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import Image from "next/image";
import InfiniteMarquee from "@/app/components/InfiniteMarquee";
import { NavigationBanners } from "@/app/components/NavigationBanners";
import ScrollToTop from "@/app/components/ScrollToTop";
import { SectionRightProduct } from "@/app/components/SectionRightProduct";
import { SectionLeftProduct } from "@/app/components/SectionLeftProduct";



export interface Logo {
    src: string;
    alt: string;
    nombre?: string; // Por si quieres poner un texto abajo del logo
}

export interface Producto {
    id: string;
    titulo: string;
    subtitulo: string;
    precio: string;
    bg: string,
    logos: Logo[]
}

export interface ProductoRecomendado extends Producto {
    slug: string;
}

interface PaginaProps {
    params: Promise<{ id: string }>;
}




const baseDeDatos: Record<string, Producto> = {
    'botella-5l': {
        id: '1', titulo: 'Botella grande de aceite de oliva virgen', subtitulo: '5l', bg: "#e1efe3", precio: '29€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud
            { nombre: 'Container', src: '', alt: 'Formato Familiar 5L' }    // Formato: Grande
        ]
    },
    'botella-2l': {
        id: '2', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '2l', bg: "#f3f4f6 ", precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
    'botella-1l': {
        id: '3', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '1l', bg: "#f3f4f6 ", precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
    'botella-0.5l': {
        id: '4', titulo: 'Botella mediana de aceite de oliva virgen', subtitulo: '0.5l', bg: "#e1efe3", precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
    'pack-botellas-2l': {
        id: '5', titulo: 'Pack de 3 botellas mediana de aceite de oliva virgen', subtitulo: '2l', bg: "#f3f4f6 ", precio: '49€', logos: [
            { nombre: 'Leaf', src: '', alt: '100% Natural de Olivar' },      // Propiedad: Natural (Igual)
            { nombre: 'Heart', src: '', alt: 'Saludable / Cardio' },        // Propiedad: Salud (Igual)
            { nombre: 'GlassWater', src: '', alt: 'Formato Estándar 2L' }        // Formato: Mediano (Cambia)
        ]
    },
};

const caracteristicasProductos = [
    { title: 'Formato Familiar', color: '#15472b' },
    { title: 'Garrafa 5 Litros', color: '#5B9675' },
    { title: 'Botella 2 Litros', color: '#15472b' },
    { title: 'Ideal para Cocinar', color: '#5B9675' },
    { title: 'Botella 2 Litros', color: '#15472b' },
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
            {/* componente para al cambiar de params la página aparezca desde el top */}
            <ScrollToTop />

            <div
                style={{ backgroundColor: producto.bg }}
                className={`w-full h-full`}>
                <Header />
                <main className="flex flex-col">

                    <div className="w-full py-12 px-8 md:py-26 md:px-12 gap-20 flex justify-between">
                        {/* section left */}
                        <SectionLeftProduct producto={producto} recomendados={recomendados} />

                        {/* section right */}
                        <SectionRightProduct />

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


