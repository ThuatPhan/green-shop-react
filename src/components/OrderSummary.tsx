import { useState } from "react";
import toast from "react-hot-toast";
import { CartItem } from "@/models/CartItem";
import { useNavigate } from "react-router-dom";
import useCreateOrder from "@/hooks/useCreateOrder";
import { PaymentMethod, UserAddress } from "@/models";
import useUserAddresses from "@/hooks/useUserAddresses";
import useCreateCheckoutSession from "@/hooks/useCreateCheckoutSession";

interface Props {
  cartItems: CartItem[];
}

const OrderSummary: React.FC<Props> = ({ cartItems }) => {
  const { isPending: loadingAddresses, userAddresses } = useUserAddresses();
  const { mutateAsync: createOrder } = useCreateOrder();
  const { mutateAsync: createCheckoutSession } = useCreateCheckoutSession();

  const navigate = useNavigate();
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<UserAddress | null>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.COD
  );
  const [pending, setPending] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.offerPrice,
    0
  );
  const price = totalPrice;
  const taxRate = 0.02;
  const taxAmount = +(price * taxRate).toFixed(2);
  const totalAmountWithTax = price + taxAmount;

  const handleCreateOrder = async () => {
    setPending(true);
    try {
      if (!selectedAddress) {
        toast.error("Please select shipping address");
        return;
      }

      const items = cartItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }));
      const payload = { items, shippingAddressId: selectedAddress.id };

      const { data: createdOrder } = await createOrder(payload);

      if (paymentMethod === PaymentMethod.CARD) {
        toast.loading("Creating checkout session");
        const { data: checkoutUrl } = await createCheckoutSession(
          createdOrder.id
        );

        toast.remove();
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Failed when creating order: ", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70 self-start">
      <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
      <hr className="border-gray-300 my-5" />

      <div className="mb-6">
        <p className="text-sm font-medium uppercase">Delivery Address</p>
        <div className="relative flex justify-between items-start mt-2">
          <p className="text-gray-500">
            {selectedAddress
              ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country} ${selectedAddress.zipcode}`
              : "No Address Selected"}
          </p>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-primary hover:underline cursor-pointer"
          >
            Change
          </button>
          {showAddress && (
            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
              {loadingAddresses
                ? Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="p-2">
                      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                    </div>
                  ))
                : userAddresses.map((address) => (
                    <p
                      key={address.id}
                      onClick={() => {
                        setSelectedAddress(address);
                        setShowAddress(false);
                      }}
                      className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {`${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zipcode}`}
                    </p>
                  ))}

              <p
                onClick={() => {
                  setShowAddress(false);
                  navigate("/add-address");
                }}
                className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10"
              >
                Add address
              </p>
            </div>
          )}
        </div>

        <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

        <select
          className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
        >
          <option value={PaymentMethod.COD}>Cash On Delivery</option>
          <option value={PaymentMethod.CARD}>Online Payment</option>
        </select>
      </div>

      <hr className="border-gray-300" />

      <div className="text-gray-500 mt-4 space-y-2">
        <p className="flex justify-between">
          <span>Price</span>
          <span>${price.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping Fee</span>
          <span className="text-green-600">Free</span>
        </p>
        <p className="flex justify-between">
          <span>Tax (2%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </p>
        <p className="flex justify-between text-lg font-medium mt-3">
          <span>Total Amount:</span>
          <span>${totalAmountWithTax.toFixed(2)}</span>
        </p>
      </div>

      <button
        onClick={handleCreateOrder}
        disabled={pending || cartItems.length === 0}
        className={`w-full py-3 mt-6 font-medium transition ${
          pending || cartItems.length === 0
            ? "bg-gray-400 cursor-not-allowed text-gray-700"
            : "bg-primary cursor-pointer text-white hover:bg-primary-dull"
        }`}
      >
        {pending ? "Creating order ..." : "Place Order"}
      </button>
    </div>
  );
};

export default OrderSummary;
