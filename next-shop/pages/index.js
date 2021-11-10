import Head from "next/head";

import Title from "../components/Title";
import Link from "next/link";
import { getProducts } from "../lib/Products";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
function Home({ products }) {
  //   const products = [
  //     { id: "1", title: "Product 1", price: 1000 },
  //     { id: "2", title: "Product 2", price: 2000 },
  //     { id: "3", title: "Product 3", price: 3000 },
  //   ];
  //   console.log(products);

  console.log("[HomePage]: Render");
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title childern="Home Page" />
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
        {/* 
          <ul>
          <li>
            <Link href="index-1a">
              <a>Index 1a</a>
            </Link>
          </li>
          <li>
            <Link href="index-1b">
              <a>Index 1b</a>
            </Link>
          </li>
          <li>
            <Link href="index-1c">
              <a>Index 1c</a>
            </Link>
          </li>
          <li>
            <Link href="index-2">
              <a>Index 2</a>
            </Link>
          </li> 
          <ul>
        */}
      </main>
    </>
  );
}
export default Home;
