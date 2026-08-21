'use client'

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';



const Nosotros = () => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
                <Header />
                <main className="flex flex-col gap-16 w-full px-4 md:max-w-3/5 md:gap-36 flex-1 pt-24 md:py-36">
                    <h1 className='flex flex-col gap-6 '><span className='text-5xl md:text-8xl text-[#666]'>POLÍTICA</span> <span className='text-5xl md:text-8xl'>PRIVACIDAD</span></h1>
                    <div className="flex flex-col md:gap-20 w-full lg:max-w-3/5 items-center">

                        <ul className='flex flex-col gap-8'>
                            <li className='flex flex-col gap-4'>
                                <strong>1. Responsable del sitio web</strong>

                                Esta página web es un portal informativo y de contacto sobre el cultivo tradicional de nuestros olivos en Villajoyosa y Relleu.

                            </li>
                            <li className='flex flex-col gap-4'>
                                <strong>2. Uso de los datos</strong>

                                Si te pones en contacto con nosotros a través del formulario, correo o teléfono, solo utilizaremos tus datos de contacto (nombre, teléfono o email) para responder a tu consulta o gestionar la información que nos pidas. No cederemos tus datos a terceros.

                            </li>
                            <li className='flex flex-col gap-4'>
                                <strong> 3. Tus derechos</strong>

                                En cualquier momento puedes solicitar la eliminación o corrección de tus datos de contacto escribiéndonos por correo electrónico.
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Nosotros;