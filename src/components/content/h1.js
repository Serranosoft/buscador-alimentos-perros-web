import styles from '@/styles/components/content/h1.module.scss'

export default function H1({children, className}) {

    return (
        <>
            <h1 className={`${styles.root} ${className && className}`}>{children}</h1>
        </>
    )
}