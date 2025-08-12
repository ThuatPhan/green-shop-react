import { getRelatedProducts } from "@/apis/ProductApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useRelatedProducts = (productId: string | undefined) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) => {
      return getRelatedProducts(productId!, pageParam, 5);
    },
    queryKey: [QUERY_KEYS.PRODUCTS, "related", productId],
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    initialPageParam: 0,
    enabled: !!productId,
    staleTime: 1000 * 60 * 3,
  });

  return {
    ...query,
    products: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useRelatedProducts;
