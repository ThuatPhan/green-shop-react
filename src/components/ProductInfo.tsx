import { Product } from "@/models/Product";
import ProductRating from "@/components/ProductRating";

interface Props {
  product: Product;
  onAddToCart: () => void;
  isAddingToCart: boolean;
}

const ProductInfo: React.FC<Props> = ({
  product,
  onAddToCart,
  isAddingToCart,
}) => {
  return (
    <div className="text-sm w-full md:w-1/2">
      <h1 className="text-3xl font-medium">{product.name}</h1>
      <ProductRating rating={product.rating} />
      <div className="mt-6">
        <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
        <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
        <span className="text-gray-500/70">(inclusive of all taxes)</span>
      </div>
      <p className="text-base font-medium mt-6">About Product</p>
      <div className="list-disc text-gray-500/70">
        <span>{product.description}</span>
      </div>
      <div className="flex items-center mt-10 gap-4 text-base">
        <button
          onClick={onAddToCart}
          disabled={isAddingToCart}
          className={`w-full py-3.5 font-medium transition ${
            isAddingToCart
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-gray-100 cursor-pointer text-gray-800/80 hover:bg-gray-200"
          }`}
        >
          {isAddingToCart ? "Adding ..." : "Add to Cart"}
        </button>
        <button className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
