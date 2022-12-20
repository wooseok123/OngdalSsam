import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderNavContainer,
  HeaderItemsContainer,
  HeaderInfoContainer,
  HeaderInfoBeforeLogin,
  HeaderInfoAfterLogin,
} from "../styledComponents";
import { Link } from "react-router-dom";
import logo from "../img/ods_logo.svg";
import headerLine from "../img/headerLine.svg";
import Profile from "../img/Profile.svg";
import Toggle from "../img/Toggle.svg";
import HeaderBtn from "./HeaderBtn";
import SearchInput from "./SearchInput";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <HeaderContainer>
      <HeaderItemsContainer>
        <Link to={"/"} style={{ cursor: "pointer" }}>
          <img src={logo} style={{ width: "155px", height: "81px" }} />
        </Link>
        <HeaderNavContainer>
          <HeaderBtn title={"회사 소개"} addr={"about"} />
          <HeaderBtn title={"물 필터링"} addr={"filter"} />
          <HeaderBtn title={"물 상식"} addr={"news"} />
          <HeaderBtn title={"간단 테스트"} adrr={"test"} />
        </HeaderNavContainer>
        <HeaderInfoContainer>
          {isLogin ? (
            ""
          ) : (
            <HeaderInfoBeforeLogin style={{ marginTop: "20px" }}>
              <HeaderBtn title={"로그인"} type={"mini"} addr={"login"} />

              <img src={headerLine} />

              <HeaderBtn title={"회원가입"} type={"mini"} addr={"signUp"} />
            </HeaderInfoBeforeLogin>
          )}

          <SearchInput text={"지금 마시는 생수를 검색해보세요!"} />
        </HeaderInfoContainer>
        {isLogin ? (
          <HeaderInfoAfterLogin>
            <img src={Profile} />
            <img src={Toggle} />
          </HeaderInfoAfterLogin>
        ) : (
          ""
        )}
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default Header;
