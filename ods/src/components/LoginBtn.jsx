import React from "react";
import { LoginBtnContainer } from "../styledComponents";

const LoginBtn = ({ height, color, bgColor, text, type, src = false }) => {
  return (
    <LoginBtnContainer height={height} color={color} bgColor={bgColor}>
      {src ? <img src={require(`../img/${src}`)} /> : ""}
      <span style={{ marginTop: "5px" }}>{text}</span>
    </LoginBtnContainer>
  );
};

export default LoginBtn;
