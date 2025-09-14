import React, { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { IoMdTrash } from "react-icons/io";

interface UploadSectionProps {
  uploadTitle?: string;
  uploadLabel?: string;
  acceptTypes?: string[] | string;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  uploadTitle,
  uploadLabel,
  acceptTypes,
}) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newPreviews = Array.from(e.target.files).map(file =>
      URL.createObjectURL(file)
    );
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeFile = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-wrapper">
      {uploadTitle && (
        <div className="section-header">
          <LuUpload className="section-title-icon" />
          <h3 className="section-title">{uploadTitle}</h3>
        </div>
      )}

      <div className="upload-box">
        <label className="custom-upload">
          <LuUpload className="upload-icon" />
          <span className="upload-text">{uploadLabel ?? "Upload Files"}</span>
          <input
            type="file"
            multiple
            accept={
              Array.isArray(acceptTypes) ? acceptTypes.join(",") : acceptTypes
            }
            onChange={handleFileChange}
            hidden
          />
        </label>
      </div>

      {/* Preview uploaded images */}
      {previews.length > 0 && (
        <div className="uploaded-images-preview">
          {previews.map((url, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="many-preview-image"
              />
              <button
                type="button"
                className="delete-image-btn"
                onClick={() => removeFile(index)}
              >
                <IoMdTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadSection;


// For images only:
// <GeneralFormCard
//   cardTitle="Upload Your Photo"
//   field1Label="Name"
//   field1Placeholder="Enter name"
//   field2Label="Description"
//   field2Placeholder="Enter description"
//   uploadLabel="Upload Image"
//   acceptTypes="image/*"
// />

// For videos only:
// <GeneralFormCard
//   cardTitle="Upload Your Video"
//   field1Label="Title"
//   field1Placeholder="Enter title"
//   field2Label="Details"
//   field2Placeholder="Enter details"
//   uploadLabel="Upload Video"
//   acceptTypes="video/*"
// />
// For both images and videos (default):
// <GeneralFormCard
//   cardTitle="Upload Your File"
//   field1Label="Title"
//   field1Placeholder="Enter title"
//   field2Label="Details"
//   field2Placeholder="Enter details"
//   uploadLabel="Upload Image or Video"
// />
