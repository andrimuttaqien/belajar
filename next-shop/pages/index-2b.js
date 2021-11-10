//Option 2 : Get data from client side / useEffect
// from an internal API route
import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
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
