import { motion, useScroll, useTransform, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function InfiniteMarquee() {

  const containerRef = useRef<HTMLDivElement>(null);

  // 1. El valor numérico base de la animación
  const baseX = useMotionValue(0);

  // 2. Escuchamos el scroll de la página
  const { scrollYProgress } = useScroll();

  // 3. Transformamos el scroll en velocidad extra
  const scrollVelocity = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // 4. Transformamos el número de baseX a string con un "%"
  // useTransform acepta una función como tercer argumento para formatear el valor
  const xPercent = useTransform(baseX, (v) => `${v}%`);

  // 5. El bucle de animación
  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const baseSpeed = 0.012; // velocidad base

    // Sumamos el movimiento constante + el empuje del scroll
    let newX = baseX.get() - baseSpeed + scrollVelocity.get() * 0.0026;

    // Loop infinito al llegar al -50%
    if (newX <= -50) {
      newX = 0;
    }

    baseX.set(newX);
  });

  // El texto que quieres que se repita
  const textInfinite = [
    {
      title: 'aceite oliva virgen',
      color: '#000'
    },
    {
      title: 'ecológico',
      color: '#666'
    },
    {
      title: 'producción casera',
      color: '#000'
    },
    {
      title: 'cooperativa',
      color: '#666'
    },
    {
      title: 'Alicante',
      color: '#000'
    },
    {
      title: 'compromiso medio ambiental',
      color: '#666'
    },
    {
      title: 'pueblo',
      color: '#000'
    },
    {
      title: 'Torremanzanas',
      color: '#666'
    },

  ]

  return (
    <div

      className="w-full overflow-hidden py-3 whitespace-nowrap flex">
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        // Mapeamos el valor numérico de baseX a porcentaje de forma dinámica
        style={{ x: xPercent }}
      >
        <div className="flex gap-6">
          {/* Renderizamos el texto varias veces para asegurar que llene la pantalla y tape los huecos */}
          {
            textInfinite.map((text, i) => (
              <span key={i} className={`text-6xl font-bold`} style={{ color: text.color }}>{text.title}</span>

            ))
          }
        </div>
        {/* BLOQUE 2: Duplicado (Escondido para accesibilidad con aria-hidden) */}
        <div className="flex gap-6" aria-hidden="true">
          {
            textInfinite.map((text, i) => (
              <span key={i} className={`text-6xl font-bold`} style={{ color: text.color }}>{text.title}</span>

            ))
          }
        </div>

      </motion.div>
    </div >
  );
}