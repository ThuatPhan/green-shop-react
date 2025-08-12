import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/apis/ProductApi";

const useProductByCategory = (categoryId: string | undefined) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) => {
      return getProductsByCategory(categoryId!, pageParam, 2);
    },
    queryKey: [QUERY_KEYS.PRODUCTS, "category", categoryId],
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    initialPageParam: 0,
    enabled: !!categoryId,
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    products: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useProductByCategory;
