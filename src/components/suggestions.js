
import Link from 'next/link'
import styles from '@/styles/buscador-alimento/suggestions.module.scss'
import Image from "next/image";
import Anchor from './content/anchor';
import Text from './content/text';

export default function Suggestion() {
    return (
        <div className={styles.suggestions}>
            <Text>¿Tienes más dudas?</Text>
            <div>
                <ul>
                    <li>
                        <Anchor href={"/buscador/alimento/manzana"} target="_blank">
                            <span>¿Los perros pueden comer manzana?</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href={"/buscador/alimento/platano"} target="_blank">
                            <span>¿Los perros pueden comer plátano?</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href={"/buscador/alimento/brocoli"} target="_blank">
                            <span>¿los perros pueden comer brocoli?</span>
                        </Anchor>
                    </li>
                    <li>
                        <Anchor href={"/buscador/alimento/zanahoria"} target="_blank">
                            <span>¿Los perros pueden comer zanahoria?</span>
                        </Anchor>
                    </li>
                </ul>
            </div>
        </div>
    )
}