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

  const steps = [
    { key: "address", label: "Address", icon: <FaHome /> },
    { key: "payment", label: "Payment Method", icon: <FaCreditCard /> },
    { key: "review", label: "Review", icon: <FaClipboardCheck /> },
  ];

  // Find the index of the current step
  const currentIndex = steps.findIndex((step) => step.key === currentStep);

  return (
    <div className="checkout-steps" dir={isArabic ? "rtl" : "ltr"}>
      {steps.map((step, index) => {
        return (
          <div
            key={step.key}
            className="step-wrapper"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className={`step ${currentStep === step.key ? "active" : ""}`}>
              <div className="icon-box">{step.icon}</div>
              <p>{step.label}</p>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="arrow-container">
                <FaLongArrowAltRight
                  className={`step-arrow ${
                    index < currentIndex ? "active" : ""
                  }`}
                  style={{ transform: isArabic ? "rotate(180deg)" : "none" }}
                  size={24}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
