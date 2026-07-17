'use client'
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

/* ================= TYPES & INTERFACES ================= */

interface Logo {
    src: string;
    alt: string;
    nombre?: string;
}

type Product = {
    slug: string;
    id: string;
    titulo: string;
    subtitulo: string;
    precio: string;
    logos: Logo[];
}

interface SlideProductsProps {
    recomendados: Product[];
}

/* ================= COMPONENTE PRINCIPAL ================= */

export const SlideProducts = ({ recomendados }: SlideProductsProps) => {
    // Referencia al contenedor que tiene el scroll horizontal
    const containerRef = useRef<HTMLDivElement>(null);

    // Bandera para saber si el usuario está arrastrando activamente. 
    // Evita que al soltar el clic tras un arrastre, se active el enlace <Link> por error.
    const [isDragging, setIsDragging] = useState(false);

    // Estados booleanos para mostrar u ocultar los degradados de sombra en los laterales
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    /**
     * Calcula en tiempo real si el contenedor ha llegado al inicio o al final del scroll.
     * Sirve para ocultar o mostrar los degradados (sombras) laterales de forma dinámica.
     */
    const checkScrollLimits = () => {
        const container = containerRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;

        // Si el contenido total es menor o igual al ancho de la pantalla, no hay scroll (ocultamos ambas sombras)
        if (scrollWidth <= clientWidth) {
            setShowLeft(false);
            setShowRight(false);
            return;
        }

        // Muestra la sombra izquierda si nos hemos desplazado más de 28px desde el inicio
        setShowLeft(scrollLeft > 28);

        // Muestra la sombra derecha si aún queda espacio por scrollar antes de llegar al final (margen de 28px)
        setShowRight(scrollLeft < (scrollWidth - clientWidth - 28));
    };

    /**
     * EFECTO PRINCIPAL: Gestiona toda la física manual de arrastrar con el ratón (Drag-to-Scroll)
     * e integra observadores de redimensionado.
     */
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDown = false;      // ¿Está el botón del ratón pulsado?
        let startX: number;      // Posición X inicial donde el usuario hace clic
        let scrollLeft: number;  // Posición de scroll horizontal inicial del contenedor

        /**
         * 1. Al hacer clic (MouseDown)
         */
        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            setIsDragging(false); // Reiniciamos el estado de arrastre

            // Desactivamos el snapping (imán) y el scroll suave nativo.
            // Si no lo hacemos, el navegador intentará clavar las tarjetas mientras arrastras,
            // provocando tirones muy molestos.
            container.style.scrollSnapType = 'none';
            container.style.scrollBehavior = 'auto';

            // Calculamos la posición del clic restando el offset del contenedor
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        /**
         * 2. Si el ratón sale del contenedor (MouseLeave)
         */
        const onMouseLeave = () => {
            if (!isDown) return;
            isDown = false;

            // Si el usuario saca el cursor bruscamente, reactivamos el comportamiento nativo
            // para que las tarjetas se re-ajusten a sus posiciones (snap) limpiamente.
            container.style.scrollSnapType = 'x mandatory';
            container.style.scrollBehavior = 'smooth';
        };

        /**
         * 3. Al soltar el clic (MouseUp)
         */
        const onMouseUp = () => {
            if (!isDown) return;
            isDown = false;

            // Reactivamos el imán de CSS para que, al soltar, la tarjeta más cercana
            // se encuadre y deslice automáticamente a su sitio de forma suave.
            container.style.scrollSnapType = 'x mandatory';
            container.style.scrollBehavior = 'smooth';

            // Un pequeño retraso de seguridad antes de desactivar isDragging.
            // Esto asegura que el evento 'click' del enlace <Link> sepa que venía de un arrastre
            // y no abra la página del producto por accidente.
            setTimeout(() => setIsDragging(false), 50);
        };

        /**
         * 4. Al mover el ratón (MouseMove)
         */
        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return; // Si no hay clic pulsado, no hacemos nada

            e.preventDefault(); // Evitamos selección de texto o arrastres por defecto del navegador
            setIsDragging(true); // Confirmamos que el usuario está arrastrando activamente

            // Posición actual del cursor
            const x = e.pageX - container.offsetLeft;

            // Calculamos la distancia recorrida multiplicada por un factor de velocidad (1.5)
            const walk = (x - startX) * 1.5;

            // Aplicamos el nuevo scroll al contenedor
            container.scrollLeft = scrollLeft - walk;
        };

        // --- Suscribir los listeners de ratón al contenedor ---
        container.addEventListener('mousedown', onMouseDown);
        container.addEventListener('mouseleave', onMouseLeave);
        container.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);

        // --- Control de redimensionado y scroll normal ---
        // Comprobación inicial con un ligero retraso para asegurar que el DOM se ha pintado
        const timeoutId = setTimeout(checkScrollLimits, 100);

        // Comprobar límites al hacer scroll manual (con trackpad, shift+wheel, etc.)
        container.addEventListener("scroll", checkScrollLimits);

        // ResizeObserver: Si la ventana cambia de tamaño, recalculamos si hacen falta sombras o no
        const resizeObserver = new ResizeObserver(() => checkScrollLimits());
        resizeObserver.observe(container);

        // --- Limpieza de eventos al desmontar el componente ---
        return () => {
            clearTimeout(timeoutId);
            container.removeEventListener('mousedown', onMouseDown);
            container.removeEventListener('mouseleave', onMouseLeave);
            container.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener("scroll", checkScrollLimits);
            resizeObserver.disconnect();
        };
    }, [recomendados]);

    // Si no hay productos que mostrar, no renderizamos nada
    if (!recomendados || recomendados.length === 0) return null;

    return (
        <>
            {recomendados.length > 0 && (
                <div className="w-full px-8 md:px-12 py-16 flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-[#1d1d1d]">Otros productos que te recomendamos</h3>

                    {/* Contenedor relativo para posicionar los degradados absolutos por encima */}
                    <div className="w-full relative">

                        {/* Sombras difuminadas animadas con Framer Motion */}
                        <AnimatePresence>
                            {showLeft && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-0 top-0 bottom-0 w-16  bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"
                                />
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {showRight && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"
                                />
                            )}
                        </AnimatePresence>

                        {/* 
                          Contenedor deslizable real.
                          - snap-x snap-mandatory: Clava las tarjetas en los bordes al parar el scroll.
                          - scrollbar-none / style scrollbarWidth: Oculta la barra de scroll nativa pero mantiene su funcionalidad.
                          - select-none / cursor-grab: Estilos para que el texto no se seleccione al arrastrar y cambie el cursor a una mano.
                        */}
                        <div
                            ref={containerRef}
                            className="w-full gap-6 flex overflow-x-auto snap-x snap-mandatory scrollbar-none select-none cursor-grab active:cursor-grabbing scroll-smooth"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {/* Flex Wrapper interno */}
                            <div className="flex gap-6 ">
                                {recomendados.map((item) => (
                                    <Link
                                        href={`/producto/${item.slug}`}
                                        key={item.id}
                                        // Evita que el navegador intente arrastrar la tarjeta como si fuera una "imagen fantasma"
                                        onDragStart={(e) => e.preventDefault()}
                                        // CLAVE: Si el usuario estaba arrastrando la pantalla, cancelamos la redirección del Link al soltar
                                        onClick={(e) => isDragging && e.preventDefault()}
                                        className="w-[120px] md:w-[220px] shrink-0 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between"
                                    >
                                        {/* Placeholder visual de la imagen del producto */}
                                        <div className="w-full h-40 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-gray-400">
                                            <span>[Imagen {item.subtitulo}]</span>
                                        </div>

                                        {/* Información de la tarjeta */}
                                        <div>
                                            <h4 className="font-bold text-textColor text-md">{item.titulo}</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-gray-500">Tamaño: {item.subtitulo}</span>
                                                <span className="font-bold text-textColor">{item.precio}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}