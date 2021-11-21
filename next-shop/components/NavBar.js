import Link from "next/link";
import { useSignOut, useUser } from "../hooks/user";
export default function NavBar() {
  const user = useUser();
  const signOut = useSignOut();
  console.log("Navbar : User ", user);

  return (
    <nav className="px-6 py-4 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">
            <a>Next Shop</a>
          </Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>Hai, {user.name}</li>
            <li>
              <Link href="/cart">
                <a>Shopping Cart</a>
              </Link>
            </li>
            <li onClick={signOut}>
              <Link href="/sign-in">
                <a>Sign Out</a>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
