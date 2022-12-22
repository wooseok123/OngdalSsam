import React from "react";
import FooterLogo from "../img/FooterLogo.svg";
import { FooterContainer } from "../styledComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={FooterLogo} />
      <div
        style={{
          color: "black",
          marginLeft: "40px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>2022 @copyright 옹달샘</p>
        <p>사업자등록번호: 000-00-00000 | 대표자: 한우석</p>
        <p>T. 010-0000-0000|F. 070-0000-0000</p>
        <p>E. ongdalwater@gmail.com</p>
        <p>공고/광고문의: hosmimam@sogang.ac.kr</p>
        <p>서울시 마포구 백범로 서강대학교</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
