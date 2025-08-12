import { useEffect } from "react";
import useProducts from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const {
    isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    products,
  } = useProducts(searchQuery);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadingProducts = isPending || isFetchingNextPage;
  const inStockProducts = products.filter((product) => product.inStock);

  if (!loadingProducts && inStockProducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-2xl font-medium text-primary">No products found.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {inStockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loadingProducts &&
          Array.from({ length: 5 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>

      {hasNextPage && <div ref={ref} className="h-1" />}

      {!hasNextPage && !loadingProducts && (
        <p className="text-center mt-8 text-gray-500">
          You've reached the end! 👋
        </p>
      )}
    </div>
  );
};

export default Products;
