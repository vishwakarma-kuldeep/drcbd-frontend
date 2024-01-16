import React, { useState, useRef } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";
// import cbd from "../../../public/dr/cbd.png";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";

const Header = () => {
  const { product } = useSelector((state) => state.product);
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();
  const [isHovered, setIsHover] = useState(false);
  const [search, setSearch] = useState("");
  const { cart } = useSelector((state) => state.cart);

  console.log(cart);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handelNext = async (type) => {
    if (!user) {
      console.log("hi");
      setOpen(true);
    } else {
      console.log(type);
      const res = await ApiService.getUser();
      console.log(res.data, "h2");
      res.data.status ? navigate(type) : setOpen(true);
    }
  };

  const handelSearch = () => {};
  return (
    <>
      {open && <Modal setOpen={setOpen} user={user} />}
      <header>
        <input type="checkbox" name="" id="check" />
        <div className="header-container">
          <div
            className="sign-profile"
          >
            {/*<img src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/brandp/england.jpg" style={{ width: "30px" }} alt="/" />*/}
            <a href="#" style={{ marginRight: "2px" }}>
              EN
            </a>
            |
            <a href="#" style={{ marginLeft: "2px" }}>
              TH |{" "}
            </a>
            {/*<img src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/brandp/thailand.png" style={{ width: "24px" }} alt="/" />*/}
            <Link to="/sign-in" style={{ marginLeft: "2px" }}>
              Sign In |
            </Link>
            <p
              style={{ cursor: "pointer", marginLeft: "2px" }}
              onClick={() => {
                if (user) {
                  navigate("/my-orders");
                } else {
                  setOpen(true);
                }
              }}
            >
              {" "}
              My Orders
            </p>
          </div>
          <div className="cart-profile" style={{}}>
            <div className="search-bar">
              <BsSearch
                color="#000"
                style={{ marginRight: "0.5em", cursor: "pointer" }}
                size={16}
                onClick={handelSearch}
              />
              <input
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  if (!isHovered) {
                    setIsHover(false);
                  }
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                style={{
                  outline: "none",
                  width: "100%",
                  fontSize: 16,
                  border: "none",
                  background: "#fff",
                }}
                ref={inputRef}
              />
            </div>
            {search !== "" && isFocus ? (
              <div className="searchQuery" style={{ display: "box" }}>
                {product.map((item, index) => {
                  const isMatch =
                    item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
                  return (
                    <ul style={{ listStyle: "none" }}>
                      {isMatch && (
                        <li
                          style={{
                            padding: "2.5px 0",
                            fontSize: 13,
                            fontWeight: "bold",
                            borderBottom: "1px solid",
                          }}
                          key={index}
                          onClick={() => setSearch("")}
                        >
                          <Link to={`/product-detail/` + item.name}>
                            {item.name}
                          </Link>
                        </li>
                      )}
                    </ul>
                  );
                })}
              </div>
            ) : (
              <></>
            )}

            <div
              style={{
                color: "#fff",
                marginLeft: "1em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/cart")}
            >
              <div className="cart-item">
                <p style={{ marginLeft: "2.5px" }}>
                  {cart ? cart.items.length : "0"}
                </p>
              </div>
              {/*<MdOutlineAddShoppingCart
                style={{ fontSize: "25px", alignSelf: "end" }}
          />*/}
            </div>
            <div
              style={{
                color: "#fff",
                marginLeft: "1em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/profile")}
            >
              <FaUserCircle style={{ fontSize: "25px", alignSelf: "end" }} />
            </div>
            <a href="https://drcbdgroup.com/" className="old-web">
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/cbd.png"
                style={{
                  objectFit: "cover",
                  height: "25px",
                  width: "80px",
                  top: 20,
                  left: "45%",
                  marginLeft: "0.5rem",
                }}
                alt={""}
              />
            </a>
            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <img
            src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/cbd.png"
            style={{
              objectFit: "cover",
              height: "45px",
              width: "120px",
              top: 20,
              left: "45%",
            }}
            alt={""}
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
