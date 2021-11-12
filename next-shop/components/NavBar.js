import Link from "next/link";
import { fetchJson } from "../pages/api/api";
import { useState, useEffect } from "react";
export default function NavBar() {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson("/api/user");
        setUser(user);
      } catch (err) {}
    })();
  }, []);
  const handleSignOut = async () => {
    await fetchJson("/api/logout");
    setUser(undefined);
  };
  console.log("Navbar : ", user);
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
            <li>{user.name}</li>
            <li onClick={handleSignOut}>
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
