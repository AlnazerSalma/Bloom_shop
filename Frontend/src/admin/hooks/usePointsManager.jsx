import { useState } from "react";

const usePointsManager = (initialPoints = {}) => {
    const [pointsBySection, setPointsBySection] = useState(initialPoints);

    const updatePoint = (sectionKey, index, field, value) => {
    setPointsBySection((prev) => {
        const updatedPoints = [...(prev[sectionKey] || [])];
        updatedPoints[index] = {
        ...updatedPoints[index],
        [field]: value,
        };
        return {
        ...prev,
        [sectionKey]: updatedPoints,
        };
    });
    };

    const updatePointImages = (sectionKey, index, images) => {
    setPointsBySection((prev) => {
        const updatedPoints = [...(prev[sectionKey] || [])];
        updatedPoints[index] = {
        ...updatedPoints[index],
        images,
        };
        return {
        ...prev,
        [sectionKey]: updatedPoints,
        };
    });
    };

    const deletePoint = (sectionKey, index) => {
    setPointsBySection((prev) => {
        const updatedPoints = [...(prev[sectionKey] || [])];
        updatedPoints.splice(index, 1);
        return {
        ...prev,
        [sectionKey]: updatedPoints,
        };
    });
    };

    const addPoint = (sectionKey, point) => {
    setPointsBySection((prev) => ({
        ...prev,
        [sectionKey]: [...(prev[sectionKey] || []), point],
    }));
    };

    return {
    pointsBySection,
    setPointsBySection,
    updatePoint,
    updatePointImages,
    deletePoint,
    addPoint,
  };
};

export default usePointsManager;
