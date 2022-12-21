import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");

  margin: 0 auto;
  max-width: 1600px;
  min-width: 569px;
  width: 100vw;
  * {
    box-sizing: border-box;
    font-family: "Gothic A1", sans-serif;
  }

  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

// Main.js

export const MainWaterAndAdsWrapper = styled.div`
  margin-left: 200px;

  @media screen and (max-width: 1100px) {
    margin-left: 50px;
  }
`;

export const MainAdsWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 20px;
  margin-top: 64px;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 155px;
  padding: 0px 68px;
  box-sizing: border-box;
  display: flex;
  align-items: end;

  @media screen and (max-width: 850px) {
    padding: 0px 20px;
  }
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
`;

export const HeaderItemsMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderItemsMobileLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const HeaderNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29px;
  margin-left: 37px;

  @media screen and (max-width: 1600px) {
    gap: 0px;
  }
`;

export const HeaderNavMobileContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 29px;

  @media screen and (max-width: 1600px) {
    gap: 0px;
  }
`;

export const HeaderInfoContainer = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 25px;
`;

export const HeaderInfoMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const HeaderInfoBeforeLogin = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  margin-right: 15px;
  gap: 20px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 850px) {
    margin: 0px;
  }
`;

export const HeaderInfoAfterLogin = styled.div`
  margin-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const InfoSearchContainer = styled.div`
  width: 450px;
  height: 40px;
  border-radius: 20px;
  background-color: #f0f0f0;
  display: flex;

  @media screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

export const InfoSearchInput = styled.input`
  border: none;
  background-color: #f0f0f0;
  flex: 1;
  border-radius: 20px;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
`;

export const HeaderBtnLinkWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
`;

export const HeaderBtnContainer = styled.div`
  width: ${(props) => (props.type === "normal" ? "135px" : "auto")};

  height: ${(props) => (props.type === "normal" ? "64px" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.type === "normal" ? "16px" : "12px")};
  font-weight: ${(props) => (props.type === "normal" ? 700 : 400)};
`;

// MainSlide

export const MainSlideContainer = styled.div`
  .thumbs,
  .carousel-status {
    display: none;
  }

  button.control-arrow::before {
    width: 30px;
  }
`;

export const MainSlideImg = styled.img`
  height: 417px;
  width: 100%;
  object-fit: cover;
`;

// MainEachWater

export const MainEachWaterContainer = styled.div`
  position: relative;
`;

export const MainEachWaterList = styled.div`
  height: 369px;
  flex: 0 0 279px;

  border-radius: 25px;
  position: relative;

  border: 4px solid #eeeeee;
  background: #eeeeee;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  &:first-child {
    margin-left: 20px;
  }

  &:hover {
    border: 4px solid #04bcff;
  }
`;

export const MainEachWaterImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainEachWaterImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 0 auto;
`;

export const MainEachWaterHashTags = styled.div`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
`;

// MainWaterSlide

export const MainWaterSlideContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 70px;
  position: relative;
`;

export const MainEachWaterOverflow = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  flexgrow: 1;
  gap: 50px;

  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

// MainAds

export const MainAdsContainer = styled.div`
  flex: 0 0 630px;
  height: 149px;
  border-radius: 25px;
  background-color: rgba(238, 238, 238, 0.5);
  overflow: hidden;
  position: relative;

  &:hover {
    transfrom: scale(1.1);
  }
`;

// MainVideoSlide

export const MainVideoSlideContainer = styled.div`
  width: 100%;
  height: 786px;

  margin-top: 70px;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: auto;
  }
`;

export const MainVideoIframeWrapper = styled.div`
  display: flex;
  height: 50%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MainVideoIframeTextContainer = styled.div`
  font-weight: 600;
  font-size: 25px;
  width: 220px;
  margin: 0px 0px 0px 20px;

  @media screen and (max-width: 1200px) {
    display: flex;
    width: 100%;
    aling-items: center;
  }
`;

export const MainVideoIframeBoldContainer = styled.div``;

export const MainVideoIframe = styled.iframe`
  width: 560px;
  height: 315px;

  @media screen and (max-width: 760px) {
    width: 360px;
    height: 180px;
  }
`;

export const MainVideoIframeThinContainer = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #757575;

  @media screen and (max-width: 1200px) {
    margin-top: 0px;
    display: flex;
    align-items: center;
    margin-left: 30px;
  }
`;

export const MainVideoAdsWrapper = styled.div`
  display: flex;
  height: 50%;

  @media screen and (max-width: 1200px) {
    height: auto;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const MainVideoAdsTextContainer = styled.div`
  margin-top: 30px;
  display: flex;

  @media screen and (max-width: 950px) {
    margin-top: 0px;
  }
`;

export const MainVideoAdsSecondWrapper = styled.div`
  font-weight: 600;
  font-size: 25px;
  width: 220px;
  margin: 0px 0px 0px 65px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const MainAdsEachWaterWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 13px;
  height: 290px;
  aling-items: end;
  margin-left: 50px;
  overflow-x: scroll;

  overflow-y: hidden;

  @media screen and (max-width: 950px) {
    height: 250px;
  }
`;

export const MainVideoAdsTextWrapper = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  color: #757575;

  @media screen and (max-width: 950px) {
    margin-top: 40px;
    flex-direction: row;
  }
`;

export const MainVideoIframeContainer = styled.div`
  height: 385px;
  border-radius: 25px 0px 0px 25px;
  background-color: rgba(215, 215, 215, 0.15);
  flex-grow: 1;
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  @media screen and (max-width: 760px) {
    height: auto;
    padding: 40px 0px;
  }
`;

export const SlideMover = styled.div`
  position: absolute;
  top: 180px;
  z-index: 10;
  left: ${(props) => `${props.posPC}px`};

  @media screen and (max-width: 1200px) {
    top: 260px;
    left: ${(props) => `${props.posMobile}px`};
  }

  @media screen and (max-width: 760px) {
    top: 190px;
    left: ${(props) => `${props.right}px`};
  }
`;

export const MainVideoIframeSubContainer = styled.div`
  margin-left: 78px;
  display: flex;
  gap: 90px;
  transform: ${(props) => `translateX(${props.slidePX}px)`};
  transition-duration: 500ms;
`;

// MainAdsEachWater

export const MainAdsEachWaterConatiner = styled.div`
  height: ${(props) => (props.current ? "235px" : "210px")};
  width: ${(props) => (props.current ? "181px" : "161px")};
  transition-duration: 500ms;
  background-color: #f2f2f2;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  border: ${(props) => (props.current ? "3px solid #04BCFF" : "none")};
`;

export const MainAdsEachWaterClick = styled.div`
  width: 260px;
  height: 200px;
  background-color: rgba(242, 242, 242, 0.8);
  margin-left: -70px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding: 20px 0px 0px 0px;
`;

// MainQuestion

export const MainQuestionContainer = styled.div`
  width: 100%;
  height: 518px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 68px;

  @media screen and (max-width: 1200px) {
    height: auto;
    padding: 50px 0px;
  }
`;

export const MainQuestionTextContainer = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: white;

  @media screen and (max-width: 1200px) {
    padding: 40px 0px;
  }
`;

export const MainQuestionImgWrapper = styled.div`
  margin-top: 92px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    margin-top: 20px;
  }
`;

export const MainQuestionImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > img:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }

  @media screen and (max-width: 1200px) {
    width: 33.3%;
    margin-bottom: 20px;
  }
`;

// MainReview

export const MainReviewContainer = styled.div`
  width: 100%;
  height: 878px;
  background-color: rgba(4, 188, 255, 0.1);
  padding-top: 115px;
`;

export const MainReviewEachWrapper = styled.div`
  display: flex;
  overflow: hidden;
  gap: 20px;
  margin-top: 64px;
  height: 500px;
  justify-content: center;
  overflow-x: scroll;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const MainReviewEachContainer = styled.div`
  flex: 0 0 286px;
  background-color: white;
  height: 484px;
  border-radius: 25px;
  box-shadow: 1px 1px 8px gray;
`;

export const MainReviewTextContainer = styled.div`
  display: flex;
  margin-left: 170px;
  align-items: center;

  @media screen and (max-width: 1010px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const MainReviewRightTextContainer = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: gray;
  margin-left: 60px;

  @media screen and (max-width: 1010px) {
    margin-left: 0px;
  }
`;

// MainLogin

export const MainLoginContainer = styled.div`
  width: 100%;
  position: relative;

  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainLoginTextContainer = styled.div`
  font-size: 24px;
  position: absolute;
  top: 80px;
  right: 35%;

  @media screen and (max-width: 1478px) {
    display: flex;
    right: 15%;
  }

  @media screen and (max-width: 950px) {
    right: auto;
  }
`;

export const MainLoginBtnContainer = styled.img`
  margin-top: 60px;

  @media screen and (max-width: 1478px) {
    margin-top: 0px;
  }
`;

export const MainLoginBgContainer = styled.img`
  width: 100%;

  @media screen and (max-width: 1050px) {
    height: 200px;
    object-fit: cover;
  }
`;

// Footer

export const FooterContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: black;
  padding: 30px;
  display: flex;
`;

// LoginInput

export const LoginInput = styled.div``;

export const LoginBtnContainer = styled.div`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 7px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;

const boxFade = keyframes`
  0% {
    opacity : 0%;
  }
  100% {
    opacity : 100%;
  }
`;

export const BodyContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const HeaderLogo = styled.img`
  width: 120px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const SmallNavEachDiv = styled.div`
  width: 120px;

  padding: 10px;
  border-radius: 10px;
`;

export const HeaderToggleBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  max-width: 500px;
  padding: 50px;
  margin: 0 auto;
`;

export const HardnessContainer = styled.div`
  width: 100%;
`;

export const EachFilterDiv = styled.div`
  margin-top: 30px;
`;

export const EachFilterName = styled.p`
  font-size: 18px;
`;

export const SecondFilterContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckBoxFilter = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px;
`;

export const QuestionMarkContainer = styled.div`
  width: 15px;
  height: 15px;

  &:hover {
    > div {
      display: block;
    }
  }
`;

export const QuestionMarkIcon = styled.img`
  width: 15px;
  height: 15px;
  position: relative;
`;

export const FilterListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const EachWaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;

  animation: ${boxFade} 0.5s forwards;
  animation-timing-function: linear;
`;

export const EachWaterImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const EachWaterName = styled.span`
  font-size: 10px;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 1px 5px gray;
  display: none;
  position: absolute;
  z-index: 100;
`;

export const DescText = styled.div``;
