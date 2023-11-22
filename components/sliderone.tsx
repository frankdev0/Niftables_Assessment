import Slider from "react-slick";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderOne() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "150px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const comingsoon = [
    {
      supscript: "COMING SOON",
      header: "TOKEN",
      subheader: "The Gateway token to the world of AI",
      image: "/token.svg",
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      supscript: "COMING SOON",
      header: "REVENUE",
      subheader: "Driving income and growth through decentralization",
      image: "/revenue.svg",
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      supscript: "COMING SOON",
      header: "LAUNCH PAD",
      subheader: "The Gateway token to the world of AI",
      image: "/launchpad.svg",
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      supscript: "COMING SOON",
      header: "TOKEN",
      subheader: "The Gateway token to the world of AI",
      image: "/token.svg",
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      supscript: "COMING SOON",
      header: "REVENUE",
      subheader: "The Gateway token to the world of AI",
      image: "/revenue.svg",
      text: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
  ];
  return (
    <div className={styles.slidercontainer}>
      <Slider {...settings}>
        {comingsoon.map((item, index) => (
          <div key={index} className={styles.cardcontainer}>
            <div className={styles.card}>
              <div className={styles.comingSoon}>{item.supscript}</div>
              <div className={styles.topctn}>
                <h3 className={styles.pergridheader}>{item.header}</h3>
                <h6 className={styles.pergridctn}>{item.subheader}</h6>
              </div>
              <div>
                <Image src={item.image} alt="token" width={250} height={180} />
              </div>
              <div>
                <p className={styles.pergridtext}>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
