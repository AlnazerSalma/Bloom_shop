import React, { useState, useEffect } from "react";
import type { Product } from "../../types/productType";
import "./product.css";

interface Props {
  product: Product;
  mainImage?: string;
  setMainImage?: (img: string) => void;
  openLightbox: (index: number) => void;
}

const ProductImages: React.FC<Props> = ({
  product,
  mainImage,
  setMainImage,
  openLightbox,
}) => {
  // Track main image by index
  const [mainIndex, setMainIndex] = useState(0);

  // Sync with external mainImage if provided
  useEffect(() => {
    if (mainImage) {
      const idx = product.images.findIndex((img) => img === mainImage);
      if (idx >= 0) setMainIndex(idx);
    }
  }, [mainImage, product.images]);

  const handleThumbnailHover = (index: number) => {
    setMainIndex(index);
    if (setMainImage) setMainImage(product.images[index]);
  };

  return (
    <div className="product-image">
      <div className="images-wrapper">
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              className={`thumbnail ${index === mainIndex ? "active" : ""}`}
              src={img}
              alt={`${product.name.en}-${index}`}
              onMouseEnter={() => handleThumbnailHover(index)}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        <img
          className="main-image"
          src={product.images[mainIndex]}
          alt={product.name.en}
          onClick={() => openLightbox(mainIndex)}
        />
      </div>
    </div>
  );
};

export default ProductImages;
