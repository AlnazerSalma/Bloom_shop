import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../../../assets/image/home/shirt/shirt.png";
import Img2 from "../../../assets/image/home/shirt/shirt2.png";
import Img3 from "../../../assets/image/home/shirt/shirt3.png";
import "./TopProducts.css";

interface Product {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface TopProductsState {
  products: Product[];
}
class TopProducts extends Component<unknown, TopProductsState> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          img: Img1,
          title: "Casual Wear",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: Img2,
          title: "Printed shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: Img3,
          title: "Women shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div className="top-products">
        <div className="container">
          {/* Header */}
          <div className="header text-left mb-24">
            <p className="text-sm text-primary">Top Rated Products for you</p>
            <h1 className="text-3xl font-bold">Best Products</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((data) => (
              <div key={data.id} className="product-card group">
                <div className="image-section">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="product-img"
                  />
                </div>
                <div className="details-section">
                  <div className="stars">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="product-title">{data.title}</h1>
                  <p className="product-description">{data.description}</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TopProducts;
