import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";

const ByCategory = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const res = await ApiService.getAllProduct();
      const categoryProduct = res.data.filter((item) => {
        if (item.category2.toLowerCase() == categoryName.split("-").join(" ").toLowerCase()) {
          return item;
        }
      });
      setData(categoryProduct);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:"2rem 0"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, i) => (
          <ProductSlider image={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ByCategory;