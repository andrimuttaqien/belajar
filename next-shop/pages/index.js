import { getProducts } from "../lib/Products";
import ProductCard from "../components/ProductCard";
import Page from "../components/Page";

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
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}
export default Home;
