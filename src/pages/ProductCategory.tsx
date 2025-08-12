import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCategory from "@/hooks/useCategory";
import ProductCard from "@/components/ProductCard";
import ErrorMessage from "@/components/ErrorMessage";
import { useInView } from "react-intersection-observer";
import useProductByCategory from "@/hooks/useProductByCategory";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

const ProductCategory = () => {
  const { category: slug } = useParams();
  const { isPending: loadingCategory, category } = useCategory(slug);

  const {
    isPending: pendingFetchProducts,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    products,
  } = useProductByCategory(category?.id);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadingProducts = pendingFetchProducts || isFetchingNextPage;

  const inStockProducts = products.filter((product) => product.inStock);

  if (!loadingCategory && !category) {
    return <ErrorMessage message="Category not found." />;
  }

  if (!loadingProducts && inStockProducts.length === 0) {
    return <ErrorMessage message="No products found in this category." />;
  }

  return (
    <div className="mt-16">
      {/* Category */}
      {loadingCategory ? (
        <div className="flex flex-col items-end w-max animate-pulse">
          <div className="bg-gray-300 rounded w-48 h-8 mb-1" />
          <div className="bg-gray-300 rounded-full w-16 h-1" />
        </div>
      ) : (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">{category?.name.toUpperCase()}</p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}

      {/* Products + skeletons when loading */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {inStockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {loadingProducts &&
          Array.from({ length: 5 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>

      <div className="flex justify-center">
        {hasNextPage && <div ref={ref} className="h-1" />}

        {!hasNextPage && !loadingProducts && (
          <p className="text-center mt-8 text-gray-500">
            You've reached the end! 👋
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
