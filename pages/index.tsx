import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MdKeyboardArrowUp } from "react-icons/md";
import SliderTwo from "@/components/slidertwo";
import SliderOne from "@/components/sliderone";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialFAQStates = Array.from({ length: 5 }, () => false);
  const [faqStates, setFAQStates] = useState(initialFAQStates);

  const handleIconClick = (index: number) => {
    setFAQStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const faqData = [
    {
      header: "Profitability and Growth",
      text: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    },
    {
      header: "Transparent & Fair Decentralized Earnings",
      text: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    },
    {
      header: "Launching the future",
      text: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    },
    {
      header: "Limitless Possibilities of AI & Crypto",
      text: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    },
  ];

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
  ];

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
  ];

  return (
    <>
      <Head>
        <title>NIFTABLE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerbg}>
        <div className={styles.maincontainer}>
          <div>
            <Navbar />
          </div>
          <div className={`${styles.sectionone} row`}>
            <div className="col-12 col-md-7 col-lg-10">
              <h1 className={styles.mainheader}>
                The worlds first platform for Tokenizing AI blockchain projects
              </h1>
              <h6 className={styles.subheader}>
                Hold the Creon Pass NFT and earn passive income from AI Tools
              </h6>
            </div>
          </div>
        </div>
        {/* SECTION TWO */}
        <div className={`${styles.sectiontwogrid} row`}>
          <div className="col-12 col-md-6 col-lg-6">
            <h1 className={styles.creonheader}> CREON PASS NFT</h1>
            <p className={styles.paragraph}>
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools
            </p>
            <div>
              <p className={styles.boxtext}>
                Pre-launch investment opportunities for upcoming AI projects
              </p>
              <p className={styles.boxtext}>
                Free and early access to Creon built AI projects
              </p>
              <p className={styles.boxtext}>
                Higher allocation limits on the Creon AI Launchpad
              </p>
              <p className={styles.boxtext}>
                Revenue share distribution from Creon built AI projects
              </p>
            </div>
            <div className="my-3">
              <button className={styles.buybtn}>Buy Creon Pass</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <Image src="/sword.svg" alt="logo" width={500} height={400} />
          </div>
        </div>

        {/* SECTION THREE */}

        <div className={`${styles.ctnpadding} row`}>
          <div className="col-12 ">
            <h1 className={styles.mainheader}>PROFITING THROUGH</h1>
            <div className={styles.subheadertwo}>
              <h6 className={styles.innovationtext}>
                AI INNOVATION & DECENTRALIZATION
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.ctnpad}>
          <div className={`${styles.rightsidecontainer} row`}>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <Image
                src="/globe.svg"
                alt="logo"
                width={600}
                height={400}
                className={styles.respimage}
              />
            </div>

            <div className={`col-12 col-lg-6`}>
              <div className={styles.rightside}>
                <h6 className={styles.ctnthree}>
                  {" "}
                  The dynamic community driven business model of the future.
                </h6>
                <p className={styles.ctnthreetext}>
                  At Creon, we blend the power of AI tools with the dynamic
                  crypto and NFT markets, utilizing an innovative business model
                  to drive profitability.This approach empowers our community,
                  as our NFT and token holders directly benefit from the growth
                  and prosperity of the Creon network, creating a win-win
                  scenario for both our community and for the projects we
                  launch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.respview} my-5`}>
          <SliderTwo />
        </div>
        {/* SECTION FOUR */}
        <div className={styles.sectiontwo}>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h1 className={styles.fourheader}>
                Our vision is to support the innovation of AI blockchain
                projects
                <span className={styles.fourctn}>
                  {" "}
                  while prioritizing communities and democratizing profits{" "}
                </span>
              </h1>
              <div className={styles.visionimg}>
                <Image
                  src="/vision.svg"
                  alt="logo"
                  width={600}
                  height={400}
                  className={styles.respimage}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex ">
              <div className="d-flex flex-column  my-2">
                {faqData.map((faq, index) => (
                  <div key={index} className={styles.faq}>
                    <div className={styles.faqheader}>
                      <div className="d-flex align-items-center">
                        <Image
                          src="/earnings.png"
                          alt="logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className={styles.faqcontainer}>
                        <div className={styles.headingcontainer}>
                          <h3 className={styles.faqheading}>{faq.header}</h3>
                          <div
                            className={styles.icon}
                            onClick={() => handleIconClick(index)}
                          >
                            <MdKeyboardArrowUp />
                          </div>
                        </div>
                        {faqStates[index] && (
                          <div className={styles.faqtexts}>
                            <p>{faq.text}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* SECTION FIVE */}
        <div className={styles.respviewtwo}>
          <div
            className={`${styles.sectiontwo} ${styles.sectiontwoo} justify-content-cente`}
          >
            <div>
              <div className={styles.boxcontainer}>
                {comingsoon.map((item, index) => (
                  <div key={index} className={styles.cardcontainer}>
                    <div className={styles.card}>
                      <div className={styles.comingSoon}>{item.supscript}</div>
                      <div className={styles.topctn}>
                        <h3 className={styles.pergridheader}>{item.header}</h3>
                        <h6 className={styles.pergridctn}>{item.subheader}</h6>
                      </div>
                      <div>
                        <Image
                          src={item.image}
                          alt="token"
                          width={250}
                          height={180}
                        />
                      </div>
                      <div>
                        <p className={styles.pergridtext}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.respview}>
          <SliderOne />
        </div>

        {/* SECTION SIX */}

        <div className={styles.sectionsix}>
          <div className={styles.footerbackground}>
            <div className={styles.respviewtwo}>
              {aitools.map((tool, index) => (
                <div key={index} className={styles.lstsection}>
                  <div className={styles.lstctnbg}>
                    <h1 className={styles.lastheader}>{tool.heading}</h1>
                    <p className={styles.lstctntext}>{tool.text}</p>
                  </div>
                  <div className={styles.imagecontainer}>
                    <Image
                      src={tool.image}
                      alt="logo"
                      width={550}
                      height={200}
                      className={styles.image}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
