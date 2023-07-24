import styles from '@/styles/header/header.module.scss'
import Logo from '@/components/logo/logo'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../content/button';

export default function Header() {

    useEffect(() => {
        document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("menu").classList.add(styles.active))
        document.getElementById("close-menu").addEventListener("click", () => document.getElementById("menu").classList.remove(styles.active))
    }, [])

    return (
        <header className={`${styles.root} header`}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={45}
                        height={45}
                        fill="none"
                        viewBox="0 0 24 24"
                        id="mobile-menu"
                        className={styles.burger}
                    >
                        <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <Link href="/buscador/alimento">
                    <Button>Ver buscador de alimentos</Button>
                </Link>
            </div>




            <div id="menu" className={styles.menu}>
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 -0.5 21 21"
                    className={styles.close}
                    id="close-menu"
                >
                    <path
                        fill="#000000"
                        fillRule="evenodd"
                        d="M12.018 10 21 18.554 19.48 20l-8.98-8.554L1.518 20 0 18.554 8.98 10 0 1.446 1.518 0 10.5 8.554 19.48 0 21 1.446z"
                    />
                </svg>
                <Link className={styles.mobileLogo} href="/">
                    <Logo />
                </Link>
                <Link href="/carne">Carnes</Link>
                <Link href="/verdura">Verduras</Link>
                <Link href="/fruta">Frutas</Link>
                <Link href="/bebida">Bebidas</Link>
                <Link href="/cereal">Cereales</Link>
                <Link href="/legumbre">Legumbres</Link>
                <Link href="/fruto-seco">Frutos Secos</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </header>
    )
}