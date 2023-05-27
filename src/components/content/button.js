import styles from '@/styles/components/content/button.module.scss';
import Link from 'next/link';

export default function Button({ children, className, highlight, to }) {


    return (
        <>
            {
                to ? 
                    <Link href={to} className={`${styles.button} ${highlight && styles.highlight} ${className && className}`}>
                        {children}
                    </Link>
                :
                <button className={`${styles.button} ${className && className} ${highlight && styles.highlight}`}>
                    {children}
                </button>

                
            }
        </>
        
    )
}