import React from "react";
import {
  MainLoginContainer,
  MainLoginTextContainer,
  MainLoginBtnContainer,
  MainLoginBgContainer,
} from "../styledComponents";
import MainLoginBg from "../img/MainLoginBg.svg";
import MainLoginBtn from "../img/MainLoginBtn.svg";
import { Link } from "react-router-dom";
const MainLogin = () => {
  return (
    <MainLoginContainer>
      <MainLoginBgContainer src={MainLoginBg} />
      <MainLoginTextContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: 700 }}>내게 딱 맞는 깨끗한 물,</p>
          <p style={{ fontWeight: 500, color: "white", marginTop: "7px" }}>
            옹달샘이 찾아드리겠습니다.
          </p>
        </div>
        <Link to={"/login"}>
          <MainLoginBtnContainer src={MainLoginBtn} />
        </Link>
      </MainLoginTextContainer>
    </MainLoginContainer>
  );
};

export default MainLogin;
