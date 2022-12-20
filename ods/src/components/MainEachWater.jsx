import React from "react";
import {
  MainEachWaterContainer,
  MainEachWaterImg,
  MainEachWaterImgContainer,
  MainEachWaterList,
  MainEachWaterHashTags,
} from "../styledComponents";
import water from "../img/water.png";
import headerLine from "../img/headerLine.svg";
import verified from "../img/verified.svg";
import SaleTri from "../img/saleTri.svg";

const MainEachWater = ({
  id,
  name,
  fac,
  price,
  validDate = false,
  saleRate = false,
  hashTags,
}) => {
  return (
    <MainEachWaterContainer>
      <MainEachWaterList>
        {validDate ? (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "62px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "20px",
              color: "white",
              background: "#04BCFFB2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: "106px",
              right: "-3px",
              border: "4px solid #04BCFFB2",
            }}
          >
            {validDate} 적합
          </div>
        ) : (
          ""
        )}
        {saleRate ? (
          <div style={{ position: "absolute", bottom: "-10px", left: "-5px" }}>
            <img src={SaleTri} />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "15px",
                fontWeight: 700,
                fontSize: "20px",
                color: "white",
              }}
            >
              {saleRate}%
            </div>
          </div>
        ) : (
          ""
        )}
        <div style={{ padding: "30px" }}>
          <div>
            <span
              style={{ fontWeight: 600, fontSize: "20px", marginRight: "26px" }}
            >
              {name}
            </span>
            <img src={headerLine} />
            <span
              style={{
                fontWeight: 500,
                fontSize: "16px",
                color: "#0090C5",
                marginLeft: "16px",
              }}
            >
              {fac}
            </span>
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {saleRate ? (
              <>
                <span>
                  <del>개당 {price}원</del>
                </span>
                <div>
                  <span>개당 {price * (saleRate / 100)}원 /</span>
                  <span> 500ml 기준</span>
                </div>
              </>
            ) : (
              <>
                <span>개당 {price} /</span>
                <span> 500ml 기준</span>
              </>
            )}
          </div>
        </div>
        <MainEachWaterImgContainer>
          <MainEachWaterImg src={water} />
        </MainEachWaterImgContainer>
      </MainEachWaterList>
      <MainEachWaterHashTags>
        {hashTags.map((el) => (
          <span style={{ marginLeft: "8px" }}>#{el}</span>
        ))}
      </MainEachWaterHashTags>
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "0px",
          zIndex: 10,
        }}
      >
        <img src={verified} />
      </div>
    </MainEachWaterContainer>
  );
};

export default MainEachWater;
