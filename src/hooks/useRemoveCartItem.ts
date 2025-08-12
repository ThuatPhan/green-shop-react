import toast from "react-hot-toast";
import { removeCartItem } from "@/apis/CartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/QueryKeys";

const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      toast.success("Item removed from your cart");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_ITEMS],
        exact: false,
      });
    },
  });
};

export default useRemoveCartItem;
