'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ScrollToTop() {
    const params = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [params]);

    return null; // No dibuja nada en pantalla, solo ejecuta el código
}