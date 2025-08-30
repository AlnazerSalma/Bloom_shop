import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "./components/Pre";
import AppContent from "./AppContent";
import "./style.css";
import "./App.css";


const App: React.FC = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <AppContent load={load} />
    </Router>
  );
};

export default App;
