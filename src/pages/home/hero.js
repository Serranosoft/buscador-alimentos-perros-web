import DogHero from "@/components/DogHero";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import Searcher from "@/components/searcher/searcher";
import styles from "@/styles/home/hero.module.scss";

export default function Hero({ingredients}) {

    return (
        <div className={styles.root}>
            <div className="aos-effect1-observer">
                <div className={styles.text}>
                    <H1>¿Es saludable lo que come mi mascota?</H1>
                    <Text>Escribe aquí abajo un alimento orgánico o inorganico para saber si tu perro puede comerlo</Text>
                    <Searcher ingredients={ingredients} />
                </div>
                <DogHero />
            </div>
        </div>
    )
}

