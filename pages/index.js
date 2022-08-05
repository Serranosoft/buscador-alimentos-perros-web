import Head from 'next/head'
import s from '../styles/css/Home.module.css'
import Link from "next/link";
import CTA from '../components/CTA';

export default function Home() {

    return (
        <>
            <Head>
                <title>¿Qué puede comer un perro? Información sobre Perros | BuscaDog</title>
                <meta name="description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:title" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:url" content="https://buscadog.net/" />
                <meta name="twitter:description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog"></meta>
            </Head>
            <section className={s.mainSection}>
                <div className={s.heroSection}>
                    <span className={s.heroTitle}>Buscadores y herramientas para encontrar toda la información para tu perro</span>
                    <p className={s.muted}>¿Preocupado por lo que puede o no puede comer tu perro?</p>
                    <p className={s.muted}>Nuestro buscador interactivo te ayuda a encontrar información sobre que alimentos puede comer tu mascota.</p>
                    <Link href="/buscador/alimento">
                        <a>
                            <CTA />
                        </a>
                    </Link>
                </div>
                <div className={s.videoSection}>
                    <video playsInline autoPlay muted loop poster="https://images.unsplash.com/photo-1620222071550-a5c7f8b600ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMDY4NDIyNA&ixlib=rb-1.2.1&q=80&w=400">
                    <source type="video/mp4" src="/videos/hero-video.mp4" />
                    </video>
                </div>
                <div className={s.heroGrid}>
                    <h1>¿Qué puede comer un perro?</h1>
                    <div>
                        <div>
                            <span>Descúbre que puede comer tu mascota</span>
                            <p>Mi perro ha cogido algo del suelo y no sabes si es bueno o malo para su aparato digestivo</p>
                            <p>Buscadog te proporciona información para conocer como puede afectar en un perro comer ciertos productos.</p>
                        </div>
                        <img src="/img/hero1.jpg" />
                    </div>
                </div>
            </section>
        </>
    )
}