import { create } from "zustand";
import { persist } from "zustand/middleware";

// Definimos la estructura del item dentro del carrito
export interface CartItem {
  id: string;
  titulo: string;
  subtitulo: string;
  precio: string;
  precioNumerico: number;
  cantidad: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (producto: Omit<CartItem, "cantidad">, cantidad: number) => void;
  clearCart: () => void;
}

// NOTA MENTAL: Todo este objeto que definimos abajo (items, addToCart, clearCart)
// es lo que Zustand agrupa internamente bajo el nombre de 'state'.
export const useCartStore = create<CartState>()(
  // El middleware 'persist' guarda el carrito en localStorage automáticamente
  persist(
    (set) => ({
      items: [],

      addToCart: (producto, cantidad) =>
        // Aquí Zustand nos pasa ese 'state' global para poder leer 'state.items'
        set((state) => {
          // Comprobamos si el producto ya existe en el carrito usando su ID
          const itemExiste = state.items.find(
            (item) => item.id === producto.id,
          );

          if (itemExiste) {
            // Si ya existe, sumamos la nueva cantidad a la anterior
            return {
              items: state.items.map((item) =>
                item.id === producto.id
                  ? { ...item, cantidad: item.cantidad + cantidad }
                  : item,
              ),
            };
          }

          // Si es nuevo, lo añadimos al array del carrito
          return { items: [...state.items, { ...producto, cantidad }] };
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "carrito-ecommerce", // Nombre de la clave en localStorage
    },
  ),
);
