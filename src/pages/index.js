import Head from 'next/head'
import styles from '@/styles/home.module.scss'
import Container from '@/components/content/container';
import Hero from './home/hero';
import Popular from './home/popular';
import { getTitleItems } from './api/wordpress';
import Info1 from './home/info1';
import Aos from '@/components/aos/aos';
import HealthContent from './home/health-content';
import FeedContent from './home/feed-content';
import ProteinContent from './home/protein-content';

export default function Home({ ingredients }) {

    return (
        <>
            <Aos />
            <Head>
                <title>¿Qué puede comer un perro? Información sobre Perros | BuscaDog</title>
                <meta name="description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:title" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:url" content="https://buscadog.net/" />
                <meta name="twitter:description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog"></meta>
            </Head>

            <div className={styles.root}>
                <Hero ingredients={ingredients} />
                <HealthContent />
                <ProteinContent />
                <FeedContent />
                <Info1 />
            </div>
        </>
    )
}