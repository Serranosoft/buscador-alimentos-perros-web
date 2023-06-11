import styles from '@/styles/buscador-alimento/[url].module.scss';
import Head from 'next/head'
import Link from 'next/link';
import Suggestion from '@/components/suggestions';
import H1 from '@/components/content/h1';
import Text from '@/components/content/text';
import { getAllSlugs, getPostBySlug, getTitleItems } from '@/pages/api/wordpress';
import Container from '@/components/content/container';
import Searcher from '@/components/searcher/searcher';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Muted from '@/components/content/muted';

export default function Ingrediente({ data, ingredients }) {

    return (
        <>
            <Head>
                <title>¿Un perro puede comer {data.title}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${data.title}? Respuestas rápidas en Buscadog`} />
                <meta property="og:title" content={`¿Un perro puede comer ${data.title}? Respuestas rápidas en Buscadog`} />
                <meta property="og:url" content={`https://buscadog.net/buscador/alimento/${data.slug}`} />
            </Head>
            <Container className={styles.root}>
                <div>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <Breadcrumbs />
                            <H1>¿Los perros pueden comer <span>{data.title.toLowerCase()}</span>?</H1>
                            <div>
                                <img src="/favicon.svg" />
                                <Muted>{data.author.node.name}</Muted>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                        <div className={styles.notification}>
                            <Text>¡Te recomendamos visitar a un veterinario antes de tomar una decisión para obtener una recomendación respaldada por un profesional!</Text>
                        </div>
                    </div>
                    <div className={styles.sidebar}>
                        <Suggestion />
                        <div>
                            <Text>¡Busca un alimento!</Text>
                            <Searcher ingredients={ingredients} />
                        </div>
                    </div>
                </div>
            </Container>
        </>


    )
}

export async function getStaticPaths() {

    const allPosts = await getAllSlugs("/buscador/alimento");

    return {
        paths: allPosts.edges.map(({ node }) => `/buscador/alimento/${node.slug}`),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const data = await getPostBySlug("buscador/alimento", context.params.slug)
    const ingredientsNotFormatted = await getTitleItems();
    const ingredients = ingredientsNotFormatted.edges;

    return {
        props: { data, ingredients }
    }
}