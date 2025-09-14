import React from "react";
import UploadSection from "./UploadSection";
import FormFieldsSection from "./FormFieldsSection";
import "./generalFormCard.css";

interface Field {
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  height?: string | number;
  required?: boolean;
  options?: string[];
  type?: "text" | "select";
}

interface GeneralFormCardProps {
  cardTitle?: string;
  sectionTitle?: string;
  sectionIcon?: React.ReactElement<{ className?: string }>;
  fields?: Field[];
  uploadTitle?: string;
  uploadLabel?: string;
  acceptTypes?: string[];
}

const GeneralFormCard: React.FC<GeneralFormCardProps> = ({
  cardTitle,
  sectionTitle,
  sectionIcon,
  fields = [],
  uploadTitle,
  uploadLabel,
  acceptTypes,
}) => {
  const showUploadSection = uploadTitle || uploadLabel || acceptTypes?.length;

  return (
    <div className="general-form-card">
      {cardTitle && <h2 className="form-title">{cardTitle}</h2>}

      {(sectionTitle || fields.length > 0) && (
        <div className="section-header">
          {sectionIcon &&
            React.cloneElement(sectionIcon, {
              className: "section-title-icon",
            })}
          {sectionTitle && <h3 className="section-title">{sectionTitle}</h3>}
        </div>
      )}

      <FormFieldsSection fields={fields} />

      {showUploadSection && (
        <UploadSection
          uploadTitle={uploadTitle}
          uploadLabel={uploadLabel}
          acceptTypes={acceptTypes}
        />
      )}
    </div>
  );
};

export default GeneralFormCard;
