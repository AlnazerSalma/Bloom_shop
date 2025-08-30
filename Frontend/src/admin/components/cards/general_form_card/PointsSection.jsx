import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";
import PointCard from "./PointCard";
import IconButton from "../../buttons/IconButton";

const PointsSection = ({
  points,
  addPoint,
  updatePoint,
  deletePoint,
  pointsSectionTitle,
  pointsSectionIcon,
  allowImageModeChoice = false,
  sectionKey = "",
}) => {
  const { t } = useTranslation();

  const handleAddPoint = () =>
    addPoint({
      titleAr: "",
      titleEn: "",
      descAr: "",
      descEn: "",
      uploadMode: allowImageModeChoice ? "1" : undefined,
      images: [],
    });

  const handleImagesChange = (index, e) => {
    const point = points[index];
    if (!point) return;

    const maxCount = allowImageModeChoice && point.uploadMode === "4" ? 4 : 1;
    const files = Array.from(e.target.files).slice(0, maxCount);

    const fileReaders = files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    );

    Promise.all(fileReaders).then((urls) => {
      if (point.uploadMode === "4") {
        const currentImages = point.images || [];
        if (currentImages.length + urls.length > 4) {
          alert(
            t("admin.maxFourImages", "You can upload up to 4 images only.")
          );
          return;
        }
        updatePoint(index, "images", [...currentImages, ...urls]);
      } else {
        updatePoint(index, "images", urls);
      }
    });

    e.target.value = null;
  };

  return (
    <div className="points-section">
      <div className="section-header">
        {pointsSectionIcon &&
          React.cloneElement(pointsSectionIcon, {
            className: "section-title-icon",
          })}
        <h3 className="section-title">{pointsSectionTitle}</h3>
          <IconButton
          icon={<IoMdAdd />}
          text={t("admin.addPoint")}
          color="#fff"
          bgColor="#204e51"
          hoverBg="#204E51D1"
          onClick= {handleAddPoint}
          borderColor="#2f7479e7"
        />
      </div>
      {points.map((point, index) => (
        <PointCard
          key={index}
          point={point}
          index={index}
          updatePoint={updatePoint}
          handleImagesChange={(e) => handleImagesChange(index, e)}
          deletePoint={() => deletePoint(index)}
          allowImageModeChoice={allowImageModeChoice}
          sectionKey={sectionKey}
        />
      ))}
    </div>
  );
};

export default PointsSection;
