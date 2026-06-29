interface Producto {
    titulo: string;
    desc: string;
    precio: string;
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
        'camisa-azul': { titulo: 'Camisa Azul Marina', desc: 'Algodón 100% orgánico.', precio: '29€' },
        'pantalon-negro': { titulo: 'Pantalón Negro Slim', desc: 'Vaquero elástico y cómodo.', precio: '49€' },
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
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-4xl font-extrabold mb-4">{producto.titulo}</h1>
            <span className="text-xl text-green-600 font-semibold">{producto.precio}</span>
            <p className="mt-4 text-gray-600">{producto.desc}</p>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                Comprar ahora
            </button>
        </div>
    );
}