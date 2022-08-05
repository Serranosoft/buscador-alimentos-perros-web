import Link from "next/link";
import styles from '../../../../styles/css/allIngredients.module.css'
import { formatToUrl, removeAccents } from "../../../../utils/strings";
import Logo from '../../../../components/Logo';

export default function AllIngredients(/* props */) {

    return (
        <section>
            {/* <div className={styles.container}>
                <h1>Listado de todos los alimentos saludables y no saludables para un perro</h1>
                <div className={styles.logoWrapper}><p>Buscadog</p><Logo /></div>
                <div className={styles.ingredientWrapper}>
                    {props.ingredient.map(ingr => {
                        return (
                            <Link key={formatToUrl(removeAccents(ingr))} href={`/buscador/alimento/${formatToUrl(removeAccents(ingr))}`}>
                                <a>
                                    {ingr}
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div> */}
        </section>
    )
}

/* export async function getServerSideProps(context) {
    const { params } = context
    let result = await fetchAllIngredientNames();
    return { props: { ingredient: result } }
} */