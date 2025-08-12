import toast from "react-hot-toast";
import { addCartItem } from "@/apis/CartApi";
import { useAuth0 } from "@auth0/auth0-react";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { CartItemCreation } from "@/models/CartItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddCartItem = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth0();

  const mutation = useMutation({
    mutationFn: addCartItem,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_ITEMS],
        exact: false,
      });
      toast.success(`${data.data.product.name} added to your cart`);
    },
  });

  const safeMutation = async (payload: CartItemCreation) => {
    if (!isAuthenticated) {
      toast.error("Please login");
      return;
    }

    await mutation.mutateAsync(payload);
  };

  return { ...mutation, addCartItem: safeMutation };
};

export default useAddCartItem;
