import Container from "@/components/content/container";
import CustomLink from "@/components/content/customLink";
import H2 from "@/components/content/h2";
import Text from "@/components/content/text";
import styles from "@/styles/home/meat-content.module.scss";

export default function ProteinContent() {


    return (
        <Container fullscreen className={styles.root}>
            <div className={styles.title}>
                <H2>¿Qué proteina puede comer un perro?</H2>
                <Text>Descubre cuál es la mejor proteina que puede ingerir tu mascota: Análisis de carnes, embutidos y todo tipo de pescados</Text>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/pollo-crudo/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/pollo.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/pollo-crudo/">
                            <Text xl>Pollo</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/salchichas/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/salchichas.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/salchichas/">
                            <Text xl>Salchichas</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/ternera/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/ternera.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/ternera/">
                            <Text xl>Ternera</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/jamon-serrano/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/jamon-serrano.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/jamon-serrano/">
                            <Text xl>Jamón Serrano</Text>
                        </CustomLink>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/huevos/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/huevos.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/huevos/">
                            <Text xl>Huevos</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/sardinas/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/pescado.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/sardinas/">
                            <Text xl>Sardinas</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/salchichon/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/embutido.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/salchichon/">
                            <Text xl>Salchichón</Text>
                        </CustomLink>
                    </div>
                    <div className={styles.item}>
                        <CustomLink href="/buscador/alimento/fritos/">
                            <img src="https://api.buscadog.net/wp-content/uploads/2023/07/fritos.jpg" />
                        </CustomLink>
                        <CustomLink href="/buscador/alimento/fritos/">
                            <Text xl>Fritos</Text>
                        </CustomLink>
                    </div>
                    
                </div>
            </div>
        </Container>
    )
}