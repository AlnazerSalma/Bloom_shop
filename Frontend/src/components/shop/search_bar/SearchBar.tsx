import React from "react";
import { FaSearch } from "react-icons/fa";
import useIsArabic from "../../../hook/useIsArabic";
import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  const isArabic = useIsArabic();
  return (
    <div className="shop-search-wrapper"  dir={isArabic ? "rtl" : "ltr"}>
      <FaSearch className="shop-search-icon" />
      <input
        type="text"
        className="shop-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search products..."}
      />
    </div>
  );
};

export default SearchBar;
