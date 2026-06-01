// app/contacto/page.tsx
'use client'

import { useActionState } from 'react';
import { sendContactEmail } from '../actions';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";



export default function ContactForm() {

    const initialState = { success: false, message: '', error: '' };
    //useActionState maneja el estado del formulario tras ejecutar la acción
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

    return (
        <div className="max-w-xl p-6 bg-gray-100 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">¿quieres tener un contacto más directo con nosotros?</h2>

            <form action={formAction} className="space-y-4 flex flex-col justify-between">



                <div className='w-full'>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-3 bg-white py-2 border-2 border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-green-900 focus:border-green-900 "
                        placeholder="tu email"
                    />
                </div>
                <div className='flex justify-between items-end gap-6'>
                    <div className='w-full'>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className="mt-1 block w-full px-3 bg-white py-2 border-2 border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-green-900 focus:border-green-900 resize-none "
                            placeholder="escribe tu mensaje aquí..."
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isPending}
                        className=" py-2 px-3 h-12 w-12 border border-transparent cursor-pointer rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 disabled:bg-gray-400"
                    >
                        <motion.div layout style={{ display: "flex", alignItems: "center" }}>
                            <ArrowRight size={25} strokeWidth={2} />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mensajes de feedback */}
                {state?.success && (
                    <p className="text-green-600 text-sm mt-2">{state.message}</p>
                )}
                {state?.success === false && (
                    <p className="text-red-600 text-sm mt-2">{state.error}</p>
                )}
            </form>
        </div>
    );
}