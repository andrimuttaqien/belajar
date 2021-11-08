//Option 1 :  Get data from server side / getStaticProps

import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import Link from "next/link";
import { getProducts } from "../lib/Products";

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps");
  const products = await getProducts();
  return {
    props: { products },
  };
}
export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title />
        <p className="font-medium">[Todo: display products]</p>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <a>{product.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
