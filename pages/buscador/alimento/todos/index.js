import Link from "next/link";
import s from '../../../../styles/css/AllIngredients.module.css'
import { formatToUrl, removeAccents } from "../../../../utils/strings";
import Logo from '../../../../components/Logo';
import { supabase } from "../../../../utils/supabaseClient";
import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import Head from "next/head";

export default function AllIngredients({ ingredients }) {
    console.log(ingredients);

    const [ready, setReady] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (ingredients) {
            setData(ingredients.filter(ingredient => ingredient.descripcion));
            setReady(true);
            console.log(ingredients);
        }
    }, [ingredients])

    return (
        <>
            {!ready ?
                <Loading />
                :
                <>
                    <Head>
                        <title>Descubre cuáles son los alimentos aptos para dar de comer a tu perro.</title>
                        <meta name="description" content={`Descubre cuáles son los alimentos aptos para dar de comer a tu perro.`} />
                        <meta property="og:title" content={`Descubre cuáles son los alimentos aptos para dar de comer a tu perro.`} />
                        <meta property="og:url" content="https://buscadog.net/buscador/alimento/todos" />
                    </Head>
                    <section className={s.root}>
                        <div className={s.container}>
                            <h1>Listado de todos los alimentos organicos e inorganicos para un perro</h1>
                            <div className={s.ingredientWrapper}>
                                {data.map(ingredient => {
                                    return (
                                        <Link key={ingredient.ID} href={`/buscador/alimento/${formatToUrl(ingredient.url)}`}>
                                            <a>
                                                {ingredient.nombre}
                                            </a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </>
            }
        </>


    )
}

export async function getServerSideProps() {

    const { data } = await supabase.from("Ingredientes").select("nombre, url, descripcion, ID");

    return { props: { ingredients: data } }
}