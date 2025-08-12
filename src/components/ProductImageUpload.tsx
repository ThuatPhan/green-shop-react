import { assets } from "@/assets/assets";

interface Props {
  images: (File | null)[];
  setImages: React.Dispatch<React.SetStateAction<(File | null)[]>>;
}

const ProductImageUpload: React.FC<Props> = ({ images, setImages }) => {
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  return (
    <div>
      <p className="text-base font-medium">Product Image</p>
      <div className="flex flex-wrap justify-between items-center gap-3 mt-2">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <label key={index} htmlFor={`image${index}`}>
              <input
                accept="image/*"
                type="file"
                id={`image${index}`}
                hidden
                onChange={(e) => handleImageChange(e, index)}
              />
              <img
                className="max-w-24 cursor-pointer"
                src={
                  images[index]
                    ? URL.createObjectURL(images[index]!)
                    : assets.upload_area
                }
                alt="uploadArea"
                width={100}
                height={100}
              />
            </label>
          ))}
      </div>
    </div>
  );
};

export default ProductImageUpload;
