import styles from '@/styles/components/content/text.module.scss'

export default function Text({ children, xl, xxl, xxxl, className }) {


    return (

        <p
            className={
                `
                    ${styles.root} 
                    ${xl === true ? styles.xl : ''}
                    ${xxl === true ? styles.xxl : ''}
                    ${xxxl === true ? styles.xxxl : ''}
                    ${className ? className : ''}
                    
                `}>{children}</p>

    )
}