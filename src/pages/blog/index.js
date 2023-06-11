import Container from "@/components/content/container";
import { getAllPosts, getTitleItems } from "../api/wordpress";
import styles from "@/styles/blog/blog.module.scss";
import Text from "@/components/content/text";
import Link from "next/link";
import Searcher from "@/components/searcher/searcher";

export default function Blog({ data, ingredients }) {

    return (
        <Container className={styles.root} fullscreen>
            <div>
                <Text xxxl className={styles.title}>Todo sobre alimentación, curiosidades y consejos en el mundo animal</Text>

                <div className={styles.content}>
                    <div className={styles.list}>
                        {
                            data.edges.map((blog) => {
                                return (
                                    <Link href={`/blog/${blog.node.slug}`}>
                                        <img alt={blog.node.featuredImage.node.altText} src={blog.node.featuredImage.node.sourceUrl} />
                                        <Text>{blog.node.title}</Text>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={styles.sidebar}>
                        <Text xl>Información sobre alimentos</Text>
                        <Text>Escribe un alimento en nuestro buscador interactivo para conocer como afecta cada uno de los elementos que ingiere tu mascota en su sistema digestivo</Text>
                        <div className={styles.actions}>
                            <Searcher ingredients={ingredients} />
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )


}


export const getStaticProps = async () => {
    const data = await getAllPosts("blog");

    const ingredientsNotFormatted = await getTitleItems();
    const ingredients = ingredientsNotFormatted.edges;
    return {
        props: { data, ingredients },
    };
}