import React from "react";
import Hero from "../components/home/hero/Hero";
import TopProducts from "../components/home/top_products/TopCategory";
import Banner from "../components/home/banner/Banner";
import CustomerFeedback from "../components/home/customer_feedback/CustomerFeedback";
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <Banner />
      <CustomerFeedback />
    </div>
  );
};

export default HomePage;

