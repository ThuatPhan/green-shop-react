import { useNavigate } from "react-router-dom";
import useCategories from "@/hooks/useCategories";
import CategoryCard from "@/components/CategoryCard";
import CategorySkeleton from "@/components/skeleton/CategorySkeleton";

const Categories = () => {
  const navigate = useNavigate();
  const { isPending, categories } = useCategories();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {isPending
          ? Array.from({ length: 7 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))
          : categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                navigate={navigate}
              />
            ))}
      </div>
    </div>
  );
};

export default Categories;
