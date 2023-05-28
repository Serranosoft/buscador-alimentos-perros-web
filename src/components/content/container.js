import styles from "@/styles/components/content/container.module.scss"

export default function Container({children, large, small, className, fullscreen}) {

    return (
        <>
            <section className={`${styles.root} ${large ? styles.large : ''} ${small ? styles.small : ''} ${className ? className : ''} ${fullscreen ? styles.fullscreen : ''}`}>{children}</section>
        </>
    )
}