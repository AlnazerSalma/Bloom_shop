import React from "react";
import Slider from "react-slick";
import "./CustomerFeedback.css";

export interface Feedback {
  id: number;
  name: string;
  text: string;
  img: string;
}

const feedbackData: Feedback[] = [
  { id: 1, name: "Victor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/101/101" },
  { id: 2, name: "Satya Nadella", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/102/102" },
  { id: 3, name: "Virat Kohli", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/104/104" },
  { id: 4, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/103/103" },
  { id: 5, name: "Victor", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/101/101" },
  { id: 6, name: "Satya Nadella", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/102/102" },
  { id: 7, name: "Virat Kohli", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/104/104" },
  { id: 8, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio", img: "https://picsum.photos/103/103" },
];

const CustomerFeedback: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="customer-feedback py-10 mb-10">
      <div className="container">
        {/* Header */}
        <div className="feedback-header text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Customer Feedback</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {feedbackData.map((item) => (
              <div key={item.id} className="feedback-slide my-6">
                <div className="feedback-card relative shadow-lg rounded-xl py-8 px-6 mx-4 bg-primary/10 dark:bg-gray-800">
                  <img src={item.img} alt={item.name} className="feedback-img rounded-full w-20 h-20 mb-4" />
                  <div className="flex flex-col items-center gap-4">
                    <p className="feedback-text text-xs text-gray-500">{item.text}</p>
                    <h2 className="feedback-name text-xl font-bold text-black/80 dark:text-light">{item.name}</h2>
                  </div>
                  <p className="feedback-quote text-9xl font-serif text-black/20 absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
