import Slider from "react-slick";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderTwo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const aitools = [
    {
      heading: "AI Prospects, Market Size, and Development Pace",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/ai.svg",
    },
    {
      heading: "AI Tools and Market",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/connect.svg",
    },
    {
      heading: " AI, Crypto, and NFT Market",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/crypto.svg",
    },
    {
      heading: " AI, Crypto, and NFT Market",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/ai.svg",
    },
    {
      heading: " AI, Crypto, and NFT Market",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/connect.svg",
    },
    {
      heading: " AI, Crypto, and NFT Market",
      text: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/crypto.svg",
    },
  ];

  return (
    <div className={styles.slidercontainer}>
      <Slider {...settings}>
        {aitools.map((tool, index) => (
          <div key={index} className={styles.cardcontainerr}>
            <div className={styles.lstsectionn}>
              <div className={styles.imagecontainer}>
                <Image
                  src={tool.image}
                  alt="logo"
                  width={550}
                  height={200}
                  className={styles.imagee}
                />
              </div>
              <div className={styles.lstctnbgg}>
                <h1 className={styles.lastheaderr}>{tool.heading}</h1>
                <p className={styles.lstctntextt}>{tool.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
