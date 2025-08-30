import React from "react";
import { LuUpload } from "react-icons/lu";
import { IoMdTrash } from "react-icons/io";

const UploadSection = ({
  previewUrl,
  fileType,
  uploadTitle,
  uploadLabel,
  acceptTypes,
  onFileChange,
  onRemoveFile,
}) => {
  return (
    <div className="upload-wrapper">
      {uploadTitle && (
        <div className="section-header">
          <LuUpload className="section-title-icon" />
          <h3 className="section-title">{uploadTitle}</h3>
        </div>
      )}

      <div className="upload-box">
        <label className="preview-wrapper">
          {!previewUrl ? (
            <div className="custom-upload">
              <LuUpload className="upload-icon" />
              <span className="upload-text">{uploadLabel}</span>
            </div>
          ) : fileType === "image" ? (
            <img src={previewUrl} alt="Preview" className="preview-image" />
          ) : (
            <video src={previewUrl} controls className="preview-video" />
          )}
          <input
            type="file"
            accept={acceptTypes}
            onChange={onFileChange}
            hidden
          />
        </label>
      </div>
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
