import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

const BestSeller = () => {
  const { isPending, products } = useProducts();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {isPending
          ? Array.from({ length: 10 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products
              .filter((product) => product.inStock)
              .slice(0, 10)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default BestSeller;
