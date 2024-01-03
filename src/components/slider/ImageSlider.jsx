import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../data";
import { sliderData } from "./sliderData";
import "./Slider.css";

const ImageSlider = () => {
  const affiliates = [
    {
      title: "SKINCARE BEAUTY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-01.jpg",
    },
    {
      title: "SKINCARE IRRITATION",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-02.jpg",
    },
    {
      title: "SLEEP DISORDER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-03.jpg",
    },
    {
      title: "IMMUNE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-04.jpg",
    },
    {
      title: "MUSCLE & JOINT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-05.jpg",
    },
    {
      title: "ENERGY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-06.jpg",
    },
    {
      title: "NCD'S",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-07.jpg",
    },
    {
      title: "WEIGHT MANAGEMENT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-08.jpg",
    },
    {
      title: "RELAXATION",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-09.jpg",
    },
    {
      title: "CANCER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-10.jpg",
    },
    {
      title: "HORMONES",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-11.jpg",
    },
    {
      title: "OPIOID",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-12.jpg",
    },
  ];
  const product = [
    {
      title: "CBD OIL",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2.jpg",
    },
    {
      title: "CBD SUPPLEMENTS",
      background: "./black.jpg",
    },

    {
      title: "CBD SKIN & CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-04.jpg",
    },
    {
      title: "BEVERAGE",
      background: "./light-green.jpg",
    },
    {
      title: "CBD BODY CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-03.jpg",
    },
    {
      title: "CBD FOR PETS",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-05.jpg",
    },
    {
      title: "CBD FOR MUSCLE & JOINTS",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/1.jpg",
    },
    {
      title: "HOME USE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-01.jpg",
    },
  ];

  const products = [
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/1701968935468.jpg",
      name: "Earth Lab CBD De' Leep Softgel",
      link: "EARTH LAB CBD DE'LEEP (30 ML),(2 CAP)",
    },
    {
      url: "./earth.png",
      name: "Earth Lab CBD Whitening Mask",
      link: "CBD WHITENING MASK SHEET",
    },
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/1694014891114.jpg",
      name: "CBD I-MUN",
      link: "CBD I-MUN",
    },
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/1694015186672.jpg",
      name: "CBD Collagen peptide",
      link: "CBD COLLAGEN PETPITDE 50ML",
    },
  ];

  const [people] = useState(data);
  const [slider] = useState(sliderData);
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (secondIndex < 0) {
      setSecondIndex(lastIndex);
    }
    if (secondIndex > lastIndex) {
      setSecondIndex(0);
    }
  }, [secondIndex, slider]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSecondIndex(secondIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [secondIndex]);

  return (
    <>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/M4JRTjT5nvA"
        title="Unveiling Dr. Pet CBD (2023) - A Better Way to Live a Happy Life"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <section className="section" style={{ paddingTop: "1em" }}>
        <div className="section-center" style={{ height: "34em" }}>
          {slider.map((item, indexPeople) => {
            const { id, image } = item;
            // console.log(image);
            let position = "nextSlide";
            if (indexPeople === secondIndex) {
              position = "activeSlide";
            }
            if (
              indexPeople === secondIndex - 1 ||
              (secondIndex === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article
                className={position}
                style={{ display: "flex", overflow: "hidden" }}
                key={id}
              >
                <img
                  src={image}
                  alt="/"
                  className="person-img"
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                />
                {/* {image[1] !== "" && (
                  <img
                    src={image[1]}
                    alt={name}
                    className="person-img"
                    style={{ width: "50%" }}
                  />
                )} */}
              </article>
            );
          })}
          <button
            className="prev"
            style={{ marginLeft: "60px" }}
            onClick={() => setSecondIndex(secondIndex - 1)}
          >
            <MdArrowBackIosNew style={{ fontSize: "50px", color: "#fff" }} />
          </button>
          <button
            className="next"
            style={{ right: "50px" }}
            onClick={() => setSecondIndex(secondIndex + 1)}
          >
            <MdArrowForwardIos style={{ fontSize: "50px", color: "#fff" }} />
          </button>
        </div>
      </section>
      <div className="product">
        <div className="all-background">
          <div
            style={{ maxWidth: "1200px", width: "100%", paddingTop: "2rem" }}
          >
            <h1 style={{ textAlign: "center" }}>FIND YOUR CBD BY CATEGORY</h1>
            <div className="product-container">
              {product.map((item, index) => (
                <div
                  className="home-product-item"
                  style={{ backgroundImage: `url(${item.background})` }}
                  key={index}
                >
                  <Link to={`/by-category/${item.title.split(" ").join("-")}`}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/cbd-by-category"
                style={{
                  textAlign: "center",
                  color: "#2d3d41",
                  fontSize: "35px",
                  borderBottom: "2px solid",
                }}
              >
                SHOP ALL CBD PRODUCTS
              </Link>
              <p
                style={{
                  fontSize: 16,
                  padding: "1em 0 2em",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: "1.5em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                CBD, short for cannabidiol, has gained significant popularity in
                recent years as a natural remedy for various ailments. Derived
                from the cannabis plant, CBD is a non-intoxicating compound that
                offers potential therapeutic benefits without the psychoactive
                effects commonly associated with its counterpart, THC. As a
                result, CBD products have emerged as a diverse range of remedies
                and wellness options for individuals seeking alternative
                solutions. This article aims to provide an in-depth exploration
                of CBD products, including their origins, uses, types, and
                potential benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="product" style={{ background: "#000" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // maxWidth: "1300px",
            width: "100%",
          }}
        >
          <h1
            style={{ color: "#fff", paddingTop: "1.5em", textAlign: "center" }}
          >
            FIND YOUR CBD BY PURPOSE
          </h1>
          <div className="product-container">
            {affiliates.map((item, index) => (
              <div
                className="product-item"
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "17em",
                  height: "19em",
                  marginBottom: "0.3em",
                }}
              >
                <Link to={`/by-category/${item.title.split(" ").join("-")}`}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <Link
            style={{
              fontWeight: "bold",
              margin: "20px 50px",
              padding: "10px",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              borderBottom: "1.5px solid #fff",
            }}
            to="/cbd-by-purpose"
          >
            SHOP ALL CBD PRODUCT
          </Link>
        </div>
      </div>

      <div
        style={{
          paddingBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "2.5rem 0 1.5rem", fontWeight: "bold" }}>
          BEST SELLER
        </h1>
        <p
          style={{
            width: "70%",
            fontWeight: 500,
            lineHeight: "1.2rem",
            fontFamily: "'Montserrat', sans-serif",
            paddingBottom: "0.8rem",
          }}
        >
          CBD products have gained popularity due to their potential therapeutic
          benefits. While research is ongoing,
          <br /> CBD has shown promise in several areas, including:
        </p>
        <ul style={{ width: "65%" }}>
          <li>
            Pain Management: CBD may help alleviate chronic pain by interacting
            with receptors in the
            <br /> endocannabinoid system, reducing inflammation and influencing
            neurotransmitter activity.
          </li>
          <li style={{ paddingTop: "0.8rem" }}>
            Anxiety and Depression: Preliminary studies suggest that CBD may
            have an anxiolytic effect, potentially <br />
            reducing symptoms of anxiety and depression. However, further
            research is needed to establish its
            <br />
            efficacy.
          </li>
        </ul>
        <div
          className="product-container"
          style={{ paddingTop: "2rem", maxWidth: "1270px", width: "100%" }}
        >
          {products.map((item, index) => (
            <Link to={`/product-detail/` + item.link} key={index}>
              <img
                src={item.url}
                style={{ width: "18rem", height: "18em", objectFit: "contain" }}
                alt="/"
              />
              <p
                style={{
                  width: "97%",
                  textAlign: "end",
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: "#d0d0d0",
                }}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          background: "#000",
          padding: "2em 0",
          color: "#fff",
          height: "68em",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "0.5em 0" }}>
          AVAILABLE AT
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%", background: "#fff", height: "23.5em" }}>
            <div
              style={{
                position: "absolute",
                left: "6rem",
                display: "flex",
                paddingTop: "1.5em",
              }}
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/mix.png"
                style={{ width: "40rem", objectFit: "cover" }}
                alt="/"
              />
              {/* <div style={{ display: "flex", flexWrap: "wrap", width: "20em" }}>
                {healthCafe.map((item, index) => (
                  <img src={item} style={{ width: "9.5em", height: "12em" }} />
                ))}
              </div> */}
            </div>
          </div>
          <div style={{ width: "29%", marginLeft: "0.5rem" }}>
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/LOGO+VITAL-02.png"
              style={{ width: "15rem", objectFit: "contain" }}
              alt="/"
            />
            <h2 style={{ textAlign: "end" }}>VITAL HEALTH CAFE</h2>
            <p style={{ padding: "0.3rem 0", textAlign: "end" }}>
              Vital Health Cafe
            </p>
            <p
              style={{
                width: "100%",
                fontSize: "0.8rem",
                fontWeight: 600,
                lineHeight: "1.3rem",
                textAlign: "end",
              }}
            >
              Vital Health Café offer you wide range of food
              <br /> nutrients ranging from healthy food, beverages
              <br /> and CBD-infused drinks. Looking for more CBD
              <br /> products, visit us at “The Marche” Thonglor Soi 4,
              <br /> 1st floor.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{ background: "#42b2be", width: "2.5em", height: "10em" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5em",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{ background: "#42b2be", width: "3.5em", height: "10em" }}
            />
          </div>
          <div style={{ width: "29%", marginLeft: "-8rem" }}>
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/LOGO+VITAL-01.png"
              style={{
                width: "18rem",
                objectFit: "cover",
                marginLeft: "0rem",
              }}
              alt="/"
            />
            <h2>VITAL MEDI CLINIC</h2>
            <p style={{ padding: "0.3rem 0" }}>CBD products</p>
            <p
              style={{
                width: "100%",
                lineHeight: "1.3rem",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Vital Medi Clinic is an Integrative Medical clinic which
              <br /> combines Preventive Medicine, Applied Thai Traditional
              <br /> Medicine (ATTM) and Traditional Chinese Medicine (TCM)
              <br /> altogether. We personalized treatment plans individually to
              <br /> reach practical and sustainable optimum health.
            </p>
          </div>
          <div style={{ width: "45%", background: "#fff", height: "24rem" }}>
            <div
              style={{
                position: "absolute",
                right: "5%",
                display: "flex",
                paddingTop: "1.5em",
              }}
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/mix-clinic.png"
                style={{ width: "42rem", objectFit: "cover" }}
                alt="/"
              />
              {/* <div style={{ display: "flex", flexWrap: "wrap", width: "20em" }}>
                {healthCafe.map((item, index) => (
                  <img src={item} style={{ width: "9.5em", height: "12em" }} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
