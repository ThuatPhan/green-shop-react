import { createOrder } from "@/apis/OrderApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.ORDERS],
        exact: false,
      });
    },
  });
};

export default useCreateOrder;
