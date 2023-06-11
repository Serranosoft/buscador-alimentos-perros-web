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
                <Text xxxl className={styles.title}>TRÁFICO CONSTANTE Y CUALIFICADO</Text>
                <Text xxl className={styles.title}>DESCUBRE DE QUE TRATA EL SEO</Text>

                <div className={styles.content}>
                    <div className={styles.list}>
                        {
                            data.edges.map((blog) => {
                                return (
                                    <Link href={`/blog/${blog.node.slug}`}>
                                        <img alt={blog.node.featuredImage.node.altText} src={blog.node.featuredImage.node.sourceUrl} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={styles.sidebar}>
                        <Text xl>¿Abrumado con demasiada información?</Text>
                        <Text>Comienza a posicionar tu web y obtener tráfico real desde ya con nuestra ayuda.<br></br> Kaoos es una agencia especializada en diseño web y posicionamiento.</Text>
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