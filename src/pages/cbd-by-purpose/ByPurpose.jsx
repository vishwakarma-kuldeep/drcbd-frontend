import React from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import Card from "../../components/card/Card";

const ByPurpose = () => {
  const { product } = useSelector((state) => state.product);

  const productsByCategory = {};
  product.forEach((product) => {
    if (
      product.cbdByCategory &&
      "/cbd-by-category" === window.location.pathname &&
      product?.categoryName.length !== 0
    ) {
      const categoryName = product?.categoryName[0];

      if (!productsByCategory[categoryName]) {
        productsByCategory[categoryName] = [];
      }

      productsByCategory[categoryName].push(product);
    }
    if (
      product.cbdByPurpose &&
      "/cbd-by-purpose" === window.location.pathname &&
      product?.purposeName.length !== 0
    ) {
      const categoryName = product?.purposeName[0];

      if (!productsByCategory[categoryName]) {
        productsByCategory[categoryName] = [];
      }

      productsByCategory[categoryName].push(product);
    }
  });

  const productsArray = Object.entries(productsByCategory);
  const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <MdArrowBackIosNew style={{ fontSize: "45px", color: "#000" }} />
        </button>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <MdArrowForwardIos style={{ fontSize: "45px", color: "#000" }} />
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    //autoplay: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0px",
      }}
    >
      {product.loading === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {[1, 2, 3].map(() => (
            <Card />
          ))}
        </div>
      ) : (
        productsArray.map((item, index) => (
          <div
            style={{ padding: "15px 0", maxWidth: "1100px", width: "100%" }}
            key={index}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <h2 style={{ paddingBottom: "15px", color: "#005652" }}>
                Products / {item[0]}
              </h2>
              <Link
                style={{
                  padding: "20px 0",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to={`/by-category/${item[0]}`}
              >
                See All
              </Link>
            </div>
            {item[1].length <= 3 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: item[1].length > 2 && "space-between",
                  alignItems: "center",
                }}
              >
                {item[1].map((image, i) => (
                  <ProductSlider image={image} i={i} />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {item[1].map((image, i) => (
                  <ProductSlider image={image} i={i} />
                ))}
              </Slider>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ByPurpose;
