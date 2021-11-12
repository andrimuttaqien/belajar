import Image from "next/image";
import { getProduct, getProducts } from "../../lib/Products";
import { ApiError } from "../api/api";
import Page from "../../components/Page";

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
    <Page title={product.title}>
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image
              src={product.pictureUrl}
              alt={product.pictureUrl}
              width={320}
              height={240}
            />
          </div>
          <div className="flex-1 lg:ml-4">
            <p className="text-sm">{product.desc}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
          </div>
        </div>
    </Page>
  );
}
export default ProductPage;
