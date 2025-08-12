import { QUERY_KEYS } from "@/constants/QueryKeys";
import { updateItemQuantity } from "@/apis/CartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateItemQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_ITEMS],
        exact: false,
      });
    },
  });
};

export default useUpdateCartItemQuantity;
