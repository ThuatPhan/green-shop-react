import { useEffect } from "react";
import { assets } from "@/assets/assets";
import CartItem from "@/components/CartItem";
import { useNavigate } from "react-router-dom";
import useCartItems from "@/hooks/useCartItems";
import OrderSummary from "@/components/OrderSummary";
import { useInView } from "react-intersection-observer";
import useRemoveCartItem from "@/hooks/useRemoveCartItem";
import CartItemSkeleton from "@/components/skeleton/CartItemSkeleton";

const Cart = () => {
  const navigate = useNavigate();

  const { mutateAsync: removeCartItem } = useRemoveCartItem();

  const {
    isPending: pendingFetchItems,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    cartItems,
  } = useCartItems();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadingItems = pendingFetchItems || isFetchingNextPage;

  return (
    <div className="flex flex-col md:flex-row justify-between mt-16">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart{" "}
          <span className="text-sm text-primary">{cartItems.length} Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3"></div>

        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeCartItem} />
        ))}

        {loadingItems &&
          Array.from({ length: 3 }).map((_, index) => (
            <CartItemSkeleton key={index} />
          ))}

        {/* Trigger page load */}
        {hasNextPage && <div ref={ref} className="h-1" />}

        <button
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium"
        >
          <img
            src={assets.arrow_right_icon_colored}
            alt="arrow"
            className="group-hover:-translate-x-1 transition"
          />
          Continue Shopping
        </button>
      </div>

      <OrderSummary cartItems={cartItems} />
    </div>
  );
};

export default Cart;
