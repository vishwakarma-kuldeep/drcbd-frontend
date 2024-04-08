import axios from "axios";
import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCart } from "../state/actions/cartAction";

const PaymentSuccess = () => {
  const delver_address = localStorage.getItem("delver_address");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#005652",
        }}
      >
        <BiSolidBadgeCheck color="#005652" size={45} />
        <h4 style={{ padding: "5px 0" }}>Your Order Placed Successfully</h4>
        <p>Thank You For Your Shopping</p>
        <button
          style={{
            background: "#005652",
            color: "#fff",
            textAlign: "center",
            margin: "15px 0",
            fontWeight: "bold",
            fontSize: "20px",
            width: "20rem",
          }}
          onClick={async() => {
            const user = localStorage.getItem("token");
            const config = {
              headers: {
                Authorization: `Bearer ${user}`,
                "Content-Type": "application/json",
              },
            };
            const res = await axios.post(
              "https://drcbd-backend-zgqu.onrender.com/orders/place_order",
              { cartId: orderId, userAdd: JSON.parse(delver_address) },
              config
            );
            if (res.data.status) {
              await getCart(dispatch);
              navigate("/order-history");
              window.location.reload();
            }
            //navigate("/order-history");
          }}
        >
          Track Order
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;