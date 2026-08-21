'use client'

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';



const Nosotros = () => {
    return (
        <>
            <div className="flex flex-col flex-1 items-center justify-center bg-white overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-center text-[#666]">envíos gratuitos con pedidos superior a 100€</span>
                <Header />

                <main className="flex flex-col gap-16 md:gap-36 md:max-w-3/5 w-full px-4 flex-1 pt-24 md:py-36">
                    <h1 className='flex flex-col gap-6'><span className='text-5xl md:text-8xl text-[#666]'>AVISO LEGAL Y </span> <span className='text-5xl md:text-8xl'>CONDICIONES DE USO</span></h1>
                    <div className="flex flex-col md:gap-20 w-full lg:max-w-3/5 items-center">
                        <ul className='flex flex-col gap-8 w-full'>
                            <li className='flex flex-col gap-4 '>
                                <strong>1. Información general</strong>

                                La presente página web tiene un carácter puramente informativo y divulgativo. Su objetivo es dar a conocer la historia, el proceso de cultivo y la tradición olivarera de nuestras fincas familiares situadas en la comarca de la Marina Baixa, así como servir de canal de contacto directo.

                            </li>
                            <li className='flex flex-col gap-4'>
                                <strong>2. Reserva y disponibilidad del producto</strong>


                                La presentación del aceite en esta web no constituye una oferta de venta pública ni un contrato formal en línea. Al tratarse de una producción limitada y artesanal ligada a la cosecha anual, cualquier solicitud de información sobre el aceite elaborado en la cooperativa de Torremanzanas (Oli de La Torre) está sujeta a disponibilidad previa y se gestionará de forma personal y privada.

                            </li>
                            <li className='flex flex-col gap-4'>
                                <strong> 3. Exención de responsabilidad</strong>


                                El titular del sitio web no se hace responsable del uso indebido de los contenidos mostrados en la página ni de posibles interrupciones en el servicio web.
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