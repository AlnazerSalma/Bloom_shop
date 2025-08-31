import React from "react";
import Hero from "../components/home/hero/Hero";
import TopProducts from "../components/home/top_products/TopCategory";
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      {/* You can add more sections below */}
    </div>
  );
};

export default HomePage;

