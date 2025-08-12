import { Category } from "@/models/Category";
import { NavigateFunction } from "react-router-dom";

interface Props {
  category: Category;
  navigate: NavigateFunction;
}

const CategoryCard: React.FC<Props> = ({ category, navigate }) => {
  return (
    <div
      key={category.name}
      onClick={() => {
        navigate(`/products/${category.slug.toLowerCase()}`);
        scrollTo(0, 0);
      }}
      className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
      style={{ backgroundColor: category.bgColor }}
    >
      <img
        src={category.image}
        alt={category.name}
        className="group-hover:scale-108 transition max-w-28"
      />
      <p className="text-sm font-medium">{category.name}</p>
    </div>
  );
};

export default CategoryCard;
