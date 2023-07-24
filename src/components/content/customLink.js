import Link from "next/link";
import styles from "@/styles/components/content/anchor.module.scss";

export default function CustomLink({children, href, hover}) {

    return (
        <Link prefetch={false} href={href} className={hover && styles.root}>{children}</Link>
    )
}