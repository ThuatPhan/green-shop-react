import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
