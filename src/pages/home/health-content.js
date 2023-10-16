import Button from "@/components/content/button";
import Container from "@/components/content/container";
import CustomLink from "@/components/content/customLink";
import H2 from "@/components/content/h2";
import Text from "@/components/content/text";
import styles from "@/styles/home/row-content.module.scss";
import Link from "next/link";

export default function HealthContent() {


    return (
        <Container large className={`${styles.root} ${styles.right}`}>
            <div className={styles.title}>
                <H2>Salud para tu mascota</H2>
                <Text>¿Quieres saber cómo puedes contribuir a que tu perro tenga una vida saludable? Encuentra todo lo que necesitas saber sobre la salud de tus mascotas con nuestras guías</Text>
                <Link href="/blog/">
                    <Button>Ver más</Button>
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <CustomLink href="/blog/seresto-collar-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/07/seresto-perros-collar.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Collar antiparasitario</Text>
                    <CustomLink href="/blog/seresto-collar-perros/">
                        <Text xl>Seresto collar antiparasitario: Todo lo que debes saber</Text>
                    </CustomLink>
                </div>
                <div className={styles.item}>
                    <CustomLink href="/blog/milbemax-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/07/milbemax-para-perros.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Medicamento antiparasitario</Text>
                    <CustomLink href="/blog/milbemax-perros/">
                        <Text xl>Milebmax para perros: Todo lo que necesitas saber</Text>
                    </CustomLink>
                </div>
                <div className={styles.item}>
                    <CustomLink href="/blog/antiinflamatorios-para-perros/">
                        <img src="https://api.buscadog.net/wp-content/uploads/2023/06/aintiinflamatorios-para-perros.jpg" />
                    </CustomLink>
                    <Text className={styles.category}>Anti inflamatorios</Text>
                    <CustomLink href="/blog/antiinflamatorios-para-perros/">
                        <Text xl>¿Qué antiinflamatorios sirven para perros?</Text>
                    </CustomLink>
                </div>
            </div>
        </Container>
    )

}