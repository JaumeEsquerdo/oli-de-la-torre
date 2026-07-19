'use client'
import { AnimatedCard } from "./components/AnimatedCard";
import { Benefits } from "./components/Benefits";
import { Hero } from "./components/Hero";
import InfiniteMarquee from "./components/InfiniteMarquee";
import { Productos } from "./components/Productos";
import { Header } from '@/app/components/Header';
import { FAQ } from "./components/FAQ";
import ContactForm from "./components/Contacto";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";


const maskEntranceVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1, // Cubre toda la pantalla inicialmente
    z: 0, // Está en el plano frontal
    rotateX: 0,
    rotateY: 0,
    borderRadius: "0px",
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8, // Se hace diminuto en el centro
    z: -500,
    rotateX: 25, // Pequeña rotación para acentuar la 3D
    rotateY: -20,
    borderRadius: "100px",
    transition: {
      duration: 3.2, // Duración larga
      ease: [0.22, 1, 0.36, 1], // Cubic-bezier suave de salida
      opacity: { duration: 1, delay: 1.2 }
    },
  },
};

export default function Home() {

  const [showEntrance, setShowEntrance] = useState(false);

  useEffect(() => {
    //comprobación de si ha visto la entrada animada
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    // Definimos cuánto tiempo se ve la imagen fija antes de encogerse
    if (!hasSeenIntro) {
      // Usamos requestAnimationFrame para diferir el cambio de estado al siguiente frame.
      // Esto evita que React lo considere un "cascading render" síncrono del render actual.
      requestAnimationFrame(() => {
        setShowEntrance(true);
      });

      const timer = setTimeout(() => {
        setShowEntrance(false);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);



  return (
    <>
      {/* capa del CONTENIDO DE LA WEB */}
      <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
        <Header />
        <main className="flex flex-col gap-16 md:gap-20 flex-1 pt-16 md:pt-20 w-full">

          {/* HERO con nav en contenedores */}
          <div className="flex flex-col md:flex-row md:mx-12 md:gap-4 items-center ">
            <Hero />
          </div>
          <InfiniteMarquee />
          <div className="h-fit flex flex-col gap-10 px-4 md:px-12 md:py-16">
            <h2 className="text-2xl text-center md:text-start">descubre nuestros productos</h2>
            <div id="productos" className="scroll-mt-46 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center md:place-items-start">
              <Productos />
            </div>
          </div>

          {/* seccion BENEFICIOS */}

          <Benefits />

          {/* seccion TARJETA ANIMADA  */}
          <AnimatedCard />
          {/* seccion FAQ */}
          <div id="preguntas" className="scroll-mt-46 h-fit w-full flex flex-col-reverse gap-8 md:flex-row justify-between px-4 md:p-12">
            <div className="hidden md:inline-block bg-amber-600 w-full md:w-1/2 h-120 relative rounded-4xl"></div>
            <div className="relative flex flex-col w-full md:w-1/2 justify-between md:items-end gap-10">
              <h2 className="text-2xl text-center md:text-start">preguntas recurrentes</h2>
              {/* ponemos un top-20 para saltar al h2 y sumarle 40px de separación*/}
              <div className="relative md:absolute md:right-0 md:top-20 w-full">
                <FAQ />
              </div>
            </div>
          </div>
          {/* seccion FORMULARIO */}
          <div className="px-4 md:px-12 md:py-16 flex justify-start w-full">
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>


      {/* CAPA 2: MÁSCARA CINEMÁTICA (Delante) */}
      <AnimatePresence mode="wait">
        {showEntrance && (
          <motion.div
            className="entrada-container"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={maskEntranceVariants}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9999, // Superpuesto a todo
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              backgroundColor: "#1d1d1d",
              transformPerspective: "1200px",
              backfaceVisibility: "hidden",
            }}
          >
            {/* LA IMAGEN QUE ACTÚA DE MÁSCARA */}
            {/* <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
              /> */}

            {/* Un overlay sobre la imagen */}
            <motion.div
              exit={{ opacity: 0, transition: { duration: 1.2 } }}
              style={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }} className="flex flex-col gap-2 pointer-events-none">
                <span>OLI DE LA TORRE</span> <span>X</span> <span>OLI MALENO</span>
              </h1>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
      {/* </div > */}
    </>
  );
}
