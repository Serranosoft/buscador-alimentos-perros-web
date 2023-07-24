
import styles from '@/styles/buscador-alimento/suggestions.module.scss'
import Anchor from './content/anchor';
import Text from './content/text';
import CustomLink from './content/customLink';
import Link from 'next/link';

export default function Suggestion() {
    return (
        <div className={styles.suggestions}>
            <div>
                <Link href="/blog/seresto-collar-perros">
                    <img alt={"Seresto collar antiparasitario para perros"} src={"https://api.buscadog.net/wp-content/uploads/2023/07/seresto-perros-collar.jpg"} />
                    <Text>Seresto collar antiparasitario para perros: Todo lo que debes saber</Text>
                </Link>
            </div>
        </div>
    )
}