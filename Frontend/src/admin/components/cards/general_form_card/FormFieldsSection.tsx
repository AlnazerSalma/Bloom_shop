import React from "react";

interface Field {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  height?: string | number;
  required?: boolean;
  options?: string[];
  type?: "text" | "select";
}

interface FormFieldsSectionProps {
  fields: Field[];
}

const FormFieldsSection: React.FC<FormFieldsSectionProps> = ({ fields }) => {
  return (
    <div className="fields-container">
      {fields.map((field, index) => (
        <div
          key={index}
          className={`form-group ${field.fullWidth ? "full-width" : ""}`}
        >
          <label>
            {field.required && <span className="required-star">*</span>}{" "}
            {field.label}
          </label>

          {field.type === "select" && field.options ? (
            <select required={field.required}>
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <textarea
              placeholder={field.placeholder}
              required={field.required}
              style={field.height ? { height: field.height } : undefined}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormFieldsSection;
