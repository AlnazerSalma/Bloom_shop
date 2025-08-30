import { useEffect } from "react";

export function useClickOutside(ref, isOpen, onClose) {
    useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && isOpen) {
        onClose();
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
    }, [ref, isOpen, onClose]);
}
