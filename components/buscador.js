import { useEffect, useState } from "react";
import s from '../styles/css/IngredientSearch.module.css'
import { formatToUrl, removeAccents } from "../utils/strings";
import Loading from "./Loading";
import Link from "next/link";

export default function BuscadorAlimento({ ingredients }) {

    const [matches, setMatches] = useState([]);
    const [data, setData] = useState([]);
    const [ready, setReady] = useState(false);

    // Cuando tengamos los ingredientes, el state es ready.
    useEffect(() => {
        if (ingredients) {
            setData(ingredients.filter(ingredient => ingredient.descripcion));
            setReady(true);
        }
    }, [ingredients])

    // Cuando todo se encuentre ready, agregamos el evento "Enter"
    useEffect(() => {
        if (ready) {
            window.addEventListener("keypress", (e) => {
                if (document.querySelectorAll("#ingredient-suggestions a").length > 0) {
                    if (e.key === "Enter") {
                        router.push(document.querySelector("#ingredient-suggestions > a:first-of-type").href);
                    }
                }
            })
        }
    }, [ready])
    
    function findMatches(letters) {
        return data.filter(ingredient => {
            const regex = new RegExp(removeAccents(letters), 'gi');
            if (letters != "") {
                return removeAccents(ingredient.nombre).match(regex);
            }
            return "";
        })
    }

    function displayMatches(letters) {
        const matchArray = findMatches(letters);
        let i = 0;
        let matches = [];
        matchArray.map(ingredient => {
            if (i < 5) {
                const regex = new RegExp(removeAccents(letters), 'gi');
                const ingrMatched = removeAccents(ingredient.nombre).replace(regex, `<span style="background-color:#5DFDCB">${letters}</span>`)
                i++;
                matches.push({ id: ingredient.ID, html: `<p>${ingrMatched}</p>`, url: formatToUrl(ingredient.url), name: ingredient.nombre })
            }
        }).join('');
        setMatches(matches)
    }


    return (
        <>
            { !ready ?
                <Loading />
                :
                <div className={s.root}>
                    <input type="text" className={s.searchInput} placeholder="¿Mi perro puede comer ..." onKeyUp={(e) => displayMatches(e.target.value)} onChange={(e) => displayMatches(e.target.value)} />
                    <div id="ingredient-suggestions" className={s.suggestions}>
                        {matches.map(el => {
                            return (
                                <Link key={el.id} href={`/buscador/alimento/${el.url}`}><a dangerouslySetInnerHTML={{ __html: el.html }} /></Link>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
    
}

/* export async function getServerSideProps() {

    let {data} = await supabase.from('Ingredientes').select(`ID, nombre, descripcion, url`);
    let ingredients = data;
    return {
        props: { ingredients }
    }
} */