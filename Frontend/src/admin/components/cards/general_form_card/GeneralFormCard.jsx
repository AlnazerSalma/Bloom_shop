import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UploadSection from "./UploadSection";
import FormFieldsSection from "./FormFieldsSection";
import PointsSection from "./PointsSection";
import "./generalFormCard.css";

const GeneralFormCard = ({
  cardTitle,
  sectionTitle,
  sectionIcon,
  fields = [],
  uploadTitle,
  uploadLabel,
  acceptTypes,
  enablePointsSection = false,
  pointsSectionTitle,
  pointsSectionIcon,
  allowImageModeChoice = false,
  sectionKey = "",
  points = [],
  updatePoint,
  deletePoint,
  addPoint,
}) => {
  const { t } = useTranslation();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setFileType(file.type.startsWith("image") ? "image" : "video");
    }
  };

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

      {enablePointsSection && (
        <PointsSection
          points={points}
          updatePoint={updatePoint}
          deletePoint={deletePoint}
          addPoint={addPoint}
          pointsSectionTitle={pointsSectionTitle}
          pointsSectionIcon={pointsSectionIcon}
          allowImageModeChoice={allowImageModeChoice}
          sectionKey={sectionKey}
        />
      )}
      {showUploadSection && (
        <UploadSection
          previewUrl={previewUrl}
          fileType={fileType}
          uploadTitle={uploadTitle}
          uploadLabel={uploadLabel}
          acceptTypes={acceptTypes}
          onFileChange={handleFileChange}
          onRemoveFile={() => setPreviewUrl(null)}
        />
      )}
    </div>
  );
};

export default GeneralFormCard;
