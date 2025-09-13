import React from "react";
import "./OptionFilter.css";

export type Option = {
  label: string;
  value: string | number | [number, number];
};

interface OptionFilterProps {
  title?: string;
  options: Option[];
  selectedOptions: (string | number | [number, number])[];
  onChange: (value: string | number | [number, number]) => void;
  type?: "checkbox" | "radio";
}

const OptionFilter: React.FC<OptionFilterProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
  type = "checkbox"
}) => {
  const isSelected = (value: string | number | [number, number]) =>
    selectedOptions.some(sel => JSON.stringify(sel) === JSON.stringify(value));

  return (
    <div className="option-filter">
      {title && <h4 className="option-filter-title">{title}</h4>}
      {options.map((opt) => (
        <div key={JSON.stringify(opt.value)} className="option-filter-item">
          <input
            type={type}
            checked={isSelected(opt.value)}
            onChange={() => onChange(opt.value)}
          />
          <span className="option-filter-label">{opt.label}</span>
        </div>
      ))}
    </div>
  );
};

export default OptionFilter;
