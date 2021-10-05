import { useRouter } from "next/dist/client/router"
export default function UserDetails() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <p>User Details{' '}{id}</p>
        </div>
    )
}
