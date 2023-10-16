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
                <H1><Text xxxl>Cuida de tu mascota</Text></H1>
                <Text xxl>Tu principal recurso para obtener información sobre alimentación en perros y mucho más </Text>
                <div>
                    <Link href="/buscador/alimento/">
                        <Button dark>Ver listado de alimentos</Button>
                    </Link>
                    <Link href="/blog/">
                        <Button dark>Ver mas información</Button>
                    </Link>
                </div>
                <svg
                    preserveAspectRatio="none"
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                    viewBox="0 0 500 150"
                >
                    <path
                        d="M-68.56,225.50 C192.15,170.23 560.66,395.23 277.93,-226.45 L698.36,172.22 L0.00,150.00 Z"
                        style={{
                            stroke: "none",
                            fill: "#e3e3e3",
                        }}
                    />
                </svg>
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

