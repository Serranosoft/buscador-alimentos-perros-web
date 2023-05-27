import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {

    const [randomStatement, setRandomStatement] = useState(null);
    const statement = useRef(null);

    useEffect(() => {
        action();
    }, [])

    useEffect(() => {
        if (randomStatement) {
            statement.current.textContent = randomStatement
        }
    }, [randomStatement])


    function action() {
        let messages = [
            "tomate",
            "platano",
            "piña",
            "caqui",
            "manzanas",
            "peras",
            "pipas",
            "manzana",
            "naranja",
            "patata"
        ]

        setRandomStatement(messages[Math.floor(Math.random() * (10 - 0) + 0)])
    }

    return (
        <header className={styles.header}>
            <div className={styles.menuLogo}>
                <Link href="/">
                    <Logo />
                </Link>
                <div className={styles.separator}></div>
                <Link href={`/buscador/alimento/${randomStatement}`}>
                    ¿Puede comer un perro <span ref={statement} id="ingredient-statement" className={styles.ingredientStatement}></span>? 👈
                    <span className={styles.muted}>Prueba nuestra herramienta</span>
                </Link>
            </div>
        </header>
    )
}