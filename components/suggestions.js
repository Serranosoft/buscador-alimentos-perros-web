
import Link from 'next/link'
import s from '../styles/css/suggestions.module.css'

export default function Suggestion() {
    return (
        <div className={s.suggestions}>
            <span>¿Mi perro puede comer?</span>
            <div>
                <Link href={"/buscador/alimento/manzana"}>
                    <a target="_blank">
                        <img src="/img/apple.svg" />
                        <span>Manzana</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/platano"}>
                    <a target="_blank">
                        <img src="/img/banana.svg" />
                        <span>Plátano</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/brocoli"}>
                    <a target="_blank">
                        <img src="/img/broccoli.svg" />
                        <span>Brocoli</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/zanahoria"}>
                    <a target="_blank">
                        <img src="/img/carrot.svg" />
                        <span>Zanahoria</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/queso"}>
                    <a target="_blank">
                        <img src="/img/cheese.svg" />
                        <span>Queso</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/pollo"}>
                    <a target="_blank">
                        <img src="/img/chicken.svg" />
                        <span>Pollo</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/chocolate"}>
                    <a target="_blank">
                        <img src="/img/chocolate-bar.svg" />
                        <span>Chocolate</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/ketchup"}>
                    <a target="_blank">
                        <img src="/img/hot-sauce.svg" />
                        <span>Ketchup</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/naranja"}>
                    <a target="_blank">
                        <img src="/img/orange.svg" />
                        <span>Naranja</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/sandia"}>
                    <a target="_blank">
                        <img src="/img/watermelon.svg" />
                        <span>Sandía</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}