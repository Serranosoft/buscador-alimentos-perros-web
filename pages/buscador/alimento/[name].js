import { /* fetchExcel, */ fetchIngredientByName } from "../../api/excel"
import styles from '../../../styles/css/Ingredient.module.css'
import { useEffect } from 'react';
import Head from 'next/head'
import Link from "next/link";
import { formatToUrl, removeAccents } from "../../../utils/strings";

export default function Ingrediente({result}) {
    console.log(result);
    useEffect(() => {
        if (result != undefined) {
            if (result.suitable) {
                document.getElementById("background-container").classList.add("background-success");
            } else {
                document.getElementById("background-container").classList.add("background-error");
            }          
        }
    }, [result])

    return (
        <>
            <Head>
                <title>¿Un perro puede comer {result.name}? Respuestas rápidas en BuscaDog</title>
                <meta name="description" content={`¿Un perro puede comer ${result.name}? Respuestas rápidas en Buscadog`} />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`¿Un perro puede comer ${result.name}? Respuestas rápidas en Buscadog`} />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:description" content={`¿Un perro puede comer ${result.name}? Respuestas rápidas en Buscadog`}></meta>
                <meta name="twitter:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
            </Head>
            <main className="mainContainer">
                <section className={styles.container}>
                    <div id="background-container" className={styles.background}></div>
                    <h1>¿Un perro puede comer <span className={styles.headingVariable}>{result.name}</span>?</h1>
                    {result.suitable ? <img src="/img/dog-happy.svg" /> : <img src="/img/dog-sad.svg" /> }
                    <div className={styles.descrContainer}>
                        <span>{result.descr}</span>
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
            </main>
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

    let paths = [
            "Embutidos",
            "Frituras",
            "Frutas",
            "Frutos secos",
            "Mariscos",
            "Pescados",
            "Verduras",
            "Aguacates",
            "Palta",
            "Albaricoques",
            "Arándanos azules",
            "Arándanos rojos",
            "Aceitunas verdes",
            "Aceitunas negras",
            "Olivas",
            "Berenjenas",
            "Bananas",
            "Ciruelas",
            "Cerezas",
            "Coco",
            "Caqui",
            "Chirimoya",
            "Kaki",
            "Durazno",
            "Datiles",
            "Damasco",
            "Fresas",
            "Fruta de la pasión",
            "Frambuesas",
            "Granada",
            "Guayaba",
            "Higos",
            "Jalapeños",
            "Kiwi",
            "Limón",
            "Lima",
            "Melón",
            "Mandarinas",
            "Manzana",
            "Mango",
            "Maní",
            "Maracuyá",
            "Membrillo",
            "Moras",
            "Naranja",
            "Nísperos",
            "Nectarinas",
            "Peras",
            "Papaya",
            "Piña",
            "Pomelo",
            "Pimientos",
            "Plátano",
            "Remolacha",
            "Sandía",
            "Tamarindo",
            "Tomate",
            "Uvas verdes",
            "Uvas moradas",
            "Uvas sin pepitas",
            "Vainilla",
            "Acelga",
            "Ajos",
            "Alcachofas",
            "Alubias",
            "Apio",
            "Batata",
            "Boniato",
            "Brócoli",
            "Calabacín",
            "Calabaza",
            "Canela",
            "Cardo",
            "Cebolla",
            "Cilantro",
            "Col",
            "Coliflor",
            "Champiñones",
            "Eneldo",
            "Escarola",
            "Espárragos",
            "Espinacas",
            "Garbanzos",
            "Guisantes",
            "Iceberg",
            "Jalapeños",
            "Jengibre",
            "Judías",
            "Kale",
            "Lechuga",
            "Lentejas",
            "Maíz",
            "Nabo",
            "Orégano",
            "Patata",
            "Pepino",
            "Perejil",
            "Puerro",
            "Rábano",
            "Repollo",
            "Romero ",
            "Rúcula",
            "Setas",
            "Zanahoria",
            "Almendras",
            "Anacardos",
            "Avellanas",
            "Cacahuates",
            "Castañas",
            "Kikos",
            "Macadamia",
            "Nueces",
            "Piñones ",
            "Pistachos",
            "Semillas de calabaza",
            "Pipas",
            "Pasas",
            "Arroz cocido",
            "Arroz integral",
            "Arroz crudo",
            "Chia",
            "Pasta",
            "Pasta cruda",
            "Espaguetis",
            "Macarrones",
            "Chia",
            "Fideos",
            "Avena",
            "Copos de avena",
            "Pan",
            "Pan de molde",
            "Pan tostado",
            "Quinoa",
            "Soja",
            "Soya",
            "Azúcar",
            "Bolleria industrial",
            "Bombones",
            "Cereales",
            "Chocolate",
            "Croissant",
            "Dulces",
            "Dulces sin azúcar",
            "Dulce de leche",
            "Ensaimadas",
            "Flan",
            "Galletas",
            "Galletas saladas",
            "Gelatina",
            "Gomitas",
            "Helado",
            "Napolitanas",
            "Oreo",
            "Palomitas",
            "Bebida de soja",
            "Huevos",
            "Kefir",
            "Leche",
            "Leche de almendras",
            "Leche de avellanas",
            "Leche de coco",
            "Leche de soja",
            "Mantequilla",
            "Nata",
            "Queso",
            "Yema de huevo",
            "Yogur",
            "Yogur natural",
            "Carne",
            "Carne cruda",
            "Higado",
            "Huesos",
            "Huesos de pollo",
            "Jamón cocido",
            "Jamón serrano",
            "Longaniza",
            "Mortadela",
            "Patas de pollo",
            "Pollo cocido",
            "Pollo crudo",
            "Riñones",
            "Salchichas",
            "Salchichón",
            "Tocino",
            "Atún enlatado",
            "Filetes de pescado",
            "Jurel",
            "Ostras",
            "Salmón",
            "Sardinas",
            "Hierbas",
            "Jengibre",
            "Pasto",
            "Trigo",
            "Yuca",
            "Aceite",
            "Ketchup",
            "Mayonesa",
            "Miel",
            "Salsas",
            "Vinagre",
            "Wasabi",
            "Bocadillo",
            "Croquetas",
            "Doritos",
            "Ensalada",
            "Noquis",
            "Nuggets",
            "Sushi",
            "Tacos",
            "Torta",
            "Tortilla",
            "Comida de gato",
            "Edulcorantes",
            "Jabón",
            "Hielo",
            "Jabón",
            "Pienso de gato",
            "Sal",
            "Agua",
            "Café",
            "Cerveza",
            "Coca cola",
            "Fanta",
            "Nestea",
            "Refrescos",
            "Té",
            "Tinto",
            "Vino"
    ];

    let pathsAux = [];
    paths.map(el => {
        pathsAux.push({
            name: removeAccents(formatToUrl(el))
        });
    })
    paths = pathsAux.map(path => ({
        params: { name: path.name}
    }))

    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log(params);
    let result = await fetchIngredientByName(params.name);
    // let ingredients = await fetchExcel();
    return { 
        props: {
            result: result/* ,
            ingredients */
        }
    }
}