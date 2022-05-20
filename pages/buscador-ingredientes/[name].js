import { fetchAllIngredientNames, fetchIngredientByName } from "../api/excel"

export default function Ingrediente(props) {


    return (
        <>
            <p>{props.name}</p>
            <p>{props.descr}</p>
        </>
    )
}

export async function getStaticPaths() {
    let result = await fetchAllIngredientNames();
    let paths = result.map(el => {
        return {
            params: {name: el}
        }
    })
    console.log(paths);
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