import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./FilterSection.css";

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="filter-section">
      <h3 className="filter-header" onClick={onToggle}>
        <span className="filter-header-text">{title}</span>
        <span className={`filter-header-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </h3>
      {isOpen && <div className="filter-content">{children}</div>}
    </div>
  );
};

export default FilterSection;
