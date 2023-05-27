import Head from 'next/head'
import styles from '@/styles/home.module.scss'
import Link from "next/link";
import Container from '@/components/content/container';
import Hero from './home/hero';
import Popular from './home/popular';
import { getTitleItems } from './api/wordpress';

export default function Home({ingredients}) {

    return (
        <>
            <Head>
                <title>¿Qué puede comer un perro? Información sobre Perros | BuscaDog</title>
                <meta name="description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:title" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:url" content="https://buscadog.net/" />
                <meta name="twitter:description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog"></meta>
            </Head>

            <Container className={styles.root}>
                <div>
                    <Hero ingredients={ingredients} />
                    <Popular />
                </div>
            </Container>
        </>
    )
}

export async function getServerSideProps() {

    const data = await getTitleItems();
    const ingredients = data.edges;
    return {
        props: {
            ingredients
        }
    }
}