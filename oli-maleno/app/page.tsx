'use client'
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
// import { FAQ } from "./components/FAQ";



export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white">
      <Menu />
      <main className="flex-1 pt-40  w-full">

        {/* HERO con nav en contenedores */}
        <div className="flex flex-col md:flex-row md:mx-8 md:gap-4 items-center">
          <Hero />
        </div>
      </main>
    </div>
  );
}
