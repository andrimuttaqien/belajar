import { fetchJson } from "../pages/api/api";
// const { CMS_URL } = process.env;
const CMS_URL = "http://localhost:1337";

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  // const product = await fetchJson(`http://localhost:1337/products/${id}`);
  return stripProduct(product);
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  // const products = await fetchJson("http://localhost:1337/products/");
  return products.map(stripProduct);
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    price: "$" + product.price.toFixed(2),
    desc: product.description,
    pictureUrl: CMS_URL + product.picture.url,
  };
}
