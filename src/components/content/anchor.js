import Link from "next/link";
import styles from "@/styles/components/content/anchor.module.scss";

export default function Anchor({href, children, className}) {
    
    return (
        <Link className={`${styles.root} ${className && className}`} href={href}>
            {children}
        </Link>
    )
}