import React from "react";
import { QuestionMarkIcon, QuestionMarkContainer } from "../styledComponents";
import questionMark from "../img/questionMark.png";
import Description from "./Description";
import desc from "../descText.json";
import { useState } from "react";

const QuestionMark = ({ target, idx }) => {
  return (
    <QuestionMarkContainer>
      <QuestionMarkIcon
        src={questionMark}
        alt={"questionMark"}
      ></QuestionMarkIcon>
      <Description {...desc[idx]} idx={target} />
    </QuestionMarkContainer>
  );
};

export default QuestionMark;
