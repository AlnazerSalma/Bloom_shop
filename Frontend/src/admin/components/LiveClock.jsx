import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function LiveClock() {
    const { i18n } = useTranslation();
    const [now, setNow] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => {
        setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    const locale = i18n.language === "ar" ? "ar-EG" : "en-US";

    const formattedDate = now.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    });

    const formattedTime = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    });

    return (
    <>
        <h5>{formattedDate}</h5>
        <h6>{formattedTime}</h6>
    </>
    );
}

export default LiveClock;
