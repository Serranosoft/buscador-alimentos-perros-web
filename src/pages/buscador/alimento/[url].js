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

export default function Ingrediente({ data, ingredients }) {


    return (
        <>
            <Head>
                <title>¿Un perro puede comer {data.title}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${data.nombre}? Respuestas rápidas en Buscadog`} />
                <meta property="og:title" content={`¿Un perro puede comer ${data.nombre}? Respuestas rápidas en Buscadog`} />
                <meta property="og:url" content={`https://buscadog.net/buscador/alimento/${data.url}`} />
            </Head>
            <Container className={styles.root}>
                <div>
                    <div className={styles.content}>
                        <Breadcrumbs />
                        <H1>¿Los perros pueden comer <span>{data.title.toLowerCase()}</span>?</H1>
                        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                        {/* <Link href="/buscador/alimento" className={styles.back}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></svg>
                            </div>
                            <span>Buscar otros alimentos</span>
                        </Link> */}
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

    const allPosts = await getAllSlugs();

    return {
        paths: allPosts.edges.map(({ node }) => `/buscador/alimento/${node.slug}`),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const data = await getPostBySlug("buscador/alimento", context.params.url)
    const ingredientsNotFormatted = await getTitleItems();
    const ingredients = ingredientsNotFormatted.edges;

    return {
        props: { data, ingredients }
    }
}