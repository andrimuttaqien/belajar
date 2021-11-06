import Navbar from "../components/navbar";
import Head from "next/head";
import "../styles/global.css";
function App({ Component, pageProps }) {
  console.log("[App]:render");
  return (
    <>
      <Head>
        <link rel="icon" href="/apple-touch-icon.png"></link>
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
export default App;
