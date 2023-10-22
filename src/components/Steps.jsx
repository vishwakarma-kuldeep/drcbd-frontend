import React from 'react';

const Steps = (props) => {
    const steps=[1,2,3,4];

  return (
    <div className="cart-step-container">
    <div
      style={{ width: "100%", background: "#005652", height: "15px" }}
    ></div>
    <div className="step-container">
      {steps.map((index) => (
        <div
          style={{
            background: "#fff",
            width: 70,
            height: 70,
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          <div
            className="steps"
            style={{
              background: props.stepsColor.includes(index) ? "#005652" : "#fff",
              color: props.stepsColor.includes(index) ? "#fff" : "#005652",
              border: props.stepsColor.includes(index)
                ? "1px solid #fff"
                : "1px solid #005652",
            }}
          >
            <h1 style={{ fontSize: "40px" }}>{index}</h1>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Steps