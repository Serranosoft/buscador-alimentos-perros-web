import s from '../styles/css/Footer.module.css'
import Link from "next/link";

export default function Footer() {    

    return (
        <footer className={s.footer}>
            <Link href="/buscador/alimento/todos">
                <a target="_blank">
                    Todos los alimentos
                </a>
            </Link>
            <Link href="/politica-de-privacidad">
                <a target="_blank">
                    Politica de privacidad
                </a>
            </Link>
            <Link href="/politica-de-cookies">
                <a target="_blank">
                    Política de cookies
                </a>
            </Link>
        </footer>
    )
}