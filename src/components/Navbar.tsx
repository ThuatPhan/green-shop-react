import { useState } from "react";
import Logo from "@/components/Logo";
import { assets } from "@/assets/assets";
import Profile from "@/components/Profile";
import CartIcon from "@/components/CartIcon";
import { useAuth0 } from "@auth0/auth0-react";
import Searchbox from "@/components/Searchbox";
import { useNavigate } from "react-router-dom";
import useCartItems from "@/hooks/useCartItems";
import { NavLinks } from "@/components/NavLinks";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const handleLogin = async () => await loginWithRedirect();

  const { cartItems } = useCartItems();

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Logo onClick={() => setOpen(false)} />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => navigate("/admin")}
          className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80"
        >
          Admin Dashboard
        </button>

        <NavLinks />

        <Searchbox />

        <CartIcon
          totalItems={cartItems.length}
          onClick={() => navigate("/cart")}
        />

        {user ? (
          <Profile loading={isLoading} user={user} logoutFunction={logout} />
        ) : (
          <button
            onClick={handleLogin}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      <div className="flex items-center gap-6 md:hidden">
        <CartIcon
          totalItems={cartItems.length}
          onClick={() => navigate("/cart")}
        />

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="menu" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-20`}
        >
          <NavLinks onLinkClick={() => setOpen(false)} user={user} />
          <button
            onClick={() => (user ? logout() : loginWithRedirect())}
            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
