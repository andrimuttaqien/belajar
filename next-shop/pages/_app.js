import Head from "next/head";
// import "../styles/globals.css";
import Title from "../components/Title";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
