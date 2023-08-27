import React from "react";

const Status = () => {
  const steps = [1, 2, 3, 4];
  const steps2 = [
    { image: "./checkoutImage/1.png", title: "Order Placed" },
    { image: "./checkoutImage/2.png", title: "" },
    { image: "./checkoutImage/3.png", title: "" },
    { image: "./checkoutImage/4.png", title: "" },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2em 0 3em 0",
        }}
      >
        <img
          src="./thankyou.png"
          alt="/"
          style={{ width: "100%", objectFit: "contain", height: "17em",position:"absolute",top:"18.5em" }}
        />
        <div style={{width:"100%",height:"10em",background:"#ebf5f4",margin:"4em 0"}}/>
        <p style={{ fontSize: "18px", fontWeight: 300,textAlign:"center",paddingBottom:20 }}>"Thank you for trusting us!" "Your order is completed!" will do just fine. Just make sure that it is clear <br/>what just happened(and what they should expect to happen next, if necessary)</p>{" "}
        <div
          className="input-container"
          style={{ maxWidth: "900px", width: "100%" }}
        >
          <p style={{ fontSize: "25px", width: "35%", textAlign: "end" }}>
            Track Delivery Status:
          </p>{" "}
          <input
            style={{
              width: "50%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft:"1em"
            }}
          />
        </div>
        <p style={{ paddingTop: "2em" }}>Recipients Name: 55-83</p>
        <p style={{ paddingTop: "2em" }}>
          Status: The recipient has received the item successfully
        </p>
      </div>
      <div
        style={{
          padding: "4em 0",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div
          style={{ width: "100%", backgroundColor: "#005652", height: "20px" }}
        ></div>
        <div className="step-container">
          {steps2.map((item, index) => (
            <div
              style={{
                background: "#fff",
                width: 90,
                height: 90,
                borderRadius: "50%",
              }}
              key={index}
            >
              <div className="steps" style={{ padding: 0, background: "#fff" }}>
                <img
                  src={item.image}
                  alt={item.image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Status;
