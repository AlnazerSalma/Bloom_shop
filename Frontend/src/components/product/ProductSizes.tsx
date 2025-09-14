import React from "react";
import "./product.css";

interface Props {
  sizes: string[];
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
  showAllSizes: boolean;
  toggleShowAllSizes: () => void;
  t: (key: string) => string;
}

const ProductSizes: React.FC<Props> = ({
  sizes,
  selectedSize,
  setSelectedSize,
  showAllSizes,
  toggleShowAllSizes,
  t,
}) => (
  <div className="size-section">
    <h4 className="size-title">{t("productPage.size")}</h4>
    <div className="size-options">
      {sizes.slice(0, showAllSizes ? sizes.length : 4).map((s) => (
        <span
          key={s}
          className={`size-oval ${selectedSize === s ? "selected" : ""}`}
          onClick={() => setSelectedSize(s)}
        >
          {s}
        </span>
      ))}
      {sizes.length > 4 && (
        <button className="size-toggle-btn" onClick={toggleShowAllSizes}>
          {showAllSizes ? t("productPage.less") : t("productPage.more")}
        </button>
      )}
    </div>
  </div>
);

export default ProductSizes;
