import Container from "@/components/content/container";
import { getArchiveFromTag } from "./api/wordpress";
import Text from "@/components/content/text";
import Link from "next/link";
import styles from "@/styles/archive/tag-archive.module.scss";
import { useRouter } from "next/router";

export default function Test({data}) {
    const router = useRouter()

    return (
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
    )
}

export const getStaticPaths = async () => {
    const arr = ["carne", "cereal", "grasa", "bebida", "verdura", "fruta", "legumbre", "fruto-seco", "dulce"];

    const paths = arr.map((el) => ({
        params: {slug: el} 
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