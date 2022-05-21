import styles from '../styles/css/Header.module.css'
import Link from "next/link";
import { useEffect } from 'react';

export default function Header() {    
    
    useEffect(() => {
        action();
    }, [])

    function action() {
        let messages = [
            "uvas?",
            "plátanos?",
            "papeles?",
            "cartón?",
            "manzanas?",
            "peras?", 
            "carne?",
            "huesos de pollo?",
            "huevos?",
            "jamón serrano?"
        ]

        document.getElementById("ingredient-statement").textContent = messages[Math.floor(Math.random() * (10 - 0) + 0)];
    }

    return (
        <header className={styles.header}>
            <div className={styles.menuLogo}>
                <Link href="/">
                    <a>
                        <div>
                            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="58" height="58">
                            <path id="icon:1" fill-rule="evenodd" class="s0" d="m70.6 57.5l9.5-11.4c1.7-2.9 5.7-2.9 7.3 0l9.5 11.4c1.7 2.9-0.3 6.5-3.6 6.5h-19.1c-3.2 0-5.3-3.6-3.6-6.5zm2.4-13.5c1.6 3.7 1 7.4-1.3 8.3-2.2 1-5.3-1.2-6.8-4.9-1.6-3.6-1-7.3 1.3-8.3 2.2-0.9 5.3 1.3 6.8 4.9zm8.7-10.2c1.1 3.8 0.1 7.4-2.3 8-2.3 0.7-5.1-1.8-6.2-5.6-1.2-3.8-0.2-7.4 2.2-8.1 2.3-0.7 5.2 1.9 6.3 5.7zm20.1 5.3c2.3 1 2.9 4.7 1.3 8.3-1.5 3.7-4.6 5.9-6.8 4.9-2.3-0.9-2.9-4.6-1.3-8.3 1.5-3.6 4.6-5.8 6.8-4.9zm-9.2-11c2.4 0.7 3.4 4.3 2.2 8.1-1.1 3.8-3.9 6.3-6.2 5.6-2.4-0.6-3.4-4.2-2.3-8 1.1-3.8 4-6.4 6.3-5.7z"/>
                            <g id="Layer_2">
                                <g id="_20_Education_Line_Icon_Set">
                                    <g id="Magnifying_Glass">
                                        <path id="Layer" fill-rule="evenodd" class="s1" d="m83.3 75.4c-12.4 0-23.6-7.5-28.4-18.9-4.7-11.5-2.1-24.7 6.7-33.5 8.8-8.8 22-11.4 33.4-6.7 11.5 4.8 19 16 19 28.4 0 4-0.8 8-2.3 11.8-1.6 3.7-3.9 7.1-6.7 9.9-2.9 2.9-6.2 5.1-10 6.7-3.7 1.5-7.7 2.3-11.7 2.3zm0-54.9c-9.8 0-18.7 5.9-22.4 14.9-3.8 9.1-1.7 19.5 5.2 26.5 7 6.9 17.4 9 26.5 5.2 9-3.7 14.9-12.6 14.9-22.4 0-3.2-0.6-6.3-1.8-9.3-1.2-2.9-3-5.6-5.3-7.8-2.2-2.3-4.9-4.1-7.8-5.3-3-1.2-6.1-1.8-9.3-1.8z"/>
                                        <path id="Layer" fill-rule="evenodd" class="s1" d="m29.9 111q-0.3 0-0.6-0.1-0.3 0-0.6-0.2-0.3-0.1-0.6-0.3-0.2-0.1-0.4-0.4l-9.7-9.7q-0.5-0.4-0.8-1-0.2-0.6-0.2-1.2 0-0.7 0.2-1.3 0.3-0.6 0.8-1l29.1-29.1q0.4-0.5 1-0.7 0.6-0.3 1.2-0.3 0.7 0 1.3 0.3 0.6 0.2 1 0.7l9.7 9.7q0.5 0.4 0.7 1 0.3 0.6 0.3 1.3 0 0.6-0.3 1.2-0.2 0.6-0.7 1.1l-29.1 29q-0.2 0.3-0.4 0.4-0.3 0.2-0.6 0.3-0.3 0.2-0.6 0.2-0.3 0.1-0.7 0.1zm-5.1-12.9l5.1 5.1 24.6-24.5-5.2-5.2z"/>
                                        <path id="Layer" class="s1" d="m54.2 77q-0.3 0-0.6 0-0.4-0.1-0.6-0.2-0.3-0.1-0.6-0.3-0.3-0.2-0.5-0.4-0.5-0.5-0.7-1.1-0.3-0.5-0.3-1.2 0-0.6 0.3-1.2 0.2-0.6 0.7-1.1l8.1-8.1c0.6-0.6 1.4-0.9 2.3-0.9 0.8 0 1.7 0.3 2.3 0.9 0.6 0.6 0.9 1.5 0.9 2.3 0 0.9-0.3 1.7-0.9 2.3l-8.1 8.1q-0.2 0.2-0.5 0.4-0.3 0.2-0.6 0.3-0.3 0.1-0.6 0.2-0.3 0-0.6 0z"/>
                                        <path id="Layer" class="s1" d="m52.6 88.4q-0.3 0-0.7-0.1-0.3-0.1-0.6-0.2-0.3-0.1-0.5-0.3-0.3-0.2-0.5-0.4l-9.7-9.7c-0.6-0.6-1-1.4-1-2.3 0-0.8 0.4-1.7 1-2.3 0.6-0.6 1.4-0.9 2.3-0.9 0.8 0 1.7 0.3 2.3 0.9l9.7 9.7q0.4 0.5 0.7 1.1 0.2 0.6 0.2 1.2 0 0.7-0.2 1.3-0.3 0.6-0.7 1-0.3 0.2-0.5 0.4-0.3 0.2-0.6 0.3-0.3 0.1-0.6 0.2-0.3 0.1-0.6 0.1z"/>
                                        <path id="Layer" class="s1" d="m36.4 101.3q-0.3 0-0.6-0.1-0.3 0-0.6-0.2-0.3-0.1-0.6-0.3-0.3-0.1-0.5-0.4l-6.4-6.4c-0.6-0.6-1-1.5-1-2.3 0-0.9 0.4-1.7 1-2.3 0.6-0.6 1.4-0.9 2.2-0.9 0.9 0 1.7 0.3 2.3 0.9l6.5 6.5q0.5 0.4 0.7 1 0.3 0.6 0.3 1.3 0 0.6-0.3 1.2-0.2 0.6-0.7 1-0.2 0.3-0.5 0.4-0.2 0.2-0.5 0.3-0.3 0.2-0.7 0.2-0.3 0.1-0.6 0.1z"/>
                                    </g>
                                </g>
                            </g>
                            </svg>
                            <span>BuscaDog</span>
                        </div>

                    </a>
                </Link>
                <div className={styles.separator}></div>
                <Link href="/buscador-ingredientes">
                    <a>¿Puede comer un perro <span id="ingredient-statement" className={styles.ingredientStatement}></span> 👈 <span className={styles.muted}>Prueba nuestra herramienta</span></a>
                </Link>
            </div>
            <div className={styles.menuContainer}>
                <Link href="/enlace1"><a>Enlace de menú 1</a></Link>
                <Link href="/enlace2"><a>Enlace de menú 2</a></Link>
                <Link href="/enlace3"><a>Enlace de menú 3</a></Link>
            </div>
        </header>
    )
}