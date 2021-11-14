import Head from "next/head";
import NavBar from "../components/navbar";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default App;
