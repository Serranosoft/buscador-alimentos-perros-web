import styles from "@/styles/components/content/highlight.module.scss"

export default function Highlight({children, large}) {


    return (
        <>
            <span className={styles.root}>{children}</span>
        </>
    )
}