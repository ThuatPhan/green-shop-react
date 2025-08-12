import { useState, useEffect } from "react";

interface Props {
  images: string[];
}

const ProductImageGallery: React.FC<Props> = ({ images }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      setThumbnail(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setThumbnail(image)}
            className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
        {thumbnail && (
          <img
            src={thumbnail}
            alt="Selected product"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;
