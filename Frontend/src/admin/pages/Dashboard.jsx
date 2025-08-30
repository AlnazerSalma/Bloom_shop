import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegCalendarAlt } from "react-icons/fa";
import LiveClock from "../components/LiveClock";
import "../style/Dashboard.css";

function Dashboard() {
  const { t, i18n } = useTranslation();

  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header" >
        <div className="dashboard-date-box">
          <FaRegCalendarAlt className="calendar-icon" />
          <div>
            <LiveClock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
