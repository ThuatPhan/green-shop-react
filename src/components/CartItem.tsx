import type { CartItem } from "@/models/CartItem";
import { InputNumber, InputNumberProps } from "antd";
import useUpdateCartItemQuantity from "@/hooks/useUpdateCartItemQuantity";

interface Props {
  item: CartItem;
  onRemove: (cartItemId: string) => Promise<void>;
}

const CartItem: React.FC<Props> = ({ item, onRemove }) => {
  const { product } = item;
  const { isPending, mutateAsync: updateItemQuantity } =
    useUpdateCartItemQuantity();

  const handleQtyChange: InputNumberProps["onChange"] = async (value) =>
    await updateItemQuantity({ itemId: item.id, quantity: Number(value) });

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
      <div className="flex items-center md:gap-6 gap-3">
        <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
          <img
            className="max-w-full h-full object-cover"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
        <div>
          <p className="hidden md:block font-semibold">{product.name}</p>
          <div className="font-normal text-gray-500/70">
            <div className="flex justify-center items-center">
              <p>Qty:</p>
              <InputNumber
                size="small"
                min={1}
                disabled={isPending}
                defaultValue={item.quantity}
                onChange={handleQtyChange}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">${product.offerPrice * item.quantity}</p>
      <button
        onClick={() => onRemove(item.id)}
        className="cursor-pointer mx-auto"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
            stroke="#FF532E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
