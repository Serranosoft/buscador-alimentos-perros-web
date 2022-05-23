import Head from 'next/head'
import styles from '../styles/css/Home.module.css'
import Link from "next/link";
import CTA from '../components/CTA';

export default function Home() {

    return (
        <>
            <Head>
                <title>¿Qué puede comer un perro? Información sobre Perros | BuscaDog</title>
                <meta name="description" content="¿Mi perro puede comer huevo? ¿Un perro puede comer uvas? Encuentra información sobre que alimentos son saludables o perjudiciales para tu mascota" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Encuentra respuestas sobre alimentos saludables o perjudiciales para tu mascota [Respuestas rápidas]" />
                <meta property="og:url" content="https://buscadog.net/" />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test1.jpg" />
            </Head>
            <section className={styles.heroSection}>
                <span className={styles.heroTitle}>Buscadores y herramientas para encontrar toda la información para tu perro</span>
                <p className={styles.muted}>¿Preocupado por lo que puede o no puede comer tu perro?</p>
                <p className={styles.muted}>Nuestro buscador interactivo te ayuda a encontrar información sobre que alimentos puede comer tu mascota.</p>
                <Link href="/buscador/alimento">
                    <a>
                        <button className="CTA"> Prueba BuscaDog Gratis
                            <div className="icon">
                                <CTA />
                            </div>
                        </button>
                    </a>
                </Link>
            </section>
        </>
    )
}