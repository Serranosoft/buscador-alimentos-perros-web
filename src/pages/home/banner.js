import Button from "@/components/content/button";
import Text from "@/components/content/text";
import styles from "@/styles/home/banner.module.scss";

export default function Banner() {


    return (
        <div className={styles.root}>
            <div className={`${styles.content} aos-effect1-observer`}>
                <div className={styles.text}>
                    <Text xxl>¡Mi perro ha comido ── !</Text>
                    <Text>¿Tu perro se ha comido algo y no sabes si es malo?</Text>
                    <Button dark to="/buscador/alimento">Descúbrelo aquí</Button>
                </div>
                <div className={`${styles.images} aos-effect1-el`}>
                    <img src="/img/dog-worried.jpg" />
                </div>
            </div>
        </div>
    )
}