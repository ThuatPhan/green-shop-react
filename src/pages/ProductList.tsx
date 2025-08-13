import { Product } from "@/models/Product";
import useProducts from "@/hooks/useProducts";
import useUpdateProductInstock from "@/hooks/useUpdateProductInstock";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProductList = () => {
  const { isPending: updating, mutateAsync: updateInstock } =
    useUpdateProductInstock();
  const {
    isPending,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    products,
  } = useProducts();

  const toggleInstock = async (product: Product) =>
    await updateInstock({ productId: product.id, inStock: !product.inStock });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Product</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate hidden md:block">
                  Selling Price
                </th>
                <th className="px-4 py-3 font-semibold truncate">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {isPending
                ? Array.from({ length: 10 }).map((_, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-500/20 animate-pulse"
                    >
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3">
                        <div className="border border-gray-300 rounded overflow-hidden">
                          <div className="w-16 h-16 bg-gray-300"></div>
                        </div>
                        <div className="h-4 bg-gray-300 rounded w-32 max-sm:hidden"></div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="h-4 bg-gray-300 rounded w-20"></div>
                      </td>
                      <td className="px-4 py-3 max-sm:hidden">
                        <div className="h-4 bg-gray-300 rounded w-16"></div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-12 h-7 bg-gray-300 rounded-full"></div>
                      </td>
                    </tr>
                  ))
                : products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-t border-gray-500/20"
                    >
                      <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                        <div className="border border-gray-300 rounded overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt="Product"
                            className="w-16"
                          />
                        </div>
                        <span className="truncate max-sm:hidden w-full">
                          {product.name}
                        </span>
                      </td>
                      <td className="px-4 py-3">{product.category.name}</td>
                      <td className="px-4 py-3 max-sm:hidden">
                        ${product.offerPrice}
                      </td>
                      <td className="px-4 py-3">
                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                          <input
                            type="checkbox"
                            checked={product.inStock}
                            disabled={updating}
                            className="sr-only peer"
                            onChange={() => toggleInstock(product)}
                          />
                          <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-primary-dull transition-colors duration-200"></div>
                          <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                        </label>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {hasNextPage && <div ref={ref} className="h-1" />}
      </div>
    </div>
  );
};

export default ProductList;
