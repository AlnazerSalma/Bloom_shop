import React from "react";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import { ordersByUser } from "../../../assets/data/mock_data/mockOrders";
import { mockUserAddresses } from "../../../assets/data/mock_data/mockAddresses";
import { mockProducts } from "../../../assets/data/mock_data/mockProducts";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import { FiEye, FiStar } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import "./ProfileOrders.css";

interface ProfileOrdersProps {
  userId: string;
}

const ProfileOrders: React.FC<ProfileOrdersProps> = ({ userId }) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const userOrders = ordersByUser.find((user) => user.userId === userId);
  const userAddresses =
    mockUserAddresses.find((user) => user.userId === userId)?.addresses || [];

  if (!userOrders) {
    return <p>{t("profile.orders.noOrders")}</p>;
  }

  const getProductDetails = (productId: string) =>
    mockProducts.find((p) => p.id === productId);

  const getAddress = (addressId: string) =>
    userAddresses.find((addr) => addr.id === addressId);

  return (
    <div className="profile-orders-page">
      {userOrders.orders.map((order) => {
        const firstItem = order.items[0];
        const product = firstItem
          ? getProductDetails(firstItem.productId)
          : undefined;

        return (
          <div key={order.id} className="order-wrapper">
            <p className="order-date">
              {new Date(order.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="order-card">
              <h2>{order.code}</h2>

              <div className="order-row">
                {product && (
                  <div className="order-preview">
                    <img src={product.images[0]} alt={product.name[lang]} />
                  </div>
                )}

                <div className="order-info">
                  <h1 className="product-name">{product?.name[lang]}</h1>
                  <p>
                    {t("profile.orders.size")}: {firstItem?.size}
                  </p>
                  <p>
                    {t("profile.orders.quantity")}: {firstItem?.quantity}
                  </p>
                </div>

                <div className="order-actions">
                  <RectangularButton
                    text={t("profile.orders.viewOrder")}
                    className="action-btn save-btn"
                    icon={<FiEye />}
                  />
                  {order.status === "delivered" ? (
                    <RectangularButton
                      text={t("profile.orders.writeReview")}
                      className="action-btn review-btn"
                      icon={<FiStar />}
                    />
                  ) : (
                    <RectangularButton
                      text={t("profile.orders.cancelOrder")}
                      className="action-btn delete-btn"
                      icon={<IoTrashOutline />}
                    />
                  )}
                </div>
              </div>

              <div className="status-notes-row">
                <span className={`status-badge ${order.status}`}>
                  {order.status}
                </span>
                <p className="order-notes">
                  {order.notes
                    ? order.notes[lang]
                    : t("profile.orders.noNotes")}
                </p>
              </div>

              <div className="payment-info">
                <p>
                  {t("profile.orders.payment")}: {order.payment.method} |{" "}
                  {t("profile.orders.status")}: {order.payment.status}
                  {order.payment.transactionId &&
                    ` | ${t("profile.orders.transactionId")}: ${
                      order.payment.transactionId
                    }`}
                </p>
              </div>

              <div className="address-info">
                {getAddress(order.shipping.addressId) ? (
                  <p>
                    {t("profile.orders.address")}:{" "}
                    {getAddress(order.shipping.addressId)?.country[lang]} ,{" "}
                    {getAddress(order.shipping.addressId)?.city[lang]} ,{" "}
                    {getAddress(order.shipping.addressId)?.streetName[lang]} ,{" "}
                    {getAddress(order.shipping.addressId)?.buildingNumber}
                    {order.shipping.trackingNumber && (
                      <>
                        {" | "}
                        {t("profile.orders.tracking")}:{" "}
                        {order.shipping.trackingNumber} |{" "}
                        {t("profile.orders.carrier")}: {order.shipping.carrier}{" "}
                        | {t("profile.orders.eta")}:{" "}
                        {order.shipping.estimatedDelivery}
                      </>
                    )}
                  </p>
                ) : (
                  <p>{t("profile.orders.addressNotFound")}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileOrders;
