

import { ArrowUpRight } from 'lucide-react';


export const NavigationBanners = () => {
    // const [activeBanner, setActiveBanner] = useState<string | null>(null);

    return (
        <div className="w-full flex mt-26 relative" >
            {/* div para decorar los espacios q dejan los bordes redondeados cuando se juanta con el color del footer */}
            <div className="absolute bottom-0 h-80 right-0 w-full bg-white z-0" />
            <div className=" group relative w-3/5 h-160 bg-green-500 rounded-4xl z-10 cursor-pointer"

            >
                <h3 className="text-4xl text-white absolute top-10 left-10 pointer-events-none">beneficios de nuestro aceite natural y
                    lo que nos hace diferente sobre el resto</h3>
                <div className={`absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm 
                    animate-[movimientoInfinitoBtn_1.2s_ease-in-out_infinite] 
        [animation-play-state:paused] 
        group-hover:[animation-play-state:running] 
        transition-all duration-500 ease-in-out
        pointer-events-none 
                    `}>
                    <ArrowUpRight className="w-6 h-6 text-green-500 stroke-[1.5]" />
                </div>
            </div>
            <div className="group relative w-2/5 h-160 bg-amber-400 rounded-4xl z-10 cursor-pointer"

            >
                <h3 className="text-4xl text-white absolute top-10 left-10">preguntas y respuestas más habituales sobre el aceite y el envío</h3>
                <div className={`absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm
                     animate-[movimientoInfinitoBtn_1.2s_ease-in-out_infinite] 
        [animation-play-state:paused] 
        group-hover:[animation-play-state:running] 
        transition-all duration-500 ease-in-out pointer-events-none`}>
                    <ArrowUpRight className="w-6 h-6 text-green-500 stroke-[1.5]" />
                </div>
            </div>
        </div>
    );
}

