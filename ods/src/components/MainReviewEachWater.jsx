import React from "react";
import { MainReviewEachContainer } from "../styledComponents";
import waterIcon from "../img/waterIcon.svg";
const MainReviewEachWater = ({ id, item, quantity, src, name, desc }) => {
  const cuttedDesc = desc.slice(0, 50);
  return (
    <MainReviewEachContainer>
      <img
        src={require(`../img/Review/${src}.svg`)}
        style={{ width: "100%", height: "278px" }}
      />
      <div
        style={{
          padding: "23px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "220px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "rgba(0, 144, 197, 0.7)",
            justifyContent: "space-between",
            fontSize: "14px",
            fontWeight: 600,
            width: "100%",
          }}
        >
          <p>{item}</p>
          <p>{quantity}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "45px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={waterIcon} />
            <p
              style={{
                fontWeight: 500,
                fontSize: "14px",
                color: "gray",
                marginLeft: "10px",
                marginTop: "3px",
              }}
            >
              <span
                style={{ fontWeight: 600, fontSize: "14px", color: "black" }}
              >
                {name}님
              </span>
            </p>
          </div>
          <div style={{ width: "100%", padding: "10px 20px" }}>
            <p style={{ fontWeight: 400, fontSize: "14px" }}>{cuttedDesc}</p>
          </div>
        </div>
        <div style={{ fontWeight: 600, fontSize: "14px", textAlign: "center" }}>
          <p>+ 더보기</p>
        </div>
      </div>
    </MainReviewEachContainer>
  );
};

export default MainReviewEachWater;
