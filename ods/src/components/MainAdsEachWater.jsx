import React, { useState } from "react";
import {
  MainAdsEachWaterConatiner,
  MainAdsEachWaterClick,
} from "../styledComponents";
import headerLine from "../img/headerLine.svg";
import cart from "../img/cart.svg";

const MainAdsEachWater = ({ name, fac, desc, price, img, isCurrent }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <MainAdsEachWaterConatiner current={isCurrent} onClick={handleIsClicked}>
        <div>
          <p style={{ fontWeight: 600, fontSize: "20px" }}>{name}</p>
          <p
            style={{
              fontWeight: 500,
              fontSize: "12px",
              color: "#0090C5",
              marginTop: "6px",
            }}
          >
            {fac}
          </p>
        </div>
        <img src={require(`../img/${img}`)} style={{ flex: 1 }} />
      </MainAdsEachWaterConatiner>
      {isClicked ? (
        <MainAdsEachWaterClick>
          <div
            style={{
              textAlign: "left",
              fontWeight: 400,
              fontSize: "14px",
              color: "#444444",
              paddingRight: "20px",
            }}
          >
            {desc.map((el) => (
              <p>{el}</p>
            ))}
            <p style={{ marginTop: "21px", fontSize: "16px" }}>옹달샘에서만 </p>
            <div style={{ display: "flex", gap: "10px", fontWeight: 600 }}>
              <p>500ml</p>
              <img src={headerLine} />
              <p>{price}원</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "60px",
              borderRadius: "0px 0px 25px 0px",
              backgroundColor: "#04BCFF99",
            }}
          >
            <img
              src={cart}
              style={{ marginLeft: "140px", marginTop: "12px" }}
            />
          </div>
        </MainAdsEachWaterClick>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainAdsEachWater;
