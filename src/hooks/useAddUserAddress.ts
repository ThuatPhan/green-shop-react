import toast from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import { addUserAddress } from "@/apis/UserAddressApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddUserAddress = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth0();

  return useMutation({
    mutationFn: addUserAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-addresses", user?.sub],
      });
      toast.success("Address added successful");
    },
  });
};

export default useAddUserAddress;
