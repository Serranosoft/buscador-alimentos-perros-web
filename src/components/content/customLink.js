import Link from "next/link";

export default function CustomLink({children, href}) {

    return (
        <Link prefetch={false} href={href}>{children}</Link>
    )
}