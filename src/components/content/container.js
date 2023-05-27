import styles from "@/styles/components/content/container.module.scss"

export default function Container({children, large, className, fullscreen}) {

    return (
        <>
            <section className={`${styles.root} ${large ? styles.large : ''} ${className ? className : ''} ${fullscreen ? styles.fullscreen : ''}`}>{children}</section>
        </>
    )
}