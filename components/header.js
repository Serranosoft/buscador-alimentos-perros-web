import styles from '../styles/css/Header.module.css'
import Link from "next/link";

export default function Header() {

    return (
        <header className="header">
            <div>
                <span>Logo</span>
                <Link href="/buscador-ingredientes">
                    <a>¿Puede comer mi perro ...?</a>
                </Link>
            </div>
            <div>
                <Link href="/enlace1"><a>Enlace de menú 1</a></Link>
                <Link href="/enlace2"><a>Enlace de menú 2</a></Link>
                <Link href="/enlace3"><a>Enlace de menú 3</a></Link>
            </div>
        </header>
    )    
}