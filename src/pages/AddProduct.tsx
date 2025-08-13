import { useState } from "react";
import useCategories from "@/hooks/useCategories";
import useAddProduct from "@/hooks/useAddProduct";
import { ProductCreation } from "@/models/Product";
import { useForm, Controller } from "react-hook-form";
import { uploadToCloudinary } from "@/helpers/UploadImage";
import ProductImageUpload from "@/components/ProductImageUpload";

type ProductFormData = Omit<ProductCreation, "images"> & { images: File[] };

const AddProduct = () => {
  const { isPending: loadingCategories, categories } = useCategories();
  const { mutateAsync: addProduct } = useAddProduct();

  const [pending, setPending] = useState(false);

  const {
    reset,
    control,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      description: "",
      images: [],
      price: 0,
      offerPrice: 0,
      categoryId: "",
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    setPending(true);
    try {
      const uploadPromises = data.images.map((file) =>
        uploadToCloudinary(file)
      );
      const images = await Promise.all(uploadPromises);

      await addProduct({
        ...data,
        images: images.map((img) => img.secure_url),
      });
    } catch (error) {
      console.error("Failed when creating product: ", error);
    } finally {
      reset();
      setPending(false);
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] justify-between bg-white">
      <form
        className="md:p-10 p-4 space-y-5 max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="images"
          control={control}
          rules={{
            validate: (value) =>
              value && value.length > 0
                ? true
                : "At least one image is required",
          }}
          render={({ field }) => (
            <ProductImageUpload
              images={field.value}
              setImages={(newImages) => field.onChange(newImages)}
            />
          )}
        />
        {errors.images && (
          <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
        )}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
            {...register("description")}
          ></textarea>
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">
            Category
          </label>
          {loadingCategories ? (
            <div className="w-full h-10 bg-gray-300 rounded animate-pulse" />
          ) : (
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              {...register("categoryId", { required: "Category is required" })}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          )}
          {errors.categoryId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              {...register("price", {
                required: "Price is required",
                validate: (value) =>
                  value > 0 || "Price must be greater than 0",
              })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              {...register("offerPrice", {
                required: "Offer price is required",
                validate: (value) => {
                  const price = getValues("price");
                  if (value <= 0) return "Offer price must be greater than 0";
                  else if (value > price)
                    return "Offer price must be less than or equal to Price";
                  return true;
                },
              })}
            />
            {errors.offerPrice && (
              <p className="text-red-500 text-sm mt-1">
                {errors.offerPrice.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={true}
          className={`px-8 py-2.5 font-medium rounded transition
          ${
            pending
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-primary hover:bg-primary-dull text-white cursor-pointer"
          }`}
        >
          {pending ? "Saving Product ..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
