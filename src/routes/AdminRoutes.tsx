import Orders from "@/pages/Orders";
import { Route } from "react-router-dom";
import AddProduct from "@/pages/AddProduct";
import ProductList from "@/pages/ProductList";
import AdminLayout from "@/layouts/AdminLayout";

const AdminRoutes = () => {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<ProductList />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="orders" element={<Orders />} />
    </Route>
  );
};

export default AdminRoutes;
