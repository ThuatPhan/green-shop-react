import { Product } from "@/models/Product";
import ProductCard from "@/components/ProductCard";
import useRelatedProducts from "@/hooks/useRelatedProducts";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

interface Props {
  relatedTo: Product;
}

const RelatedProducts: React.FC<Props> = ({ relatedTo }) => {
  const {
    isPending,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    products,
  } = useRelatedProducts(relatedTo.id);

  const inStockProducts = products.filter((product) => product.inStock);

  const loadingProducts = isPending || isFetchingNextPage;

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center w-max">
        <p className="text-3xl font-medium">Related Products</p>
        <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
        {inStockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loadingProducts &&
          Array.from({ length: 5 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>
      {!loadingProducts && inStockProducts.length === 0 && (
        <div className="mt-10 text-gray-500 text-lg">
          No related products available.
        </div>
      )}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition"
        >
          See more
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
