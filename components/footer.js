import styles from '../styles/css/Footer.module.css'
import Link from "next/link";
import { useEffect } from 'react';
import Logo from './Logo';

export default function Footer() {    

    return (
        <footer className={styles.footer}>
            <Link href="/buscador/alimento/todos">
                <a>
                    Todos los alimentos
                </a>
            </Link>
        </footer>
    )
}