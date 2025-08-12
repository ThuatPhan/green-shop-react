import useProduct from "@/hooks/useProduct";
import { useParams } from "react-router-dom";
import ProductInfo from "@/components/ProductInfo";
import Breadcrumbs from "@/components/Breadcrumbs";
import useAddCartItem from "@/hooks/useAddCartItem";
import ErrorMessage from "@/components/ErrorMessage";
import RelatedProducts from "@/components/RelatedProducts";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";

const ProductDetails = () => {
  const { slug } = useParams();

  const { isPending: loadingProduct, product } = useProduct(slug);
  const { isPending: pendingAddItem, mutateAsync: addCartItem } =
    useAddCartItem();

  if (!product) {
    return <ErrorMessage message="Product not found" />;
  }

  const handleAddToCart = async () =>
    await addCartItem({ productId: product.id, quantity: 1 });

  return (
    <div className="mt-16">
      {loadingProduct ? (
        <ProductDetailsSkeleton />
      ) : (
        <>
          <Breadcrumbs product={product} />
          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <ProductImageGallery images={product.images} />

            <ProductInfo
              product={product}
              onAddToCart={handleAddToCart}
              isAddingToCart={pendingAddItem}
            />
          </div>
        </>
      )}

      <RelatedProducts relatedTo={product} />
    </div>
  );
};

export default ProductDetails;
