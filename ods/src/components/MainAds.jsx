import React from "react";
import { MainAdsContainer } from "../styledComponents";
import adBtn from "../img/adBtn.svg";
const MainAds = ({
  id,
  name,
  title,
  sub,
  src,
  reverse = false,
  ad = false,
}) => {
  return (
    <MainAdsContainer>
      {reverse ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            <p style={{ fontWeight: 500, fontSize: "16px", color: "gray" }}>
              {sub}
            </p>
            <p style={{ fontWeight: 600, fontSize: "24px", marginTop: "13px" }}>
              {title}
            </p>
            <img
              src={adBtn}
              style={{ width: "38px", height: "20px", marginTop: "11px" }}
            />
          </div>
          <img src={require(`../img/${src}`)} />
        </div>
      ) : (
        <>
          <img src={require(`../img/${src}`)} />
          <div style={{ position: "absolute", top: "40px", right: "100px" }}>
            <p style={{ fontWeight: 500, fontSize: "16px", color: "gray" }}>
              {sub}
            </p>
            <p style={{ fontWeight: 600, fontSize: "24px", marginTop: "13px" }}>
              {title}
            </p>
          </div>
        </>
      )}
    </MainAdsContainer>
  );
};

export default MainAds;
