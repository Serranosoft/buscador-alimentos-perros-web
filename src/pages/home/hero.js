import Button from "@/components/content/button";
import Container from "@/components/content/container";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import styles from "@/styles/home/hero.module.scss";
import Link from "next/link";

export default function Hero() {

    return (

        <Container fullscreen className={styles.root}>
            <div className={styles.content}>
                <H1>¿Es saludable lo que come mi mascota?</H1>
                <Text xl>Tu principal recurso para obtener información detallada sobre la alimentación en perros y mucho más </Text>
                <div>
                    <Link href="/buscador/alimento/">
                        <Button dark>Ver listado de alimentos</Button>
                    </Link>
                    <Link href="/blog/">
                        <Button dark>Ver mas información</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.img}>
                <img src="https://api.buscadog.net/wp-content/uploads/2023/07/hero-no-bg.png" />
            </div>
        </Container>












    )
}
{/* <div className={styles.root}>
    <div className="aos-effect1-observer">
        <div className={styles.text}>
            <H1>¿Es saludable lo que come mi mascota?</H1>
            <Text>Escribe aquí abajo un alimento orgánico o inorganico para saber si tu perro puede comerlo</Text>
            <Searcher ingredients={ingredients} />
        </div>
        <DogHero />
    </div>
</div> */}

