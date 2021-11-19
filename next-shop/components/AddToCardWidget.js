import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import { fetchJson } from "../pages/api/api";
import Button from "./Button";

export default function AddToCardWidget({ productId }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const mutation = useMutation(() => {
    fetchJson("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, quantity }),
    });
  });

  //   const handleClick = async () => {
  //     // console.log("Should Add To Chart : ", productId, quantity);
  //     await mutation.mutateAsync();
  //     router.push("/cart");
  //     // alert("TEST");
  //   };

  const handleClick = () => {
    alert("TEST");
  };

  return (
    <div className="py-2">
      <input
        type="number"
        min="1"
        className="border rounded px-3 py-1 mr-2 w-16 text-right"
        value={quantity.toString()}
        onChange={(event) => setQuantity(parseInt(event.target.value))}
      />
      {mutation.isLoading ? (
        <p>Loading</p>
      ) : (
        <Button onClick={handleClick}>Add To Cart</Button>
      )}
    </div>
  );
}
