import { useQuery } from "react-query";
import Page from "../components/Page";
import { fetchJson } from "./api/api";

function formatCurrency(value) {
  return "$ " + value.toFixed(2);
}

function buildCart(cartItems) {
  let total = 0.0;
  const items = [];
  for (const cartItem of cartItems) {
    const itemTotal = cartItem.product.price * cartItem.quantity;
    total += itemTotal;
    items.push({ ...cartItem, total: itemTotal });
  }
  return { items, total };
}

function CartTable({ cartItems }) {
  const cart = buildCart(cartItems);
  //   console.log(cart);
  return (
    <>
      <table className="rounded-t-md m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <thead>
          <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-3">No.</th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((cartItem) => (
            <tr
              className="bg-gray-100 border-b border-gray-200"
              key={cartItem.id}
            >
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">{cartItem.product.title}</td>
              <td className="px-4 py-3">{cartItem.quantity}</td>
              <td className="px-4 py-3">{cartItem.product.price}</td>
              <td className="px-4 py-3">{formatCurrency(cartItem.total)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3"></td>
            <td className="px-4 py-3"></td>
            <td className="px-4 py-3"></td>
            <th className="px-4 py-3">Grand Total</th>
            <th className="px-4 py-3">{formatCurrency(cart.total)}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
export default function CartPage() {
  const query = useQuery("cartItems", () => fetchJson("/api/cart"));
  const cartItems = query.data;
  console.log("Cart : ", cartItems);
  return (
    <>
      <Page title="Shooping Cart">
        {cartItems && <CartTable cartItems={cartItems} />}
      </Page>
    </>
  );
}
