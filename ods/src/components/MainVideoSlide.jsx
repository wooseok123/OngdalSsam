import React, { useEffect, useRef, useState } from "react";
import checked from "../img/checked.svg";
import {
  MainVideoSlideContainer,
  MainVideoIframeContainer,
  MainVideoIframeWrapper,
  SlideMover,
  MainVideoAdsWrapper,
  MainVideoAdsTextContainer,
  MainVideoAdsTextWrapper,
  MainVideoAdsSecondWrapper,
  MainAdsEachWaterWrapper,
  MainVideoIframeThinContainer,
  MainVideoIframeTextContainer,
  MainVideoIframeBoldContainer,
  MainVideoIframe,
  MainVideoIframeSubContainer,
} from "../styledComponents";
import right from "../img/right.svg";
import left from "../img/left.svg";
import blur from "../img/blur.svg";
import MainAdsEachWater from "./MainAdsEachWater";

const MainVideoSlide = ({ bold, thin, data }) => {
  const iframeWidth = useRef();
  const [slidePX, setSlidePX] = useState(0);
  const [currentWater, setCurrentWater] = useState(1);

  const slideHanlder = (e) => {
    const dx = iframeWidth.current.clientWidth;
    if (e.target.id == "right") {
      setSlidePX(slidePX - dx - 90);
      setCurrentWater(currentWater + 1);
    } else {
      setSlidePX(slidePX + dx + 90);
      setCurrentWater(currentWater - 1);
    }
  };
  return (
    <MainVideoSlideContainer>
      <div
        style={{ position: "absolute", right: "0px", zIndex: 5, top: "20px" }}
      >
        <img src={blur} style={{ height: "390px" }} />
      </div>
      <MainVideoIframeWrapper>
        <div style={{ marginTop: "30px", display: "flex" }}>
          <img src={checked} style={{ height: "45px" }} />
          <MainVideoIframeTextContainer>
            <MainVideoIframeBoldContainer>
              {bold.map((el) => (
                <p>{el}</p>
              ))}
            </MainVideoIframeBoldContainer>

            <MainVideoIframeThinContainer>
              {thin[0].map((el) => (
                <p>{el}</p>
              ))}
            </MainVideoIframeThinContainer>
          </MainVideoIframeTextContainer>
        </div>
        {slidePX === 0 ? (
          ""
        ) : (
          <SlideMover posPC="300" posMobile="20" id="left">
            <img
              src={left}
              style={{ height: "39px", width: "27px" }}
              onClick={slideHanlder}
              id="left"
            />
          </SlideMover>
        )}
        {slidePX <= (data.length - 1) * -650 ? (
          ""
        ) : (
          <SlideMover posPC="945" posMobile="670" id="right" right="470">
            <img
              src={right}
              style={{ height: "39px", width: "27px" }}
              onClick={slideHanlder}
              id="right"
            />
          </SlideMover>
        )}

        <MainVideoIframeContainer>
          <MainVideoIframeSubContainer slidePX={slidePX}>
            {data.map((el) => (
              <MainVideoIframe
                src="https://www.youtube.com/embed/0X50Yr7HAQI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ref={iframeWidth}
              ></MainVideoIframe>
            ))}
          </MainVideoIframeSubContainer>
        </MainVideoIframeContainer>
      </MainVideoIframeWrapper>
      <MainVideoAdsWrapper>
        <MainVideoAdsTextContainer>
          <MainVideoAdsSecondWrapper>
            <MainVideoAdsTextWrapper>
              {thin[1].map((el) => (
                <span style={{ marginLeft: "5px" }}>{el}</span>
              ))}
            </MainVideoAdsTextWrapper>
          </MainVideoAdsSecondWrapper>
        </MainVideoAdsTextContainer>
        <MainAdsEachWaterWrapper>
          {data.map((el) => (
            <MainAdsEachWater {...el} isCurrent={el.id === currentWater} />
          ))}
        </MainAdsEachWaterWrapper>
      </MainVideoAdsWrapper>
    </MainVideoSlideContainer>
  );
};

export default MainVideoSlide;
