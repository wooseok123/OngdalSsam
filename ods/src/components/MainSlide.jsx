import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainSlide1 from "../img/MainSlide/MainSlide1.svg";
import { MainSlideContainer, MainSlideImg } from "../styledComponents";
import ongdal1 from "../img/ongdal_1.svg";
import ongdal2 from "../img/ongdal_2.svg";
import slideToggle from "../img/SlideToggle.svg";

const MainSlide = () => {
  return (
    <MainSlideContainer>
      <Carousel>
        <div style={{ position: "relative" }}>
          <MainSlideImg src={MainSlide1} />
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              width: "100%",
              height: "417px",
              position: "absolute",
              top: "0px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "158px",
              color: "white",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: 500 }}>
              깨끗한 물의 기준점
            </p>
            <div
              style={{
                marginTop: "35px",
                fontSize: "40px",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              <p>
                <span style={{ color: "#04BCFF" }}>옹달샘</span>과 여러분이 함께
              </p>
              <p>만들어 나가는 안전한 생수문화 </p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "0px",
              width: "430px",
              height: "150px",
              borderRadius: "20px 0px 0px 20px",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "0px 20px" }}>
              <img src={slideToggle}></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <img src={ongdal1} style={{ width: "55px", height: "55px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    옹달샘이 처음이신가요?
                  </p>
                  <p
                    style={{ fontSize: "12px", fontWeight: 500, color: "gray" }}
                  >
                    내가 딱 맞는 생수 찾기
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={ongdal2} style={{ width: "55px", height: "55px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    마시고 있는 물이 궁금하다면?
                  </p>
                  <p
                    style={{ fontSize: "12px", fontWeight: 500, color: "gray" }}
                  >
                    클릭하여 검색해 보세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MainSlideImg src={MainSlide1} />
        </div>
        <div>
          <MainSlideImg src={MainSlide1} />
        </div>
      </Carousel>
    </MainSlideContainer>
  );
};

export default MainSlide;
