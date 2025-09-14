import React from "react";
import ScrollReveal from "./ScrollReveal";

interface RevealGroupProps {
  type?: "up" | "down";
  stagger?: number;
  children: React.ReactNode;
}

const RevealGroup: React.FC<RevealGroupProps> = ({
  type = "up",
  stagger = 150,
  children,
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal type={type} delay={index * stagger}>
          {child}
        </ScrollReveal>
      ))}
    </>
  );
};

export default RevealGroup;
