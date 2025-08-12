import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { getUserAddresses } from "@/apis/UserAddressApi";

const useUserAddresses = () => {
  const { isAuthenticated, user } = useAuth0();
  const query = useQuery({
    queryFn: getUserAddresses,
    queryKey: ["user-addresses", user?.sub],
    staleTime: 1000 * 60 * 5,
    enabled: !!isAuthenticated && !!user,
  });

  return { ...query, userAddresses: query.data?.data ?? [] };
};

export default useUserAddresses;
