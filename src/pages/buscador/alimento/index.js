import Head from "next/head";
import styles from '@/styles/buscador-alimento/buscador-alimento.module.scss'
import Searcher from "@/components/searcher/searcher";
import { getTitleItems } from "@/pages/api/wordpress";
import H1 from "@/components/content/h1";
import Text from "@/components/content/text";
import H2 from "@/components/content/h2";
import Container from "@/components/content/container";

export default function BuscadorAlimentos({ ingredients }) {

    return (

        <>
            <Head>
                <title>Datos sobre los alimentos en un perro [Respuestas rápidas]</title>
                <meta name="description" content={`Encuentra información sobre que alimentos son saludables o perjudiciales para tu mascota`} />
                <meta property="og:title" content={`Encuentra respuestas sobre alimentos saludables o perjudiciales para tu mascota [Respuestas rápidas]`} />
                <meta name="twitter:description" content="Encuentra respuestas sobre alimentos saludables o perjudiciales para tu mascota [Respuestas rápidas]"></meta>
                <meta property="og:url" content={`https://buscadog.net/buscador/alimento`} />
            </Head>
            <Container small className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.inputContainer}>
                        <H1>¿Qué alimentos son saludables o perjudiciales para mi perro?</H1>
                        <span>Descúbre como afecta los distintos productos orgánicos e inorganicos en la salud de tu mascota favorita</span>
                        <Searcher ingredients={ingredients}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.howTo}>
                            <span>¿Cómo funciona el buscador?</span>
                            <Text>Este buscador automático te proporcionará resultados inmediatos que coincidan con el alimento, ingrediente u objeto que hayas escrito.</Text>
                            <ol>
                                <li>Escribe el alimento en el buscador</li>
                                <li>Elige de la lista el resultado que mejor coincida con tu búsqueda</li>
                                <li>¡Obtén información al instante!</li>
                            </ol>
                        </div>
                        <div className={styles.content}>
                            <H2>¿Qué comida puede comer un perro?</H2>
                            <Text>La mejor comida para nuestra mascota favorita consta de dos tipos: Dieta Barf compuesta por alimentos humanos crudos (Carnes, pescados, fruta...) y el tradicional pienso canino ya procesado y preparado especialmente para ellos</Text>
                            <Text>¿Se te ha caído algo al suelo, tu amigo perruno se lo ha tragado y no sabes si es malo?</Text>
                            <ul>
                                <li>¿Piel de una cebolla? ✔️</li>
                                <li>¿Algún liquido como leche de vaca, refrescos azucarados o alcohol? ❌</li>
                                <li>¿Carne cruda? ✔️</li>
                            </ul>
                            <Text>BuscaDog ha creado un buscador con resultados instantáneos para cada alimento con el objetivo de proporcionarte información y respuestas rápidas a tus dudas.</Text>
                            <Text>Nuestros perros son nuestra mejor compañía, el mejor amigo y compañero que podemos tener cerca de nosotros.</Text>
                            <Text>Es inevitable crear un vinculo personal y muy bonito con ellos, compartimos experiencias, momentos muy bonitos y al ser responsables de ellos, tenemos que cuidarlos.</Text>
                            <Text>Por ello es muy importante mantener a nuestros compañeros sanos y bien alimentados.</Text>
                            <Text>Guardate esta herramienta en marcadores y ten acceso siempre a esta información con todos los alimentos aptos para tu perro al instante</Text>
                        </div>
                    </div>
                </div>
            </Container>
        </>


    )
}

export async function getServerSideProps() {

    const data = await getTitleItems();
    const ingredients = data.edges;
    return {
        props: {
            ingredients
        }
    }
}