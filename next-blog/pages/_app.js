import Navbar from "../components/navbar";
import "../styles/global.css";
import Head from "next/head";
function App({ Component, pageProps }) {
  console.log("[App]:render");
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
export default App;
