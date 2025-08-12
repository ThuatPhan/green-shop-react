import { Order } from "@/models/Order";

interface Props {
  order: Order;
}

const UserOrderCard: React.FC<Props> = ({ order }) => {
  return (
    <div
      key={order.id}
      className="border border-gray-300 rounded-lg max-w-7xl mb-10 p-4 py-5"
    >
      <div className="hidden md:grid md:grid-cols-4 font-medium text-gray-700 border-b border-gray-300 pb-3 mb-3">
        <span>Product</span>
        <span className="text-center">Price</span>
        <span className="text-center">Qty</span>
        <span className="text-right">Subtotal</span>
      </div>

      {order.items.map((item, index) => (
        <div
          key={item.id}
          className={`py-4 text-gray-600 ${
            order.items.length !== index + 1 ? "border-b border-gray-200" : ""
          } md:grid md:grid-cols-4 md:items-center`}
        >
          <div className="flex items-center gap-4 mb-3 md:mb-0">
            <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-16 h-16 object-cover"
              />
            </div>
            <span className="text-lg font-medium text-gray-800">
              {item.product.name}
            </span>
          </div>

          <span className="text-left md:text-center block">
            <span className="md:hidden font-medium text-gray-500 mr-1">
              Price:
            </span>
            ${item.product.offerPrice}
          </span>

          <span className="text-left md:text-center block">
            <span className="md:hidden font-medium text-gray-500 mr-1">
              Qty:
            </span>
            {item.quantity}
          </span>

          <span className="text-primary font-medium text-left md:text-right block">
            <span className="md:hidden font-medium text-gray-500 mr-1">
              Subtotal:
            </span>
            ${item.subTotal}
          </span>
        </div>
      ))}

      <div className="flex flex-col items-start mt-4">
        <span>
          Tax (2%):{" "}
          <span className="text-primary-dull">
            ${(order.totalAmount * 0.02).toFixed(2)}
          </span>
        </span>
        <span>
          Total Amount:{" "}
          <span className="text-primary-dull">${order.totalAmount}</span>
        </span>
        <span>
          Payment Type:{" "}
          <span className="text-gray-400 md:font-medium">
            {order.paymentMethod}
          </span>
        </span>
        <span>
          Created At:{" "}
          <span className="text-gray-400 md:font-medium">
            {new Date(order.createdAt).toLocaleDateString()}
          </span>
        </span>
      </div>
    </div>
  );
};

export default UserOrderCard;
