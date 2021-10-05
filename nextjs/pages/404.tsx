import { useEffect } from "react"
import { useRouter } from "next/dist/client/router"
export default function Custom404() {
    const route = useRouter();
    useEffect(() => {
        setTimeout(() => {
            console.log('dipanggil setelah 2 detik')
            route.push('/')
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Opps...</h1>
            <h2 className="title-not-found">Halaman tidak ditemukan</h2>
        </div>
    )
}
