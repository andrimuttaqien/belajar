import { fetchJson } from "../pages/api/api";
const { CMS_URL } = process.env;
// const CMS_URL = "http://localhost:1337";

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    price: "$ " + product.price.toFixed(2),
    desc: product.description,
    pictureUrl: CMS_URL + product.picture.url,
  };
}
