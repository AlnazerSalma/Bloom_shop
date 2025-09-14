import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegCalendarAlt } from "react-icons/fa";
import LiveClock from "../components/LiveClock";

function Dashboard() {


  
  return (
    <div   style={{
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
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
