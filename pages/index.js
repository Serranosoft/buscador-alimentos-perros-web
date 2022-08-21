import Head from 'next/head'
import s from '../styles/css/Home.module.css'
import Link from "next/link";
import CTA from '../components/CTA';
import buscador from '../components/buscador';
import BuscadorAlimento from '../components/buscador';
import { supabase } from '../utils/supabaseClient';
import DogHero from '../components/DogHero';
import Image from "next/image";

export default function Home( {ingredients} ) {

    return (
        <>
            <Head>
                <title>¿Qué puede comer un perro? Información sobre Perros | BuscaDog</title>
                <meta name="description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:title" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog" />
                <meta property="og:url" content="https://buscadog.net/" />
                <meta name="twitter:description" content="¿Qué puede comer un perro? Información sobre Perros | BuscaDog"></meta>
            </Head>

            <section className={s.root}>

                <div className={s.hero}>
                    <div>
                        <div>
                            <h1>¿Es saludable lo que come mi mascota?</h1>
                            <span>Escribe aquí abajo un alimento orgánico o inorganico para saber si tu perro puede comerlo</span>
                            <BuscadorAlimento ingredients={ingredients}/>
                        </div>
                        <DogHero />
                    </div>
                </div>

                <div className={s.popular}>
                    <h2>Los alimentos mas buscados</h2>
                    <div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Frutas</p>
                                <Image src="/img/fruits.svg" width={50} height={50} alt="Frutas para perros" />
                            </div>
                            <div>
                                <Link href="/buscador/alimento/manzana"><a target="_blank">Manzanas</a></Link>
                                <Link href="/buscador/alimento/peras"><a target="_blank">Peras</a></Link>
                                <Link href="/buscador/alimento/albaricoques"><a target="_blank">Albaricoques</a></Link>
                                <Link href="/buscador/alimento/bananas"><a target="_blank">Banana</a></Link>
                                <Link href="/buscador/alimento/fresas"><a target="_blank">Fresas</a></Link>
                                <Link href="/buscador/alimento/granada"><a target="_blank">Granadas</a></Link>
                                <Link href="/buscador/alimento/ciruelas"><a target="_blank">Ciruelas</a></Link>
                                <Link href="/buscador/alimento/caqui"><a target="_blank">Caquis</a></Link>
                            </div>
                        </div>
                        <div>
                        <div className={s.popularTitle}>
                                <p>Material Inorgánico</p>
                                <Image src="/img/toilet-paper.svg" width={50} height={50} alt="Material inorganico para perros" />
                            </div>
                            <div>
                                <Link href="/"><a>Papel</a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                                <Link href="/"><a></a></Link>
                            </div>
                        </div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Verduras</p>
                                <Image src="/img/vegetables.svg" width={50} height={50} alt="Verduras para perros" />
                            </div>
                            <div>
                                <Link href="/"><a target="_blank">Col</a></Link>
                                <Link href="/"><a target="_blank">Ensalada</a></Link>
                                <Link href="/"><a target="_blank">Eneldo</a></Link>
                                <Link href="/"><a target="_blank">Espárragos blancos</a></Link>
                                <Link href="/"><a target="_blank">Champiñones</a></Link>
                                <Link href="/"><a target="_blank">Escarola</a></Link>
                                <Link href="/"><a target="_blank">Espárragos verdes</a></Link>
                                <Link href="/"><a target="_blank">Coliflor</a></Link>
                            </div>
                        </div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Carnes</p>
                                <Image src="/img/meat.svg" width={50} height={50} alt="Carnes para perros" />
                            </div>
                            <div>
                                <Link href="/"><a target="_blank">Pollo</a></Link>
                                <Link href="/"><a target="_blank">Ternera</a></Link>
                                <Link href="/"><a target="_blank">Higado</a></Link>
                                <Link href="/"><a target="_blank">Carne cruda</a></Link>
                                <Link href="/"><a target="_blank">Croquetas</a></Link>
                                <Link href="/"><a target="_blank">Bocadillo</a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                            </div>
                        </div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Legumbres</p>
                                <Image src="/img/red-bean.svg" width={50} height={50} alt="Legumbres para perros" />
                            </div>
                            <div>
                                <Link href="/"><a target="_blank">Guisantes</a></Link>
                                <Link href="/"><a target="_blank">Garbanzos</a></Link>
                                <Link href="/"><a target="_blank">Alubias</a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                            </div>
                        </div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Dulces</p>
                                <Image src="/img/cake.svg" width={50} height={50} alt="Dulces para perros" />
                            </div>
                            <div>
                                <Link href="/"><a target="_blank">Croissant</a></Link>
                                <Link href="/"><a target="_blank">Copos de avena</a></Link>
                                <Link href="/"><a target="_blank">Chocolate</a></Link>
                                <Link href="/"><a target="_blank">Dulce de leche</a></Link>
                                <Link href="/"><a target="_blank">Galletas saladas</a></Link>
                                <Link href="/"><a target="_blank">Ensaimadas</a></Link>
                                <Link href="/"><a target="_blank">Flan</a></Link>
                                <Link href="/"><a target="_blank">Bombones</a></Link>
                            </div>
                        </div>
                        <div>
                            <div className={s.popularTitle}>
                                <p>Bebidas</p>
                                <Image src="/img/coke-can.svg" width={50} height={50} alt="Bebidas para perros" />
                            </div>
                            <div>
                                <Link href="/"><a target="_blank">Cerveza</a></Link>
                                <Link href="/"><a target="_blank">Coca Cola</a></Link>
                                <Link href="/"><a target="_blank">Hielo</a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                                <Link href="/"><a target="_blank"></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {

    let {data} = await supabase.from('Ingredientes').select(`ID, nombre, descripcion, url`);
    let ingredients = data;
    return {
        props: { ingredients }
    }
}