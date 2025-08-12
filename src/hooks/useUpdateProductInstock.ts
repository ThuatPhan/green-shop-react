import { updateProductInstock } from "@/apis/ProductApi";
import { QUERY_KEYS } from "@/constants/QueryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateProductInstock = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProductInstock,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS],
        exact: false,
      });
    },
  });
};

export default useUpdateProductInstock;
