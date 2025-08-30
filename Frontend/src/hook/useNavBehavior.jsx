import { useEffect, useState } from "react";

export function useNavBehavior(mobileMenuOpen, setMobileMenuOpen) {
    const [navColour, setNavColour] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, [mobileMenuOpen]);

    return navColour;
}
