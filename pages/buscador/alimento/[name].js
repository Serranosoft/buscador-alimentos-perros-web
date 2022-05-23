import { fetchIngredientByName } from "../../api/excel"
import styles from '../../../styles/css/Ingredient.module.css'
import { useEffect } from 'react';
import Head from 'next/head'

export default function Ingrediente(props) {
    console.log(typeof(props.name));

    useEffect(() => {
        props.suitable ? document.getElementById("ingr-descr-container").style.backgroundColor = "#bbffe9" : document.getElementById("ingr-descr-container").style.backgroundColor = "#ffccd0"
    }, [props])
    return (
        <>
            <Head>
                <title>¿Un perro puede comer {props.name}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${props.name}? Respuestas rápidas en Buscadog`} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`¿Un perro puede comer ${props.name}? Respuestas rápidas en Buscadog`} />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test1.jpg" />
            </Head>
            <section className={styles.container}>
                <h1>¿Un perro puede comer <span className={styles.headingVariable}>{props.name}</span>?</h1>
                <div id="ingr-descr-container" className={styles.descrContainer}>
                    <span>{props.descr}</span>
                </div>
                <span>{props.suitable}</span>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    /* let result = await fetchAllIngredientNames();
    let paths = result.map(el => {
        return {
            params: {name: el}
        }
    }) */
    let paths = [{params: {name: "Manzana"}}];
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    let result = await fetchIngredientByName(params.name);
    console.log(result);
    return { props: result }
}