import Container from "@/components/content/container";
import { getAllPosts } from "@/pages/api/wordpress";
import { useRouter } from "next/router";
import styles from "@/styles/archive/tag-archive.module.scss";
import Text from "@/components/content/text";
import Link from "next/link";



export default function AllIngredients({ data }) {

    const router = useRouter()

    console.log(data);

    return (
        <Container className={styles.root} fullscreen>

            <div className={styles.hero}>
                <Text xxxl>Hemos analizado todos estos alimentos para saber si un perro puede consumirlo o no</Text>
            </div>

            <div className={styles.grid}>
                {
                    data && data.edges.map(post => {
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

export const getStaticProps = async () => {
    const data = await getAllPosts("alimento");

    return {
        props: { data },
    };
}