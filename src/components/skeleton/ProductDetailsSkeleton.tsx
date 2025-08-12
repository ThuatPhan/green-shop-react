const ProductDetailsSkeleton = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="bg-gray-300 rounded w-12 h-4"></div>
        <span>/</span>
        <div className="bg-gray-300 rounded w-16 h-4"></div>
        <span>/</span>
        <div className="bg-gray-300 rounded w-20 h-4"></div>
        <span>/</span>
        <div className="bg-gray-300 rounded w-28 h-4"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mt-4 animate-pulse">
        {/* Skeleton for Image Gallery */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-300 h-20 w-20 rounded" />
            ))}
          </div>
          <div className="border border-gray-300 bg-gray-300 h-[400px] w-[400px] rounded" />
        </div>
        {/* Skeleton for Product Info */}
        <div className="text-sm w-full md:w-1/2 space-y-4">
          <div className="h-10 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="mt-6 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div>
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="space-y-1">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-10 gap-4 text-base">
            <div className="w-full h-12 bg-gray-300 rounded"></div>
            <div className="w-full h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
