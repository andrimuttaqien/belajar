// Get data from client side / useEffect
import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title />
        <p className="font-medium">[Todo: display products]</p>
      </main>
    </>
  );
}
