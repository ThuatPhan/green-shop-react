import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import { Route } from "react-router-dom";
import UserOrders from "@/pages/UserOrders";
import AddAddress from "@/pages/AddAddress";
import ClientLayout from "@/layouts/ClientLayout";
import ProductDetails from "@/pages/ProductDetails";
import ProductCategory from "@/pages/ProductCategory";

const ClientRoutes = () => {
  return (
    <Route element={<ClientLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<ProductCategory />} />
      <Route path="/products/:category/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/add-address" element={<AddAddress />} />
      <Route path="/orders" element={<UserOrders />} />
    </Route>
  );
};

export default ClientRoutes;
