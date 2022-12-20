import React from "react";
import checked from "../img/checked.svg";
import MainEachWater from "./MainEachWater";
import {
  MainWaterSlideContainer,
  MainEachWaterOverflow,
} from "../styledComponents";
import blur from "../img/blur.svg";

const MainWaterSlide = ({ bold, thin, data }) => {
  return (
    <MainWaterSlideContainer>
      <div
        style={{ position: "absolute", right: "0px", zIndex: 5, top: "20px" }}
      >
        <img src={blur} style={{ height: "390px" }} />
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ marginTop: "30px", display: "flex" }}>
          <img src={checked} style={{ height: "45px" }} />
          <div
            style={{
              fontWeight: 600,
              fontSize: "25px",
              width: "220px",
              margin: "0px 0px 0px 20px",
            }}
          >
            {bold.map((el) => (
              <p>{el}</p>
            ))}
            <div
              style={{
                marginTop: "40px",
                fontWeight: 400,
                fontSize: "14px",
                color: "#757575",
              }}
            >
              {thin}
            </div>
          </div>
        </div>
        <MainEachWaterOverflow>
          {data.map((el) => (
            <MainEachWater {...el} />
          ))}
        </MainEachWaterOverflow>
      </div>
    </MainWaterSlideContainer>
  );
};

export default MainWaterSlide;
