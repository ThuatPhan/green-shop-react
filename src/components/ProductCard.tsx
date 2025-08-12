import { assets } from "@/assets/assets";
import { Product } from "@/models/Product";
import { useNavigate } from "react-router-dom";
import useAddCartItem from "@/hooks/useAddCartItem";
import ProductRating from "@/components/ProductRating";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { isPending, addCartItem } = useAddCartItem();

  const handleAddCartItem = async () => {
    await addCartItem({ productId: product.id, quantity: 1 });
  };

  return (
    <div className="border border-gray-500/20 rounded-md max-w-54 md:px-4 px-3 py-2">
      <div
        onClick={() => {
          navigate(`/products/${product.category.slug}/${product.slug}`);
          scrollTo(0, 0);
        }}
        className="group cursor-pointer flex items-center justify-center px-2"
      >
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category.name}</p>

        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>

        <ProductRating rating={product.rating} />

        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-text-primary">
            ${product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${product.price}
            </span>
          </p>
          <button
            disabled={isPending}
            onClick={handleAddCartItem}
            className={`flex items-center justify-center gap-1 border md:w-[80px] w-[64px] h-[34px] rounded transition
            ${
              isPending
                ? "bg-gray-400 cursor-not-allowed text-gray-700 border-gray-400"
                : "bg-primary/10 border-primary/40 cursor-pointer text-primary"
            }`}
          >
            <img src={assets.cart_icon} alt="cart_icon" />
            {isPending ? "Adding" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
