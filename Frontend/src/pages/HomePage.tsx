import React from "react";
import Hero from "../components/home/hero/Hero";
import TopProducts from "../components/home/top_categories/TopCategory";
import Banner from "../components/home/banner/Banner";
import BestSellers from "../components/home/best_sellers/BestSellers";
import CustomerFeedback from "../components/home/customer_feedback/CustomerFeedback";
import useScrollRestoration from "../hook/useScrollRestoration";

const HomePage: React.FC = () => {
  useScrollRestoration();
  return (
    <div>
      <Hero />
      <TopProducts />
      <BestSellers />
      <Banner />
      <CustomerFeedback />
    </div>
  );
};

export default HomePage;
