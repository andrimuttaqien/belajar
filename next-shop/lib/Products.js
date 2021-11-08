import { fetchJson } from "../pages/api/api";
const { CMS_URL } = process.env;
export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/products`);
  return products.map(stripProduct);
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.title,
    desc: product.description,
  };
}
