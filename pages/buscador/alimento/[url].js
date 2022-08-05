import s from '../../../styles/css/[url].module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseClient';
import Loading from '../../../components/Loading';
import { addSpaces } from '../../../utils/strings';
import Suggestion from '../../../components/suggestions';

export default function Ingrediente({ data }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (data) {
            setReady(true)
        }
    }, [data])

    return (
        <>
            {!ready ?
                <Loading />
                :
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
                    <main className={s.root}>
                        <section>
                            <div>
                                <div className={s.sidebar}>
                                    <Suggestion />
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
                </>
            }
        </>


    )
}

export async function getStaticPaths() {
    let { data } = await supabase.from("Ingredientes").select("url");

    const paths = data.map((ingr) => ({
        params: { url: ingr["url"].toLowerCase() }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context

    let ingredient = params.url.charAt(0).toUpperCase() + params.url.slice(1);

    let { data } =
        await supabase
            .from('Ingredientes')
            .select("ID, nombre, descripcion, respuesta")
            .eq("url", addSpaces(ingredient))
            .single();

    return {
        props: { data }
    }
}