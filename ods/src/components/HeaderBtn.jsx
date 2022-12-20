import React from "react";
import { Link } from "react-router-dom";
import { HeaderBtnContainer, HeaderBtnLinkWrapper } from "../styledComponents";

const HeaderBtn = ({ title, type = "normal", addr }) => {
  return (
    <HeaderBtnLinkWrapper to={`/${addr}`}>
      <HeaderBtnContainer type={type}>{title}</HeaderBtnContainer>
    </HeaderBtnLinkWrapper>
  );
};

export default HeaderBtn;
