import "../styles/globals.css";
import Link from "next/link";
function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <main className="px-6 py-4">
        <Link href="/">
          <a>Home</a>
        </Link>
      </main>
    </>
  );
}
export default App;
