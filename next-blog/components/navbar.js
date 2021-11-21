import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
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
            <a>Next Post</a>
          </Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>Hai, {user.name}</li>
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
        <li>
          <ThemeSwitch />
          <style jsx>
            {`
              nav {
                display: flex;
                justify-content: space-between;
              }
              ul {
                list-style-type: none;
                padding: 0;
              }
              li {
                display: inline;
              }
              li:not(:first-child) {
                margin-left: 0.75rem;
              }
            `}
          </style>
        </li>
      </ul>
    </nav>
  );
}
