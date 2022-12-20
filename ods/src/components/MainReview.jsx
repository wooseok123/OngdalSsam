import React from "react";
import {
  MainReviewContainer,
  MainReviewEachWrapper,
  MainReviewTextContainer,
  MainReviewRightTextContainer,
} from "../styledComponents";
import reviewPic from "../img/reviewPic.svg";
import MainReviewEachWater from "./MainReviewEachWater";
const MainReview = ({ data }) => {
  return (
    <MainReviewContainer>
      <MainReviewTextContainer>
        <img src={reviewPic} />
        <p style={{ fontWeight: 600, fontSize: "24px" }}>옹달샘 사용자 리뷰.</p>
        <MainReviewRightTextContainer>
          옹달샘 실제 고객님들이 남긴
          <span style={{ color: "#04BCFF" }}>n</span>건의 생생한 후기.
        </MainReviewRightTextContainer>
      </MainReviewTextContainer>
      <MainReviewEachWrapper>
        {data.map((el) => (
          <MainReviewEachWater {...el} key={el.id} />
        ))}
      </MainReviewEachWrapper>
    </MainReviewContainer>
  );
};

export default MainReview;
