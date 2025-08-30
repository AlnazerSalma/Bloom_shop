import React from "react";
import { LuUpload } from "react-icons/lu";
import { IoMdTrash } from "react-icons/io";
import { useTranslation } from "react-i18next";
import IconButton from "../../buttons/IconButton";

const PointCard = ({
  point,
  index,
  updatePoint,
  deletePoint,
  allowImageModeChoice = true,
  sectionKey = "",
}) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    if (!allowImageModeChoice && !point.uploadMode) {
      updatePoint(index, "uploadMode", "1");
    }
  }, [allowImageModeChoice, point.uploadMode, index, updatePoint]);

  const isSingleImageMode = point.uploadMode === "1" && point.images?.[0];

  const handleImageDelete = (imgIndex) => {
    const updatedImages = [...(point.images || [])];
    updatedImages.splice(imgIndex, 1);
    updatePoint(index, "images", updatedImages);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (point.uploadMode === "4") {
      const currentImages = point.images || [];
      if (currentImages.length + files.length > 4) {
        alert(t("admin.maxFourImages", "You can upload up to 4 images only."));
        return;
      }

      const fileReaders = files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      );

      Promise.all(fileReaders).then((newImages) => {
        updatePoint(index, "images", [...currentImages, ...newImages]);
      });
    } else {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => updatePoint(index, "images", [reader.result]);
      reader.readAsDataURL(file);
    }
    e.target.value = null;
  };

  return (
    <div className="point-card">
      <div className="fields-container">
        <div className="form-group">
          <label>
            <span className="required-star">*</span>{" "}
            {t("admin.aboutAlHasad.titleAr")}
          </label>
          <input
            type="text"
            value={point.titleAr}
            onChange={(e) => updatePoint(index, "titleAr", e.target.value)}
            placeholder={t("admin.aboutAlHasad.titleArPlaceholder")}
          />
        </div>

        <div className="form-group">
          <label>
            <span className="required-star">*</span>{" "}
            {t("admin.aboutAlHasad.titleEn")}
          </label>
          <input
            type="text"
            value={point.titleEn}
            onChange={(e) => updatePoint(index, "titleEn", e.target.value)}
            placeholder={t("admin.aboutAlHasad.titleEnPlaceholder")}
          />
        </div>

        <div className="form-group">
          <label>
            <span className="required-star">*</span>{" "}
            {t("admin.aboutAlHasad.descAr")}
          </label>
          <textarea
            value={point.descAr}
            onChange={(e) => updatePoint(index, "descAr", e.target.value)}
            placeholder={t("admin.aboutAlHasad.descArPlaceholder")}
            style={{ height: "150px" }}
          />
        </div>

        <div className="form-group">
          <label>
            <span className="required-star">*</span>{" "}
            {t("admin.aboutAlHasad.descEn")}
          </label>
          <textarea
            value={point.descEn}
            onChange={(e) => updatePoint(index, "descEn", e.target.value)}
            placeholder={t("admin.aboutAlHasad.descEnPlaceholder")}
            style={{ height: "150px" }}
          />
        </div>
      </div>

      {allowImageModeChoice && (
        <div
          className="upload-mode-container"
          role="group"
          aria-label="Upload mode toggle"
        >
          <div className="upload-mode-label">
            {t("admin.chooseUploadMode", "Choose one picture or four")}
          </div>
          <div className="upload-mode-toggle">
            {["1", "4"].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => updatePoint(index, "uploadMode", mode)}
                className={point.uploadMode === mode ? "active" : ""}
                aria-pressed={point.uploadMode === mode}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="upload-box">
        <input
          id={`file-upload-${sectionKey}-${index}`}
          type="file"
          accept="image/*"
          multiple={point.uploadMode === "4"}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {!isSingleImageMode && (
          <label
            htmlFor={`file-upload-${sectionKey}-${index}`}
            className="custom-upload"
          >
            <LuUpload className="upload-icon" />
            <span className="upload-text">{t("admin.uploadImage")}</span>
          </label>
        )}

        {isSingleImageMode && (
          <label
            htmlFor={`file-upload-${sectionKey}-${index}`}
            className="preview-wrapper"
          >
            <img
              src={point.images[0]}
              alt="uploaded"
              className="preview-image"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              hidden
              key={`file-upload-single-${sectionKey}-${index}`}
            />
          </label>
        )}
      </div>
      {point.uploadMode === "4" && (
        <div className="uploaded-images-preview">
          {point.images?.map((img, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img
                src={img}
                alt={`uploaded-${i}`}
                className="preview-four-image"
              />
              <button
                type="button"
                className="delete-image-btn"
                onClick={() => handleImageDelete(i)}
                aria-label={`Delete image ${i + 1}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <IconButton
          icon={<IoMdTrash />}
          text={t("admin.delete")}
          color="#fff"
          bgColor="#9E0B0BFF"
          hoverBg="#B71C1CD3"
          onClick={() => deletePoint(index)}
          borderColor="#b71c1c"
        />
      </div>
    </div>
  );
};

export default PointCard;
