import Head from "next/head";
import Image from "next/image";
import Title from "../components/Title";

export default function Home() {
  const products = [
    { id: "1", title: "Product 1", price: 1000 },
    { id: "2", title: "Product 2", price: 2000 },
    { id: "3", title: "Product 3", price: 3000 },
  ];
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
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
