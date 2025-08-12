const OrderCardSkeleton = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800">
      <div className="flex gap-5">
        <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex flex-col justify-center space-y-2">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 rounded h-5 w-48"
            ></div>
          ))}
        </div>
      </div>

      <div className="text-sm space-y-1">
        <div className="animate-pulse bg-gray-200 rounded h-4 w-32"></div>
        <div className="animate-pulse bg-gray-200 rounded h-4 w-full"></div>
      </div>

      <div className="font-medium text-base my-auto text-black/70 animate-pulse bg-gray-200 rounded h-5 w-16"></div>

      <div className="flex flex-col text-sm space-y-1">
        <div className="animate-pulse bg-gray-200 rounded h-4 w-36"></div>
        <div className="animate-pulse bg-gray-200 rounded h-4 w-28"></div>
        <div className="animate-pulse bg-gray-200 rounded h-4 w-32"></div>
      </div>
    </div>
  );
};

export default OrderCardSkeleton;
