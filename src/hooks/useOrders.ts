import { getOrders } from "@/apis/OrderApi";
import { useAuth0 } from "@auth0/auth0-react";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useOrders = () => {
  const { isAuthenticated, user } = useAuth0();

  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getOrders(pageParam, 5),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    queryKey: [QUERY_KEYS.ORDERS, user?.sub],
    staleTime: 1000 * 60 * 2,
    enabled: !!isAuthenticated && !!user,
  });

  return {
    ...query,
    orders: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useOrders;
