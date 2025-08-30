import React from "react";

const FormFieldsSection = ({ fields }) => {
  return (
    <div className="fields-container">
      {fields.map(({ label, placeholder, fullWidth = false, height, required = false }, index) => (
        <div key={index} className={`form-group ${fullWidth ? "full-width" : ""}`}>
          <label>
            {required && <span className="required-star">*</span>} {label}
          </label>
          <textarea
            type="text"
            placeholder={placeholder}
            required={required}
            style={height ? { height } : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default FormFieldsSection;
