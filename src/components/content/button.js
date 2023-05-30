import styles from '@/styles/components/content/button.module.scss';
import Link from 'next/link';

export default function Button({ children, className, dark, to }) {


    return (
        <>
            {
                to ? 
                    <Link href={to} className={`${styles.button} ${dark && styles.dark} ${className && className}`}>
                        {children}
                    </Link>
                :
                <button className={`${styles.button} ${className && className} ${dark && styles.dark}`}>
                    {children}
                </button>

                
            }
        </>
        
    )
}