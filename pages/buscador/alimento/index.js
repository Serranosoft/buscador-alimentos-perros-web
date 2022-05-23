import Head from "next/head";
import Link from "next/link";
import styles from '../../../styles/css/buscadorIngrediente.module.css'
import { useState } from "react";
import { formatToUrl, removeAccents } from "../../../utils/strings";
import { fetchExcel } from "../../api/excel";

export default function BuscadorAlimentos({ ingredients }) {

    const [matches, setMatches] = useState([]);

    return (
        <section className={styles.container}>
            <Head>
                <title>Datos sobre los alimentos en un perro [Respuestas rápidas]</title>
                <meta name="description" content="¿Mi perro puede comer huevo? ¿Un perro puede comer uvas? Encuentra información sobre que alimentos son saludables o perjudiciales para tu mascota" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Encuentra respuestas sobre alimentos saludables o perjudiciales para tu mascota [Respuestas rápidas]" />
                <meta property="og:url" content="https://buscadog.net/buscador/alimento" />
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
            </Head>

            <div className={styles.inputContainer}>
                <h1>¿Qué alimentos son saludables o perjudiciales para mi perro?</h1>
                <span>Descúbre como afecta los distintos productos orgánicos e inorganicos en la salud de tu mascota favorita</span>
                <input type="text" className={styles.searchInput} placeholder="¿Mi perro puede comer ..." onKeyUp={(e) => displayMatches(e.target.value)} onChange={(e) => displayMatches(e.target.value)} />
                <div className={styles.suggestions}>
                    {matches.map(el => {
                        return (
                            <Link key={el.id} href={`/buscador/alimento/${el.url}`}><a dangerouslySetInnerHTML={{__html: el.html}} /></Link>
                        )
                    })}
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.howTo}>
                    <span>¿Cómo funciona el buscador?</span>
                    <p>Este buscador automático te proporcionará resultados inmediatos que coincidan con el alimento, ingrediente u objeto que hayas escrito.</p>
                    <ol>
                        <li>Escribe el alimento en el buscador</li>
                        <li>Elige de la lista el resultado que mejor coincida con tu búsqueda</li>
                        <li>¡Obtén información al instante!</li>
                    </ol>
                </div>
                <div className={styles.content}>
                    <h2>¿Qué comida puede comer un perro?</h2>
                    <p>La mejor comida para nuestra mascota favorita consta de dos tipos: Dieta Barf compuesta por alimentos humanos crudos (Carnes, pescados, fruta...) y el tradicional pienso canino ya procesado y preparado especialmente para ellos</p>
                    <p>¿Se te ha caído algo al suelo y tu amigo perruno se lo ha tragado?</p>
                    <ul>
                        <li>¿Piel de una cebolla? ✔️</li>
                        <li>¿Algún liquido como leche de vaca, refrescos azucarados o alcohol? ❌</li>
                        <li>¿Carne cruda? ✔️</li>
                    </ul>
                    <p>Nuestros perros son nuestra mejor compañía, el mejor amigo y compañero que podemos tener cerca de nosotros.</p>
                    <p>Es inevitable crear un vinculo personal y muy bonito con ellos, compartimos experiencias, momentos muy bonitos y al ser responsables de ellos, tenemos que cuidarlos.</p>
                    <p>Por ello es muy importante mantener a nuestros compañeros sanos y bien alimentados.</p>
                    <p>BuscaDog ha creado un buscador con resultados instantáneos para cada alimento con el objetivo de proporcionarte información y respuestas rápidas a tus dudas.</p>
                    <p>Guardate esta herramienta en marcadores y ten acceso siempre a esta información con todos los alimentos aptos para tu perro al instante</p>
                </div>
            </div>
        </section>
    )

    function findMatches(letters) {
        return ingredients.filter(ingredient => {
            const regex = new RegExp(removeAccents(letters), 'gi');
            if (letters != "") {
                return removeAccents(ingredient.name).match(regex);
            }
            return "";
        })
    }

    function displayMatches(letters) {
        const matchArray = findMatches(letters);
        let i = 0;
        let matches = [];
        matchArray.map(ingredient => {
            if (i < 5) {
                const regex = new RegExp(removeAccents(letters), 'gi');
                const ingrMatched = removeAccents(ingredient.name).replace(regex, `<span style="background-color:#5DFDCB">${letters}</span>`)
                i++;
                matches.push({id: ingredient.id, html: `<p>${ingrMatched}</p>`, url: removeAccents(formatToUrl(ingredient.name)), name: ingredient.name})
            }
        }).join('');
        setMatches(matches)
    }

}

export async function getServerSideProps() {
    let ingredients = await fetchExcel();
    return {
        props: { ingredients }
    }
}