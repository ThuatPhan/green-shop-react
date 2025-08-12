const CartItemSkeleton = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
      <div className="flex items-center md:gap-6 gap-3">
        <div className="w-24 h-24 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="hidden md:block w-40 h-5 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="w-16 h-5 bg-gray-300 rounded mx-auto animate-pulse"></div>

      <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
    </div>
  );
};

export default CartItemSkeleton;
