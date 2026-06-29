import { ProductCard } from "./ProductCard";

interface Producto {
    id: string;
    nombre: string;
    precio: string;
}


export const Productos = () => {

    const misProductos: Producto[] = [
        { id: 'camisa-azul', nombre: 'Camisa Azul', precio: '29€' },
        { id: 'pantalon-negro', nombre: 'Pantalón Negro', precio: '49€' }
    ];

    return (
        <>
            {misProductos.map((prod) => (
                <ProductCard key={prod.id} prod={prod} />
            ))}

        </>
    );
}

