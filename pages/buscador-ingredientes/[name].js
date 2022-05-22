import { fetchIngredientByName } from "../api/excel"
import styles from '../../styles/css/Ingredient.module.css'
import { useEffect } from 'react';

export default function Ingrediente(props) {

    useEffect(() => {
        props.suitable ? document.getElementById("ingr-descr-container").style.backgroundColor = "#bbffe9" : document.getElementById("ingr-descr-container").style.backgroundColor = "#ffccd0"
    }, [props])

    return (
        <section className={styles.container}>
            <h1>¿Un perro puede comer <span className={styles.headingVariable}>{props.name}</span>?</h1>
            <div id="ingr-descr-container" className={styles.descrContainer}>
                <span>{props.descr}</span>
            </div>
            <span>{props.suitable}</span>
        </section>
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
    return { props: result }
}