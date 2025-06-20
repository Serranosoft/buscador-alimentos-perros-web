import Text from "@/components/content/text";
import styles from "@/styles/home/info1.module.scss";

export default function Info1() {


    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={`${styles.item} aos-effect1-observer`}>
                    <div className={`${styles.image} aos-effect1-el`}>
                        <img src="/img/doggo-melon.jpg" />
                    </div>
                    <div className={styles.text}>
                        <Text xxl>No arriesgues con tu mascota</Text>
                        <Text>Accede al conocimiento que ellos no pueden tener y ayúdalos.</Text>
                        <Text>Protege la salud de tu querida mascota, debes saber que cada alimento que consume puede tener un impacto significativo en su bienestar.</Text>
                        <Text>Tanto si es por voluntad propia como si ingiere un alimento accidentalmente, debes conocer el efecto que puede tener en su aparato digestivo.</Text>
                        <Text>Por favor, por el bien de tu perro no tomes riesgos innecesarios y asegúrate de que tu perro solo consuma alimentos seguros para su sistema digestivo.</Text>
                    </div>
                </div>
                <div className={`${styles.item} aos-effect1-observer`}>
                    <div className={styles.text}>
                        <Text xxl>La veracidad de los datos es crucial</Text>
                        <Text>Desde Buscadog te garantizamos que la información sobre los alimentos que puede ingerir tu mascota son verificados por fuentes externas confiables y redactados por expertos en la materia.</Text>
                        <Text>Toma decisiones informadas antes de hacer nada y protege la salud de tu querida mascota.</Text>
                    </div>
                    <div className={`${styles.image} aos-effect1-el`}>
                        <img src="/img/vet.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}