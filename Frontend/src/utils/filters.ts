import type { Product } from "../types/productType";

export const filterProducts = (
  products: Product[],
  searchQuery: string,
  selectedCategories: string[],
  selectedSubCategory: string | null,
  selectedBrands: string[],
  selectedPriceRange: [number, number] | null,
  selectedDiscountRange: [number, number] | null,
  lang: "en" | "ar"
) => {
  return products.filter((p) => {
    const matchSearch =
      searchQuery === "" ||
      p.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subcategory?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand?.[lang].toLowerCase().includes(searchQuery.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);

    const matchSubCategory =
      !selectedSubCategory || p.subcategory === selectedSubCategory;

    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand?.[lang] || "");

    const matchPrice =
      !selectedPriceRange ||
      (p.price >= selectedPriceRange[0] && p.price <= selectedPriceRange[1]);

    const matchDiscount =
      !selectedDiscountRange ||
      (p.discount &&
        p.discount >= selectedDiscountRange[0] &&
        p.discount <= selectedDiscountRange[1]);

    return (
      matchSearch &&
      matchCategory &&
      matchSubCategory &&
      matchBrand &&
      matchPrice &&
      matchDiscount
    );
  });
};
