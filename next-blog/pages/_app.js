import Head from "next/head";
import style from "../styles/global.css";
import NavBar from "../components/navbar";
import Navbar from "../components/navbar";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default App;
