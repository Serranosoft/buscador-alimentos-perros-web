import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Buscador() {

    const router = useRouter();

    useEffect(() => {
        router.push("/buscador/alimento")
    })



    return (
        <>
        
        </>
    )
}