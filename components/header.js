import s from '../styles/css/Header.module.css'
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

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
        <header className={s.header}>
            <div className={s.menuLogo}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <div className={s.separator}></div>
                <Link href={`/buscador/alimento/${randomStatement}`}>
                    <a>¿Puede comer un perro <span ref={statement} id="ingredient-statement" className={s.ingredientStatement}></span>? 👈 <span className={s.muted}>Prueba nuestra herramienta</span></a>
                </Link>
            </div>
        </header>
    )
}