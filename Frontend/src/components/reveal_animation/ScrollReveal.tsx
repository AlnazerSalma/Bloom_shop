import React from "react";
import useScrollReveal from "../../hook/useScrollReveal";

interface Props {
  type?: "up" | "down";
  delay?: number;
  children: React.ReactNode;
}

const ScrollReveal: React.FC<Props> = ({ type = "up", delay = 0, children }) => {
  const { ref, isVisible } = useScrollReveal(type);

  return (
    <div
      ref={ref}
      className={`reveal ${type} ${isVisible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
