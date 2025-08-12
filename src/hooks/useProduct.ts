import { getProduct } from "@/apis/ProductApi";
import { useQuery } from "@tanstack/react-query";

const useProduct = (slug: string | undefined) => {
  const query = useQuery({
    queryFn: () => getProduct(slug!),
    queryKey: ["product", slug],
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });

  return { ...query, product: query.data?.data };
};

export default useProduct;
