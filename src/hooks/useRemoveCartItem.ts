import toast from "react-hot-toast";
import { removeCartItem } from "@/apis/CartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QueryKeys";

const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_ITEMS],
        exact: false,
      });
      toast.success("Item removed from your cart");
    },
  });
};

export default useRemoveCartItem;
