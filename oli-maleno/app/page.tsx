'use client'
import { Hero } from "./components/Hero";
import InfiniteMarquee from "./components/InfiniteMarquee";
import { Menu } from "./components/Menu";
import { Productos } from "./components/Productos";
// import { FAQ } from "./components/FAQ";



export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white">
      <Menu />
      <main className="flex flex-col gap-8 flex-1 pt-40 w-full overflow-hidden">

        {/* HERO con nav en contenedores */}
        <div className="flex flex-col md:flex-row md:mx-8 md:gap-4 items-center ">
          <Hero />
        </div>
        <InfiniteMarquee />
        <div className="h-fit bg-amber-50 flex flex-col gap-10 px-4 md:p-12">
          <h2 className="text-2xl text-center md:text-start">descubre nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center">
            <Productos />
            <Productos />
            <Productos />
            <Productos />
            <Productos />
            <Productos />
          </div>
        </div>
      </main>
    </div>
  );
}
