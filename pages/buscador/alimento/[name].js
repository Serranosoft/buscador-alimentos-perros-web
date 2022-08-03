import s from '../../../styles/css/Ingredient.module.css'
import Head from 'next/head'
import Link from "next/link";
import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseClient';
import Loading from '../../../components/loading';
import { addSpaces } from '../../../utils/strings';

export default function Ingrediente({data}) {

    const [ready, setReady] = useState(false);
    
    useEffect(() => {
        if (data) {
            setReady(true)
        }
    })

    return (
        <>
            <Head>
                <title>¿Un perro puede comer {data.name}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${data.name}? Respuestas rápidas en Buscadog`} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`¿Un perro puede comer ${data.name}? Respuestas rápidas en Buscadog`} />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content={`¿Un perro puede comer ${data.name}? Respuestas rápidas en Buscadog`}></meta>
                <meta name="twitter:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
            </Head>

            { !ready ?
                <Loading />
                :
                <main className={s.root}>
                    <section>
                        <div>
                            <div className={s.sidebar}>
                                <div className={s.notification}>
                                    <span>Te recomendamos encarecidamente que visites un veterinario para poder analizar el caso de tu mascota.</span>
                                </div>
                                <div className={s.suggestions}>
                                    <span>¿Mi perro puede comer?</span>
                                    <div>
                                        <span>Cebolla</span>
                                        <span>Pimientos</span>
                                        <span>Calabacín</span>
                                        <span>Arroz</span>
                                        <span>Cebolla</span>
                                        <span>Pimientos</span>
                                        <span>Calabacín</span>
                                        <span>Arroz</span>
                                    </div>
                                </div>
                            </div>
                            <div className={s.content}>
                                <h1>¿Los perros pueden comer <span>{data.nombre}</span>?</h1>
                                <div>
                                    <p className={s.description}><span>{data.respuesta} .</span>{data.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            }




            {/* <main className="mainContainer">
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
            </main> */}
        </>
    )
}

export async function getStaticPaths() {
    let { data } = await supabase.from("Ingredientes").select("nombre");
    
    let paths = data.map((ingr) => ({
        params: { name: ingr["nombre"].toLowerCase()}
    }))
    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context

    let ingredient = params.name.charAt(0).toUpperCase() + params.name.slice(1);
    
    let { data } = 
    await supabase
    .from('Ingredientes')
    .select("ID, nombre, descripcion, respuesta")
    .eq("nombre", addSpaces(ingredient))
    .single();
    
    return { 
        props: { data }
    }
}