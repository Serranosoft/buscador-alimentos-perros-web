import s from '../../../styles/css/[url].module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseClient';
import Loading from '../../../components/Loading';
import { addSpaces } from '../../../utils/strings';
import Suggestion from '../../../components/suggestions';
import Link from 'next/link';

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
                        <title>¿Un perro puede comer {data.nombre}? Respuestas rápidas en BuscaDog</title>
                        <meta name="description" content={`¿Un perro puede comer ${data.nombre}? Respuestas rápidas en Buscadog`} />
                        <meta property="og:title" content={`¿Un perro puede comer ${data.nombre}? Respuestas rápidas en Buscadog`} />
                        <meta property="og:url" content={`https://buscadog.net/buscador/alimento/${data.url}`} />
                    </Head>
                    <main className={s.root}>
                        <section>
                            <div>
                                <div className={s.content}>
                                    <h1>¿Los perros pueden comer <span>{data.nombre}</span>?</h1>
                                    <div>
                                        <p className={s.description}><span>{data.respuesta} .</span>{data.descripcion}</p>
                                    </div>
                                    <Link href="/buscador/alimento">
                                        <a className={s.back}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></svg>
                                            </div>
                                            <span>Buscar otros alimentos</span>
                                        </a>
                                    </Link>
                                    <div className={s.notification}>
                                        <p>¡Te recomendamos visitar a un veterinario antes de tomar una decisión para obtener una recomendación respaldada por un profesional!</p>
                                    </div>
                                </div>
                                <div className={s.sidebar}>                                    
                                    <Suggestion />
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