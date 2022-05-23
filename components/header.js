import styles from '../styles/css/Header.module.css'
import Link from "next/link";
import { useEffect } from 'react';
import Logo from './Logo';

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
                            <Logo />
                            <span>BuscaDog</span>
                        </div>

                    </a>
                </Link>
                <div className={styles.separator}></div>
                <Link href="/buscador/alimento">
                    <a>¿Puede comer un perro <span id="ingredient-statement" className={styles.ingredientStatement}></span> 👈 <span className={styles.muted}>Prueba nuestra herramienta</span></a>
                </Link>
            </div>
            {/* <div className={styles.menuContainer}>
                <Link href="/enlace1"><a>Enlace de menú 1</a></Link>
                <Link href="/enlace2"><a>Enlace de menú 2</a></Link>
                <Link href="/enlace3"><a>Enlace de menú 3</a></Link>
            </div> */}
        </header>
    )
}