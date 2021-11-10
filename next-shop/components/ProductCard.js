import Link from "next/link";
function ProductCard({ product }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl">
      <Link href={`/product/${product.id}`}>
        <a>
          <img src={product.pictureUrl} alt="" />
          <div className="p-2 flex justify-between items-baseline">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <span>{product.price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
export default ProductCard;
