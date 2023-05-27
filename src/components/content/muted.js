import styles from '@/styles/components/content/muted.module.scss'

export default function Muted({children}) {


    return <span className={styles.root}>{children}</span>
}