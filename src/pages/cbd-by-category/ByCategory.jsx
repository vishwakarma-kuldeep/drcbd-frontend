 
import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";

const ByCategory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      getAllProduct();
    }, []);
  
    const getAllProduct = async () => {
      try {
        const res = await ApiService.getAllProduct();
         const categoryProduct=res.data.filter(item=>{
          if(item.category2=="CBD BY CATEGORY"){
            return item
          }
         })
        const productsByCategory = categoryProduct.reduce((acc, product) => {
          //console.log(acc,product)
          const categoryName = product.category3;
          console.log(categoryName);
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(product);
          return acc;
        }, {});
  
        // Convert the object to a 2D array
        const productsArray = Object.entries(productsByCategory);
        setData(productsArray);
        console.log(productsArray);
        //console.log(res.data)
      } catch (err) {
        console.log(err.message);
      }
    };
    const PreviousBtn = (props) => {
      const { onClick } = props;
      return (
        <div className="control-btn" onClick={onClick}>
          <button className="prev">
            <MdArrowBackIosNew style={{ fontSize: "45px" }} />
          </button>
        </div>
      );
    };
    const NextBtn = (props) => {
      const { onClick } = props;
      return (
        <div className="control-btn" onClick={onClick}>
          <button className="next">
            <MdArrowForwardIos style={{ fontSize: "45px" }} />
          </button>
        </div>
      );
    };
    const settings = {
      dots: false,
      infinite: true,
      //autoplay: true,
      speed: 500,
      slidesToShow: 4,
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
      <div>
  
      <div style={{ width: "100%", padding: "20px 50px  0" }}>
        {data.map((item, index) => (
          <div style={{ padding: "15px 0" }} key={index}>
            <h2 style={{ paddingBottom: "15px", color: "#005652" }}>
              Products / {item[0]}
            </h2>
            {item[1].length <= 4 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
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
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Link
                style={{
                  padding: "20px 0",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                href=""
              >
                See All
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
}

export default ByCategory