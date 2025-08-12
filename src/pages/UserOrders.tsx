import { useEffect } from "react";
import useUserOrders from "@/hooks/useUserOrders";
import ErrorMessage from "@/components/ErrorMessage";
import UserOrderCard from "@/components/UserOrderCard";
import { useInView } from "react-intersection-observer";
import UserOrderCardSkeleton from "@/components/skeleton/UserOrderCardSkeleton";

const UserOrders = () => {
  const {
    isPending: pendingFetchOrders,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    orders,
  } = useUserOrders();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadingOrders = pendingFetchOrders || isFetchingNextPage;

  if (!pendingFetchOrders && orders.length === 0) {
    return <ErrorMessage message="You don't have any orders" />;
  }

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {orders.map((order) => (
        <UserOrderCard key={order.id} order={order} />
      ))}

      {loadingOrders &&
        Array.from({ length: 5 }).map((_, index) => (
          <UserOrderCardSkeleton key={index} />
        ))}

      {/* Trigger load thêm */}
      <div ref={ref} className="h-1" />
    </div>
  );
};

export default UserOrders;
