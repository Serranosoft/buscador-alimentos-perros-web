import Container from "@/components/content/container";
import CustomLink from "@/components/content/customLink";
import H2 from "@/components/content/h2";
import Text from "@/components/content/text";
import styles from "@/styles/home/row-content.module.scss";

export default function FeedContent() {

    return (
        <Container large className={`${styles.root} ${styles.left}`}>

            <div className={styles.content}>
                <div>
                    <CustomLink href="/blog/">
                        <div className={styles.viewMore}>
                            <Text>Ver Más</Text>
                        </div>
                    </CustomLink>
                </div>
                <div className={styles.item}>
                    <CustomLink href="/blog/pienso-hipoalergenico-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/06/cual-mejor-pienso-hipoalergenico.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Alimentación</Text>
                    <CustomLink href="/blog/pienso-hipoalergenico-perros/">
                        <Text xl>Pienso hipoalergénico para perros: Para qué sirven y beneficios</Text>
                    </CustomLink>
                </div>
                <div className={styles.item}>
                    <CustomLink href="/blog/15-alimentos-prohibidos-para-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/08/alimentos-prohibidos-para-perros.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Alimentación</Text>
                    <CustomLink href="/blog/15-alimentos-prohibidos-para-perros/">
                        <Text xl>15 Alimentos que NUNCA deben comer los perros ⛔</Text>
                    </CustomLink>
                </div>
                <div className={styles.item}>
                    <CustomLink href="/blog/pienso-hipoalergenico-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/06/cual-mejor-pienso-hipoalergenico.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Alimentación</Text>
                    <CustomLink href="/blog/pienso-hipoalergenico-perros/">
                        <Text xl>Pienso hipoalergénico para perros: Para qué sirven y beneficios</Text>
                    </CustomLink>
                </div>

            </div>
            <div className={styles.title}>
                <H2>¿Cuál es el mejor pienso para perros?</H2>
                <Text>Looking to get your seeds started indoors or direct sown the right way? Find out all you need to know about starting seeds in these comprehensive guides!</Text>
            </div>
        </Container>
    )

}