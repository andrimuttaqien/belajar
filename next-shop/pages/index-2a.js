//Option 2 : Get data from client side / useEffect
import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { getProducts } from "../lib/Products";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  console.log("[HomePage] Render:", products);
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
