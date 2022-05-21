import styles from '../styles/css/Header.module.css'
import Link from "next/link";
import { useEffect } from 'react';

export default function Header() {    
    
    useEffect(() => {
        action();
    }, [])

    function action() {
        let messages = [
            "Uvas?",
            "Plátanos?",
            "Papeles?",
            "Cartón?",
            "Manzanas?",
            "Peras?", 
            "Carne?",
            "Huesos de pollo?",
            "Huevos?",
            "Jamón serrano?"
        ]

        document.getElementById("ingredient-statement").textContent = messages[Math.floor(Math.random() * (10 - 0) + 0)];
    }

    return (
        <header className={styles.header}>
            <div className={styles.menuLogo}>
                <span>Logo</span>
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