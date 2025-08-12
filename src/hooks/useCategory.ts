import { getCategory } from "@/apis/CategoryApi";
import { useQuery } from "@tanstack/react-query";

const useCategory = (slug: string | undefined) => {
  const query = useQuery({
    queryFn: () => getCategory(slug!),
    queryKey: ["category", slug],
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  });

  return { ...query, category: query.data?.data };
};

export default useCategory;
