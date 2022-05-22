import { fetchAllIngredientNames } from "../api/excel"
import Link from "next/link";
import styles from '../../styles/css/Ingredient.module.css'
import { formatToUrl, removeAccents } from "../../utils/strings";

export default function AllIngredients(props) {

    return (
        <section className={styles.container}>
            {props.ingredient.map(ingr => {
                return (
                    <Link href={`/buscador/alimento/${formatToUrl(removeAccents(ingr))}`}>
                        <a>
                            {ingr}
                        </a>
                    </Link>
                )
            })}
        </section>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    let result = await fetchAllIngredientNames();
    return { props: { ingredient: result } }
}