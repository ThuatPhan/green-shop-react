import { useAuth0 } from "@auth0/auth0-react";
import { getUserOrders } from "@/apis/OrderApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useUserOrders = () => {
  const { isAuthenticated, user } = useAuth0();

  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryFn: ({ pageParam }) => getUserOrders(pageParam, 10),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    queryKey: [QUERY_KEYS.ORDERS, "user", user?.sub],
    enabled: !!isAuthenticated && !!user,
  });

  return {
    ...query,
    orders: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useUserOrders;
