import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'
import Link from 'next/link';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.menuLogo}>
                <Link href="/">
                    <Logo />
                </Link>
                <div className={styles.separator}></div>
                <Link href={`/buscador/alimento`}>
                    ¿Qué puede comer mi perro? 👈
                    <span className={styles.muted}>Prueba nuestra herramienta</span>
                </Link>
            </div>
        </header>
    )
}