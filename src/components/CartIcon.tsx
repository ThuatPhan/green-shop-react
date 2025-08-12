import { assets } from "@/assets/assets";

interface Props {
  totalItems: number;
  onClick: () => void;
}

const CartIcon: React.FC<Props> = ({ totalItems, onClick }) => {
  return (
    <div onClick={onClick} className="relative cursor-pointer">
      <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80" />
      <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
        {totalItems}
      </button>
    </div>
  );
};

export default CartIcon;
