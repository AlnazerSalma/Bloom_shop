import React from "react";
import type { Product } from "../../types/productType";
import "./product.css";

interface Props {
  product: Product;
  t: (key: string) => string;
  lang: "en" | "ar";
}

const ProductInfo: React.FC<Props> = ({ product, t, lang }) => (
  <div className="product-info">
    <h4 className="size-title">{t("productPage.productDetails")}</h4>
    <table className="info-table">
      <tbody>
        <tr>
          <td className="info-label">{t("productPage.category")}</td>
          <td className="info-value">{product.category}</td>
        </tr>
        <tr>
          <td className="info-label">{t("productPage.brand")}</td>
          <td className="info-value">{product.brand?.[lang]}</td>
        </tr>
        <tr>
          <td className="info-label">{t("productPage.material")}</td>
          <td className="info-value">{product.material?.[lang]}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProductInfo;
