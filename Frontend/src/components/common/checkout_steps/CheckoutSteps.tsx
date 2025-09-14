import {
  FaHome,
  FaCreditCard,
  FaClipboardCheck,
  FaLongArrowAltRight,
} from "react-icons/fa";
import "./CheckoutSteps.css";
import useIsArabic from "../../../hook/useIsArabic";

interface CheckoutStepsProps {
  currentStep: "address" | "payment" | "review";
}
const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  const isArabic = useIsArabic();

  // Define steps in English order (LTR)
  const baseSteps = [
    { key: "review", label: "Review", icon: <FaClipboardCheck /> },
    { key: "payment", label: "Payment Method", icon: <FaCreditCard /> },
    { key: "address", label: "Address", icon: <FaHome /> },
  ];

  // Reverse the array for RTL (Arabic)
  const steps = isArabic ? [...baseSteps].reverse() : baseSteps;

  const currentIndex = steps.findIndex((step) => step.key === currentStep);

  return (
    <div className="checkout-steps" dir={isArabic ? "rtl" : "ltr"}>
      {steps.map((step, index) => (
        <div
          key={step.key}
          className="step-wrapper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className={`step ${currentStep === step.key ? "active" : ""}`}>
            <div className="icon-box">{step.icon}</div>
            <p>{step.label}</p>
          </div>

          {index < steps.length - 1 && (
            <div className="arrow-container">
              <FaLongArrowAltRight
                className={`step-arrow ${index < currentIndex ? "active" : ""}`}
                style={{ transform: isArabic ? "rotate(180deg)" : "none" }}
                size={24}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
