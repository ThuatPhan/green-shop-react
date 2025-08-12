import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "@/apis/OrderApi";

const useCreateCheckoutSession = () => {
  return useMutation({
    mutationFn: createCheckoutSession,
  });
};

export default useCreateCheckoutSession;
