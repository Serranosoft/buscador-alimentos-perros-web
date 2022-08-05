import Head from 'next/head'
import s from '../styles/css/Home.module.css'
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
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content="Encuentra respuestas sobre alimentos saludables o perjudiciales para tu mascota [Respuestas rápidas]"></meta>
                <meta name="twitter:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
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
                    <source src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.webm" type="video/mp4" />
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