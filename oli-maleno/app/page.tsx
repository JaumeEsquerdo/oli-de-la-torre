'use client'
import { Hero } from "./components/Hero";
import InfiniteMarquee from "./components/InfiniteMarquee";
import { Menu } from "./components/Menu";
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
        <div className="h-1000 bg-amber-50"></div>
      </main>
    </div>
  );
}
