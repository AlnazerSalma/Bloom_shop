import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import type { Product } from "../../../types/productType";
import "./CategoryFilter.css";

interface CategoryFilterProps {
  categories: string[];
  products: Product[];
  selectedCategories: string[];
  selectedSubCategory: string | null;
  onToggleCategory: (cat: string) => void;
  onSelectSubCategory: (sub: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  products,
  selectedCategories,
  selectedSubCategory,
  onToggleCategory,
  onSelectSubCategory,
}) => {
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  return (
    <>
      {categories.map((cat) => {
        const subcategories = Array.from(
          new Set(
            products
              .filter((p) => p.category === cat && p.subcategory)
              .map((p) => p.subcategory)
          )
        );

        return (
          <div key={cat} className="filter-item">
            <div className="category-row">
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => onToggleCategory(cat)}
                />
                {cat}
              </label>

              {subcategories.length > 0 && (
                <button
                  className={`subcategory-toggle-btn ${
                    openSubCategory === cat ? "open" : ""
                  }`}
                  onClick={() =>
                    setOpenSubCategory(openSubCategory === cat ? null : cat)
                  }
                >
                  {openSubCategory === cat ? <FaMinus /> : <FaPlus />}
                </button>
              )}
            </div>

            {openSubCategory === cat && subcategories.length > 0 && (
              <ul className="subcategory-list">
                {subcategories.map((sub) => (
                  <li
                    key={sub}
                    className={`subcategory-item ${
                      selectedSubCategory === sub ? "active-subcategory" : ""
                    }`}
                    onClick={() => onSelectSubCategory(sub)}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CategoryFilter;
