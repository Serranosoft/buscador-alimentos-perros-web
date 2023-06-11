import { useRouter } from "next/router"
import styles from "@/styles/components/breadcrumbs/breadcrumbs.module.scss";
import Anchor from "../content/anchor";

export default function Breadcrumbs() {

    const router = useRouter();

    return (
        <div className={styles.root}>
            <span><Anchor href="/">Página principal</Anchor></span>
            <span>{"»"}</span>
            <span><Anchor href={`/${router.pathname.split('/')[1]}`}>{router.pathname.split('/')[1]}</Anchor></span>
            <span>{"»"}</span>
            <span><Anchor href={`${router.query.slug}`}>{router.query.slug.split("-").join(" ")}</Anchor></span>
        </div>
    )
}