import { useAuth0 } from "@auth0/auth0-react";
import { getCartItems } from "@/apis/CartApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

const useCartItems = () => {
  const { isAuthenticated, user } = useAuth0();
  const query = useInfiniteQuery({
    queryFn: ({ pageParam }) => getCartItems(pageParam, 5),
    queryKey: [QUERY_KEYS.CART_ITEMS, user?.sub],
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.hasNext ? pages.length : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    enabled: !!isAuthenticated && !!user,
  });

  return {
    ...query,
    cartItems: query.data?.pages.flatMap((page) => page.data.data) ?? [],
  };
};

export default useCartItems;
