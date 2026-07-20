'use client'

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';



const Nosotros = () => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
                <Header />

                <main className="flex flex-col gap-16 md:gap-36 max-w-11/12 md:max-w-3/5 w-full flex-1 pt-24 md:py-36">
                    <h1 className='flex flex-col gap-6'><span className='text-5xl md:text-8xl text-[#666]'>TÉRMINOS Y</span> <span className='text-5xl md:text-8xl'>CONDICIONES</span></h1>
                    <div className="flex flex-col md:gap-20 max-w-3/5 mx-auto items-center">
                        texto condiciones
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Nosotros;