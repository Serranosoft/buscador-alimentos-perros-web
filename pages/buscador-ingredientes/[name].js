import { fetchIngredientByName } from "../api/excel"
import styles from '../../styles/css/Ingredient.module.css'

export default function Ingrediente(props) {

    return (
        <section className={styles.container}>
            <h1>¿Un perro puede comer <span class={styles.headingVariable}>{props.name}</span>?</h1>
            <div className={styles.descrContainer}>
                <p>{props.descr}</p>
            </div>
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