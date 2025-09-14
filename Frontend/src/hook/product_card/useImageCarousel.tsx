import { useState, useEffect } from "react";

export const useImageCarousel = (
  images: string[],
  isHovered: boolean,
  intervalMs = 1200
) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isHovered || images.length <= 1) {
      setIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isHovered, images, intervalMs]);

  return index;
};
