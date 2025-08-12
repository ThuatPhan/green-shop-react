import { getCategories } from "@/apis/CategoryApi";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const query = useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
    staleTime: 1000 * 60 * 30,
  });

  return { ...query, categories: query.data?.data ?? [] };
};

export default useCategories;
