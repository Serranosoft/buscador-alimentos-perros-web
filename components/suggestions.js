
import Link from 'next/link'
import s from '../styles/css/suggestions.module.css'
import Image from "next/image";

export default function Suggestion() {
    return (
        <div className={s.suggestions}>
            <span>¿Mi perro puede comer?</span>
            <div>
                <Link href={"/buscador/alimento/manzana"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen manzana" src="/img/apple.svg" />
                        <span>Manzana</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/platano"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen platano" src="/img/banana.svg" />
                        <span>Plátano</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/brocoli"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen brocoli" src="/img/broccoli.svg" />
                        <span>Brocoli</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/zanahoria"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen zanahoria" src="/img/carrot.svg" />
                        <span>Zanahoria</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/queso"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros commen queso" src="/img/cheese.svg" />
                        <span>Queso</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/pollo"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen pollo" src="/img/chicken.svg" />
                        <span>Pollo</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/chocolate"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen chocolate" src="/img/chocolate-bar.svg" />
                        <span>Chocolate</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/ketchup"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen ketchup" src="/img/hot-sauce.svg" />
                        <span>Ketchup</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/naranja"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen naranjas" src="/img/orange.svg" />
                        <span>Naranja</span>
                    </a>
                </Link>
                <Link href={"/buscador/alimento/sandia"}>
                    <a target="_blank">
                        <Image width="64px" height="64px" alt="Los perros comen sandia" src="/img/watermelon.svg" />
                        <span>Sandía</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}