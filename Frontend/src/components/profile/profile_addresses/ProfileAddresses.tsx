import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import CheckoutForm from "../../forms/checkout_form/CheckoutAddressForm";
import Modal from "../../common/Modal_popUp/Modal";
import { mockUserAddresses } from "../../../assets/data/mock_data/mockAddresses";
import type { Address } from "../../../assets/data/mock_data/mockAddresses";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import useIsArabic from "../../../hook/useIsArabic";
import "./ProfileAddresses.css";

interface ProfileAddressesProps {
  userId: string;
}

const ProfileAddresses: React.FC<ProfileAddressesProps> = ({ userId }) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const userAddresses =
    mockUserAddresses.find((ua) => ua.userId === userId)?.addresses || [];

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const [form, setForm] = useState({
    nameEn: "",
    nameAr: "",
    email: "",
    phone: "",
    countryEn: "",
    countryAr: "",
    cityEn: "",
    cityAr: "",
    streetEn: "",
    streetAr: "",
    buildingNumber: "",
  });

  const openForm = (address?: Address) => {
    if (address) {
      // Prefill form when editing
      setForm({
        nameEn: address.name.en,
        nameAr: address.name.ar,
        email: address.email,
        phone: address.mobileNumber,
        countryEn: address.country.en,
        countryAr: address.country.ar,
        cityEn: address.city.en,
        cityAr: address.city.ar,
        streetEn: address.streetName.en,
        streetAr: address.streetName.ar,
        buildingNumber: address.buildingNumber,
      });
      setEditingAddress(address);
    } else {
      // Empty form for new address
      setForm({
        nameEn: "",
        nameAr: "",
        email: "",
        phone: "",
        countryEn: "",
        countryAr: "",
        cityEn: "",
        cityAr: "",
        streetEn: "",
        streetAr: "",
        buildingNumber: "",
      });
      setEditingAddress(null);
    }
    setShowForm(true);
  };

  const handleAddNew = () => openForm();

  const handleEdit = (address: Address) => openForm(address);

  const handleDelete = (address: Address) => {
    alert("Delete address: " + address.id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingAddress) {
      alert("Edited address: " + JSON.stringify(form));
    } else {
      alert("New address submitted: " + JSON.stringify(form));
    }
    setShowForm(false);
  };

  return (
    <div className="profile-addresses">
      <RevealGroup type="down" stagger={200}>
      <RectangularButton
        text={t("profile.addresses.addNewAddress")}
        icon={<FaPlus />}
        className="primary btn-add-address"
        onClick={handleAddNew}
      />

      {userAddresses.map((addr) => (
        <div key={addr.id} className="address-card">
          <div className="address-info">
            <RevealGroup type="down" stagger={200}>
            <h1>{isArabic ? addr.name.ar : addr.name[lang]}</h1>
            <p>
              {`${isArabic ? addr.country.ar : addr.country[lang]}, ${
                isArabic ? addr.city.ar : addr.city[lang]
              }, ${isArabic ? addr.streetName.ar : addr.streetName[lang]}, ${
                addr.buildingNumber
              }`}
            </p>
            <p>
              <FaPhone /> {addr.mobileNumber}
            </p>
            </RevealGroup>
          </div>

          <div className="address-buttons">
            <RectangularButton
              text={t("profile.addresses.edit")}
              icon={<CiEdit />}
              className="btn-edit-address"
              onClick={() => handleEdit(addr)}
            />
            <RectangularButton
              text={t("profile.addresses.delete")}
              icon={<IoTrashOutline />}
              className="btn-delete-address"
              onClick={() => handleDelete(addr)}
            />
          </div>
        </div>
      ))}

      {showForm && (
        <Modal
          title={
            editingAddress
              ? t("profile.addresses.editAddress")
              : t("profile.addresses.newAddress")
          }
          onClose={() => setShowForm(false)}
        >
          <CheckoutForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
      </RevealGroup>
    </div>
  );
};

export default ProfileAddresses;
