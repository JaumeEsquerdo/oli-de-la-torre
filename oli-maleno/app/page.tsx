'use client'
import { AnimatedCard } from "./components/AnimatedCard";
import { Benefits } from "./components/Benefits";
import { Hero } from "./components/Hero";
import InfiniteMarquee from "./components/InfiniteMarquee";
import { Menu } from "./components/Menu";
import { Productos } from "./components/Productos";
import { motion } from 'framer-motion'
import { ShoppingCart } from "lucide-react";
import { FAQ } from "./components/FAQ";
import ContactForm from "./components/Contacto";
import { Footer } from "./components/Footer";



export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
      <header className="flex justify-between pt-10 pl-10 pr-26 w-full relative items-center">
        <div className="flex flex-col items-center">
          <span className="text-xl">OLI DE LA TORRE</span>
          <span className="font-light">X</span>
          <span className="text-xl">OLI MALENO</span>
        </div>

        <motion.div layout style={{ display: "flex", alignItems: "center" }}>
          <ShoppingCart size={25} strokeWidth={2} />
        </motion.div>
        <Menu />

      </header>
      <main className="flex flex-col gap-8 flex-1 pt-8 w-full">

        {/* HERO con nav en contenedores */}
        <div className="flex flex-col md:flex-row md:mx-8 md:gap-4 items-center ">
          <Hero />
        </div>
        <InfiniteMarquee />
        <div className="h-fit bg-amber-50 flex flex-col gap-10 px-4 md:p-12">
          <h2 className="text-2xl text-center md:text-start">descubre nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-start">
            <Productos />
            <Productos />
            <Productos />
            <Productos />
            <Productos />
            <Productos />
          </div>
        </div>

        {/* seccion BENEFICIOS */}

        <Benefits />

        {/* seccion TARJETA ANIMADA  */}
        <AnimatedCard />
        {/* seccion FAQ */}
        <div className="h-fit w-full bg-amber-50 flex flex-col md:flex-row justify-between px-4 md:p-12">
          <h2 className="text-2xl text-center md:text-start">descubre nuestros productos</h2>
          <FAQ />
        </div>
        {/* seccion FORMULARIO */}
        <div className="px-4 md:p-12 flex justify-start w-full">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
