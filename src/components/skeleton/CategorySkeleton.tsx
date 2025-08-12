const CategorySkeleton = () => {
  return (
    <div className="animate-pulse cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-gray-200 min-w-[112px] min-h-[120px]">
      <div className="bg-gray-300 rounded w-28 h-28 mb-2"></div>
      <div className="bg-gray-300 rounded w-20 h-4"></div>
    </div>
  );
};

export default CategorySkeleton;
