const ProductSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-md max-w-[216px] md:px-4 px-3 py-2 animate-pulse">
      <div className="flex items-center justify-center px-2">
        <div className="bg-gray-300 rounded w-[104px] md:w-[144px] h-[104px] md:h-[144px]" />
      </div>
      <div className="mt-3 space-y-2">
        <div className="bg-gray-300 rounded h-4 w-1/3"></div>
        <div className="bg-gray-300 rounded h-6 w-full"></div>
        <div className="bg-gray-300 rounded h-4 w-2/3"></div>
        <div className="flex items-end justify-between mt-3">
          <div className="bg-gray-300 rounded h-6 w-20"></div>
          <div className="bg-gray-300 rounded h-[34px] w-[80px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
