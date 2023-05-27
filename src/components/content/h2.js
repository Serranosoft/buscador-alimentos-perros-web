import styles from '@/styles/components/content/h2.module.scss'

export default function H2({children}) {


    return (
        <>
            <h2 className={styles.root}>{children}</h2>
        </>
    )
}