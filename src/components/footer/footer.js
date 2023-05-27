import styles from '@/styles/footer/footer.module.scss'
import Link from "next/link";

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Link href="/buscador/alimento/todos" target="_blank">
                Todos los alimentos
            </Link>
            <Link href="/politica-de-privacidad" target="_blank">
                Politica de privacidad
            </Link>
            <Link href="/politica-de-cookies" target="_blank">
                Política de cookies
            </Link>
            <Link href="/sitemap_screaming_frog.xml" target="_blank">
                Mapa del sitio
            </Link>
        </footer>
    )
}