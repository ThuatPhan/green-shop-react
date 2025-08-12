const UserOrderCardSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-lg max-w-7xl mb-10 p-4 py-5">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className={`py-4 text-gray-600 ${
            2 !== index + 1 ? "border-b border-gray-200" : ""
          } md:grid md:grid-cols-4 md:items-center`}
        >
          <div className="flex items-center gap-4 mb-3 md:mb-0">
            <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0 animate-pulse">
              <div className="bg-gray-200 rounded-lg w-16 h-16"></div>
            </div>
            <div className="animate-pulse bg-gray-200 rounded h-6 w-40"></div>
          </div>

          <span className="text-left md:text-center block">
            <span className="animate-pulse bg-gray-200 rounded inline-block h-5 w-16"></span>
          </span>

          <span className="text-left md:text-center block">
            <span className="animate-pulse bg-gray-200 rounded inline-block h-5 w-8"></span>
          </span>

          <span className="text-primary font-medium text-left md:text-right block">
            <span className="animate-pulse bg-gray-200 rounded inline-block h-5 w-20"></span>
          </span>
        </div>
      ))}

      <div className="flex flex-col items-start mt-4 space-y-2">
        <span className="flex items-center">
          <span className="animate-pulse bg-gray-200 rounded ml-2 h-5 w-16"></span>
        </span>
        <span className="flex items-center">
          <span className="animate-pulse bg-gray-200 rounded ml-2 h-5 w-20"></span>
        </span>
        <span className="flex items-center">
          <span className="animate-pulse bg-gray-200 rounded ml-2 h-5 w-24"></span>
        </span>
        <span className="flex items-center">
          <span className="animate-pulse bg-gray-200 rounded ml-2 h-5 w-28"></span>
        </span>
      </div>
    </div>
  );
};

export default UserOrderCardSkeleton;
