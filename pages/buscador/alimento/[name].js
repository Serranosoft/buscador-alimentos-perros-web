import { fetchIngredientByName } from "../../api/excel"
import styles from '../../../styles/css/Ingredient.module.css'
import { useEffect } from 'react';
import Head from 'next/head'
import Link from "next/link";

export default function Ingrediente(props) {

    useEffect(() => {
        if (props.suitable != undefined) {
            if (props.suitable) {
                document.getElementById("background-container").classList.add("background-success");
            } else {
                document.getElementById("background-container").classList.add("background-error");
            }              
        }
    }, [props])

    return (
        <>
            <Head>
                <title>¿Un perro puede comer {props.name}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${props.name}? Respuestas rápidas en Buscadog`} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`¿Un perro puede comer ${props.name}? Respuestas rápidas en Buscadog`} />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content={`¿Un perro puede comer ${props.name}? Respuestas rápidas en Buscadog`}></meta>
                <meta name="twitter:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
            </Head>
            <section className={styles.container}>
                <div id="background-container" className={styles.background}></div>
                <h1>¿Un perro puede comer <span className={styles.headingVariable}>{props.name}</span>?</h1>
                {props.suitable ? <img src="/img/dog-happy.svg" /> : <img src="/img/dog-sad.svg" /> }
                <div className={styles.descrContainer}>
                    <span>{props.descr}</span>
                </div>
                <div className={styles.suggestions}>
                    <p>¿Tienes mas dudas?</p>
                    <div>
                        <Link href="/buscador/alimento/manzana">
                            <a>
                                ¿Los perros pueden comer manzana?
                            </a>
                        </Link>
                        <Link href="/buscador/alimento/queso">
                            <a>
                                ¿Los perros pueden comer queso?
                            </a>
                        </Link>
                        <Link href="/buscador/alimento/huevos">
                            <a>
                                ¿Los perros pueden comer huevo?
                            </a>
                        </Link>
                        <Link href="/buscador/alimento/sandia">
                            <a>
                                ¿Los perro pueden comer sandia?
                            </a>
                        </Link>
                    </div>
                </div>
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