import React from "react";
import { Link } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

const Logo: React.FC<Props> = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <span className="text-2xl font-semibold text-primary">GreenShop</span>
    </Link>
  );
};

export default Logo;
