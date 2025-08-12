import { getProducts } from "@/apis/ProductApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useProducts = (searchQuery?: string) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) => getProducts(pageParam, 5, searchQuery),
    queryKey: searchQuery
      ? [QUERY_KEYS.PRODUCTS, "query", searchQuery]
      : [QUERY_KEYS.PRODUCTS],
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    products: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useProducts;
