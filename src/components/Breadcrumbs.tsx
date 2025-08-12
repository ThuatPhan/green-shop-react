import { Link } from "react-router-dom";
import { Product } from "@/models/Product";

const Breadcrumbs: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <Link to="/">Home</Link> /<Link to="/products"> Products</Link> /{" "}
      <Link to={`/products/${product.category.slug}`} className="capitalize">
        {product.category.slug.toLowerCase()}
      </Link>{" "}
      /<span className="text-primary"> {product.name}</span>
    </div>
  );
};

export default Breadcrumbs;
