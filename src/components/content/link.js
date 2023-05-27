import Link from 'next/link';

export default function Anchor({children, href}) {

    return (
        <Link href={href}>
            {children}
        </Link>
    )
}