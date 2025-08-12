import { useEffect } from "react";
import useOrders from "@/hooks/useOrders";
import OrderCard from "@/components/OrderCard";
import OrderCardSkeleton from "@/components/skeleton/OrderCardSkeleton";
import { useInView } from "react-intersection-observer";

const Orders = () => {
  const {
    isPending: pendingFetchOrders,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    orders,
  } = useOrders();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadingOrders = pendingFetchOrders || isFetchingNextPage;

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
      {loadingOrders &&
        Array.from({ length: 5 }).map((_, index) => (
          <OrderCardSkeleton key={index} />
        ))}

      {/* Trigger page load */}
      <div ref={ref} className="h-1" />
    </div>
  );
};

export default Orders;
