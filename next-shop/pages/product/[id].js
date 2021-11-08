import Head from "next/head";
import Title from "../../components/Title";
import { getProduct, getProducts } from "../../lib/Products";
import { ApiError } from "../api/api";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}
function ProductPage({ product }) {
  console.log("[HomePage]: Render", product);
  return (
    <>
      <Head>
        <title>Detail Product</title>
      </Head>
      <main className="px-6 py-4">
        <Title childern={product.title} />
        <p>{product.desc}</p>
      </main>
    </>
  );
}
export default ProductPage;
