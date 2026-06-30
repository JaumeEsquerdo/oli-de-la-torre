import { ProductCard } from "./ProductCard";

interface Producto {
    id: string;
    nombre: string;
    precio: string;
}


export const Productos = () => {

    const misProductos: Producto[] = [
        { id: 'botella-5l', nombre: 'Botella de aceite de oliva virgen extra', precio: '29€' },
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

