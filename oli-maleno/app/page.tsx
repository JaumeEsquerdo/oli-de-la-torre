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
      <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
      <header className="flex justify-between pt-20 md:pt-10 px-8 md:pl-12 md:pr-28 w-full relative items-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xl">OLI DE LA TORRE</span>
          <span className="font-light">X</span>
          <span className="text-xl">OLI MALENO</span>
        </div>

        <div className="flex w-fit  justify-end items-center gap-6 md:gap-12">
          <motion.div layout style={{ display: "flex", alignItems: "center", width: 'full' }}>
            <ShoppingCart size={25} strokeWidth={2} />
          </motion.div>
          <Menu />
        </div>

      </header>
      <main className="flex flex-col gap-16 md:gap-20 flex-1 pt-8 md:pt-20 w-full">

        {/* HERO con nav en contenedores */}
        <div className="flex flex-col md:flex-row md:mx-12 md:gap-4 items-center ">
          <Hero />
        </div>
        <InfiniteMarquee />
        <div className="h-fit flex flex-col gap-10 px-4 md:px-12 md:py-16">
          <h2 className="text-2xl text-center md:text-start">descubre nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center md:place-items-start">
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
        <div className="h-fit w-full flex flex-col-reverse gap-8 md:flex-row justify-between px-4 md:p-12">
          <div className="inline-block bg-amber-600 w-full md:w-1/2 h-120 relative rounded-4xl"></div>
          <div className="flex flex-col justify-between gap-10">
            <h2 className="text-2xl text-center md:text-start">preguntas recurrentes</h2>
            <FAQ />
          </div>
        </div>
        {/* seccion FORMULARIO */}
        <div className="px-4 md:px-12 md:py-16 flex justify-start w-full">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
