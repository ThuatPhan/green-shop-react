import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Searchbox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setInputValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchTerm = inputValue.trim();

      if (searchTerm) {
        navigate(`/products?q=${encodeURIComponent(searchTerm)}`, {
          replace: true,
        });
      } else {
        navigate(`/products`, { replace: true });
      }
    }
  };

  return (
    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
      <input
        type="text"
        placeholder="Search products..."
        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      <img src={assets.search_icon} alt="search" className="w-4 h-4" />
    </div>
  );
};

export default Searchbox;
