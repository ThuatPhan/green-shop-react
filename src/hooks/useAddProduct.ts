import toast from "react-hot-toast";
import { addProduct } from "@/apis/ProductApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success(`${data.data.name} added successful`);
      queryClient.invalidateQueries({ queryKey: ["products"], exact: false });
    },
  });
};

export default useAddProduct;
