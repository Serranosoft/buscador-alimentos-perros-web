import s from '../styles/css/footer.module.css'
import Link from "next/link";

export default function Footer() {    

    return (
        <footer className={s.footer}>
            <Link href="/buscador/alimento/todos">
                <a>
                    Todos los alimentos
                </a>
            </Link>
        </footer>
    )
}