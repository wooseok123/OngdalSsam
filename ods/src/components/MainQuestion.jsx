import React from "react";
import {
  MainQuestionContainer,
  MainQuestionImgContainer,
  MainQuestionTextContainer,
  MainQuestionImgWrapper,
} from "../styledComponents";

const MainQuestion = ({ data }) => {
  return (
    <MainQuestionContainer>
      <MainQuestionTextContainer>
        어떤 점이 궁금하신가요? 옹달샘에게 다&nbsp;
        <span style={{ color: "#04BCFF", fontSize: "32px" }}>물</span>
        &nbsp;어보세요
      </MainQuestionTextContainer>
      <MainQuestionImgWrapper>
        {data.map((el) => (
          <MainQuestionImgContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={require(`../img/MainQuestion/${el.src}.svg`)}></img>
              <div style={{ textAlign: "center", marginTop: "33px" }}>
                <p
                  style={{ fontWeight: 700, fontSize: "16px", color: "white" }}
                >
                  {el.title}
                </p>
              </div>
            </div>
          </MainQuestionImgContainer>
        ))}
      </MainQuestionImgWrapper>
    </MainQuestionContainer>
  );
};

export default MainQuestion;
