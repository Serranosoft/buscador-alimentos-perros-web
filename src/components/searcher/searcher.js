import styles from '@/styles/searcher/searcher.module.scss'
import { useRef, useState } from "react";
import Link from "next/link";

export default function Searcher({ ingredients }) {

    const [matches, setMatches] = useState([]);
    const input = useRef();

    function findMatches(letters) {
        return ingredients.filter(ingredient => {
            const regex = new RegExp(letters, 'gi');
            if (letters != "") {
                return ingredient.node.title.match(regex);
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
                const regex = new RegExp(letters, 'gi');
                const ingrMatched = ingredient.node.title.replace(regex, `<span style="background-color:#5DFDCB">${letters}</span>`)
                i++;
                matches.push({ id: ingredient.node.id, html: `${ingrMatched}`, url: ingredient.node.slug, name: ingredient.node.title })
            }
        }).join('');
        setMatches(matches)
    }

    return (
        <>
            <div className={styles.root}>
                <input ref={input} type="text" className={styles.searchInput} placeholder="¿Mi perro puede comer ..." onKeyUp={(e) => displayMatches(e.target.value)} onChange={(e) => displayMatches(e.target.value)} />
                <div className={styles.suggestions}>
                    {matches.map(el => {
                        return (
                            <Link key={el.id} href={`/buscador/alimento/${el.url}`}><span dangerouslySetInnerHTML={{ __html: el.html }}></span></Link>
                        )
                    })}
                </div>
            </div>
        </>
    )

}