import Container from "@/components/content/container";
import { getArchiveFromTag } from "./api/wordpress";
import Text from "@/components/content/text";
import Link from "next/link";
import styles from "@/styles/archive/tag-archive.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Test({ data }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Información sobre los tipos de {router.query.slug} que puede comer un perro</title>
                <meta name="description" content={`¿Qué tipo de ${router.query.slug} puede comer un perro? Información fiable en Buscadog`} />
                <meta property="og:title" content={`¿Qué tipo de ${router.query.slug} puede comer un perro? Información fiable en Buscadog`} />
                <meta property="og:url" content={`https://buscadog.net/${router.query.slug}`} />
            </Head>
            <Container className={styles.root} fullscreen>

                <div className={styles.hero}>
                    <Text xxxl>¿Es peligroso para un perro comer {router.query.slug}?</Text>
                </div>

                <div className={styles.grid}>
                    {
                        data.map(post => {
                            return (
                                <Link href={`/buscador/alimento/${post.node.slug}`} key={post.node.id}>
                                    <img src={post.node.featuredImage.node.sourceUrl} alt={post.node.featuredImage.node.altText}></img>
                                    <Text xl>¿Los perros pueden comer {post.node.title.toLowerCase()}?</Text>
                                </Link>
                            )
                        })
                    }
                </div>
            </Container>
        </>
    )
}

export const getStaticPaths = async () => {
    const arr = [
        "carne", "cereal", "grasa", 
        "bebida", "verdura", "fruta", 
        "pescado", "fruto-seco", "dulce",
        "salsa", "marisco", "pan", 
        "especias", "legumbre", "lacteo",
        "grasa"
    ];

    const paths = arr.map((el) => ({
        params: { slug: el }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const data = await getArchiveFromTag(context.params.slug)
    return {
        props: {
            data
        },
    };
}