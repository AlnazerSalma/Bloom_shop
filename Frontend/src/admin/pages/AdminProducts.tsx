import React from "react";
import { useTranslation } from "react-i18next";
import GeneralFormCard from "../components/cards/general_form_card/GeneralFormCard";
import AdminHeader from "../components/admin_header/AdminHeader";
import IconButton from "../components/buttons/IconButton";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

const AdminProducts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <AdminHeader
        title={t("admin.productForm.header.title")}
        subtitle={t("admin.productForm.header.subtitle")}
      />

      {/* Product Basic Info */}
      <GeneralFormCard
        cardTitle={t("admin.productForm.sections.basicInfo.cardTitle")}
        sectionTitle={t("admin.productForm.sections.basicInfo.sectionTitle")}
        sectionIcon={<FaBoxOpen />}
        fields={[
          {
            label: t(
              "admin.productForm.sections.basicInfo.fields.nameEn.label"
            ),
            placeholder: t(
              "admin.productForm.sections.basicInfo.fields.nameEn.placeholder"
            ),
            required: true,
          },
          {
            label: t(
              "admin.productForm.sections.basicInfo.fields.nameAr.label"
            ),
            placeholder: t(
              "admin.productForm.sections.basicInfo.fields.nameAr.placeholder"
            ),
            required: true,
          },
          {
            label: t(
              "admin.productForm.sections.basicInfo.fields.descriptionEn.label"
            ),
            placeholder: t(
              "admin.productForm.sections.basicInfo.fields.descriptionEn.placeholder"
            ),
            fullWidth: true,
            height: "100px",
          },
          {
            label: t(
              "admin.productForm.sections.basicInfo.fields.descriptionAr.label"
            ),
            placeholder: t(
              "admin.productForm.sections.basicInfo.fields.descriptionAr.placeholder"
            ),
            fullWidth: true,
            height: "100px",
          },
        ]}
      />

      {/* Pricing */}
      <GeneralFormCard
        cardTitle={t("admin.productForm.sections.pricing.cardTitle")}
        sectionTitle={t("admin.productForm.sections.pricing.sectionTitle")}
        sectionIcon={<AiOutlineDollarCircle />}
        fields={[
          {
            label: t("admin.productForm.sections.pricing.fields.price.label"),
            placeholder: t(
              "admin.productForm.sections.pricing.fields.price.placeholder"
            ),
            required: true,
          },
          {
            label: t(
              "admin.productForm.sections.pricing.fields.discount.label"
            ),
            placeholder: t(
              "admin.productForm.sections.pricing.fields.discount.placeholder"
            ),
          },
        ]}
      />

      {/* Category */}
      <GeneralFormCard
        cardTitle={t("admin.productForm.sections.category.cardTitle")}
        sectionTitle={t("admin.productForm.sections.category.sectionTitle")}
        sectionIcon={<BiCategory />}
        fields={[
          {
            label: t(
              "admin.productForm.sections.category.fields.category.label"
            ),
            placeholder: t(
              "admin.productForm.sections.category.fields.category.placeholder"
            ),
            required: true,
            type: "select",
            options: t(
              "admin.productForm.sections.category.options.categories",
              { returnObjects: true }
            ) as string[],

            fullWidth: false,
          },
          {
            label: t(
              "admin.productForm.sections.category.fields.subcategory.label"
            ),
            placeholder: t(
              "admin.productForm.sections.category.fields.subcategory.placeholder"
            ),
            type: "select",
            options: t(
              "admin.productForm.sections.category.options.subcategories",
              { returnObjects: true }
            ) as string[],

            fullWidth: false,
          },
          {
            label: t("admin.productForm.sections.category.fields.brand.label"),
            placeholder: t(
              "admin.productForm.sections.category.fields.brand.placeholder"
            ),
          },
          {
            label: t(
              "admin.productForm.sections.category.fields.material.label"
            ),
            placeholder: t(
              "admin.productForm.sections.category.fields.material.placeholder"
            ),
          },
        ]}
      />

      {/* Upload Images */}
      <GeneralFormCard
        cardTitle={t("admin.productForm.sections.media.cardTitle")}
        sectionTitle={t("admin.productForm.sections.media.sectionTitle")}
        sectionIcon={<MdOutlineDescription />}
        uploadTitle={t("admin.productForm.sections.media.uploadTitle")}
        uploadLabel={t("admin.productForm.sections.media.uploadLabel")}
        acceptTypes={["image/*"]}
      />

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <IconButton
          text={t("admin.productForm.sections.saveButton")}
          icon={<FaBoxOpen />}
          color="#fff"
          bgColor="#972148"
          hoverBg="#52011CCD"
          onClick={() => alert("Saved!")}
          borderColor="#913a57"
          hoverColor="#fff"
        />
      </div>
    </div>
  );
};

export default AdminProducts;
