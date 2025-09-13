import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { mockProducts } from "../assets/data/mock_data/mockProducts";
import { filterProducts } from "../utils/filters";
import SearchBar from "../components/shop/search_bar/SearchBar";
import FilterSection from "../components/shop/filter_section/FilterSection";
import CategoryFilter from "../components/shop/category_filter/CategoryFilter";
import OptionFilter from "../components/shop/option_filter/OptionFilter";
import type { Option } from "../components/shop/option_filter/OptionFilter";
import ProductCard from "../components/common/card/product_card/ProductCard";
import useIsArabic from "../hook/useIsArabic";
import "../style/pages/Shop.css";

const Shop: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);
  const [selectedDiscountRange, setSelectedDiscountRange] = useState<[number, number] | null>(null);

  const [openCategoryHeader, setOpenCategoryHeader] = useState(true);
  const [openBrandHeader, setOpenBrandHeader] = useState(true);
  const [openPriceHeader, setOpenPriceHeader] = useState(true);
  const [openDiscountHeader, setOpenDiscountHeader] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const categories = Array.from(new Set(mockProducts.map((p) => p.category)));
  const brands = Array.from(
    new Set(mockProducts.map((p) => p.brand?.[lang]).filter((b): b is string => !!b))
  );

  const filteredProducts = filterProducts(
    mockProducts,
    searchQuery,
    selectedCategories,
    selectedSubCategory,
    selectedBrands,
    selectedPriceRange,
    selectedDiscountRange,
    lang
  );

  useEffect(() => setCurrentPage(1), [
    searchQuery,
    selectedCategories,
    selectedSubCategory,
    selectedBrands,
    selectedPriceRange,
    selectedDiscountRange,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="shop-page">
      <h1 className="shop-title">{t("shop_page.title")}</h1>
      <div className="shop-content">
        {/* Filters Column */}
        <div className="filters-column">
          <FilterSection title={t("shop_page.filter_category")} isOpen={openCategoryHeader} onToggle={() => setOpenCategoryHeader(prev => !prev)}>
            <CategoryFilter
              categories={categories}
              products={mockProducts}
              selectedCategories={selectedCategories}
              selectedSubCategory={selectedSubCategory}
              onToggleCategory={(cat) => {
                setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
                setSelectedSubCategory(null);
              }}
              onSelectSubCategory={(sub) => setSelectedSubCategory(sub)}
            />
          </FilterSection>

          <FilterSection title={t("shop_page.filter_brand")} isOpen={openBrandHeader} onToggle={() => setOpenBrandHeader(prev => !prev)}>
            <OptionFilter
              options={brands.map((b): Option => ({ label: b, value: b }))}
              selectedOptions={selectedBrands}
              onChange={(val) => setSelectedBrands(prev => prev.includes(val as string) ? prev.filter(b => b !== val) : [...prev, val as string])}
              type="checkbox"
            />
          </FilterSection>

          <FilterSection title={t("shop_page.filter_price")} isOpen={openPriceHeader} onToggle={() => setOpenPriceHeader(prev => !prev)}>
            <OptionFilter
              options={[
                { label: "0 - 100", value: [0, 100] },
                { label: "100 - 200", value: [100, 200] },
                { label: "200 - 300", value: [200, 300] },
                { label: "300 - 500", value: [300, 500] },
                { label: "500 - 1000", value: [500, 1000] },
              ]}
              selectedOptions={selectedPriceRange ? [selectedPriceRange] : []}
              onChange={(val) => setSelectedPriceRange(val as [number, number])}
              type="radio"
            />
          </FilterSection>

          <FilterSection title={t("shop_page.filter_discount")} isOpen={openDiscountHeader} onToggle={() => setOpenDiscountHeader(prev => !prev)}>
            <OptionFilter
              options={[
                { label: "10% - 30%", value: [10, 30] },
                { label: "30% - 50%", value: [30, 50] },
                { label: "50% - 80%", value: [50, 80] },
                { label: "80% - 100%", value: [80, 100] },
              ]}
              selectedOptions={selectedDiscountRange ? [selectedDiscountRange] : []}
              onChange={(val) => setSelectedDiscountRange(val as [number, number])}
              type="radio"
            />
          </FilterSection>
        </div>

        {/* Products Column */}
        <div className="products-column">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={t("shop_page.search")} />

          {paginatedProducts.length === 0 && <p>{t("shop_page.no_products")}</p>}

          <div className="products-grid">
            {paginatedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
                &lt;
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
