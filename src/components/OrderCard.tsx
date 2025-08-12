import { assets } from "@/assets/assets";
import type { Order } from "@/models/Order";

interface Props {
  order: Order;
}

const OrderCard: React.FC<Props> = ({ order }) => {
  return (
    <div
      key={order.id}
      className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
    >
      <div className="flex gap-5">
        <img className="w-16 h-16 object-cover" src={assets.box_icon} alt="" />
        <>
          <div className="flex flex-col justify-center">
            {order.items.map((item) => (
              <p key={item.id} className="font-medium">
                {item.product.name}{" "}
                <span
                  className={`text-primary ${item.quantity < 2 && "hidden"}`}
                >
                  x {item.quantity}
                </span>
              </p>
            ))}
          </div>
        </>
      </div>

      <div className="text-sm">
        <p className="font-medium mb-1">
          {order.shippingAddress.firstName} {order.shippingAddress.lastName}
        </p>
        <p>
          {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
          {order.shippingAddress.state},{order.shippingAddress.zipcode},{" "}
          {order.shippingAddress.country}
        </p>
      </div>

      <p className="font-medium text-base my-auto text-black/70">
        ${order.totalAmount}
      </p>

      <div className="flex flex-col text-sm">
        <p>Method: {order.paymentMethod}</p>
        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        <p>Status: {order.status}</p>
      </div>
    </div>
  );
};

export default OrderCard;
