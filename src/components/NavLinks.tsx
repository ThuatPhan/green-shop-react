import { User } from "@/models";
import { NavLink } from "react-router-dom";

interface Props {
  onLinkClick?: () => void;
  user?: User;
}

export const NavLinks: React.FC<Props> = ({ onLinkClick, user }) => {
  return (
    <>
      <NavLink to="/" onClick={onLinkClick}>
        Home
      </NavLink>
      <NavLink to="/products" onClick={onLinkClick}>
        Products
      </NavLink>
      {user && (
        <NavLink to="/orders" onClick={onLinkClick}>
          My Orders
        </NavLink>
      )}
      <NavLink to="/" onClick={onLinkClick}>
        Contact
      </NavLink>
    </>
  );
};
