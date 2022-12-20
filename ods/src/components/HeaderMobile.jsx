import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderNavMobileContainer,
  HeaderItemsMobileContainer,
  HeaderInfoMobileContainer,
  HeaderInfoBeforeLogin,
  HeaderInfoAfterLogin,
  HeaderItemsMobileLogoContainer,
} from "../styledComponents";
import { Link } from "react-router-dom";
import logo from "../img/ods_logo.svg";
import headerLine from "../img/headerLine.svg";
import Profile from "../img/Profile.svg";
import Toggle from "../img/HeaderToggle.png";
import HeaderBtn from "./HeaderBtn";
import SearchInput from "./SearchInput";
import { useMediaQuery } from "react-responsive";

const HeaderMobile = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const [isToggled, setIsToggled] = useState(true);

  const handleIsToggled = () => {
    setIsToggled(!isToggled);
  };
  return (
    <HeaderContainer>
      <HeaderItemsMobileContainer>
        <HeaderItemsMobileLogoContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Link
              to={"/"}
              style={{
                cursor: "pointer",
              }}
            >
              <img src={logo} style={{ width: "155px", height: "81px" }} />
            </Link>
            {isTabletOrMobile ? (
              <HeaderInfoMobileContainer>
                {isLogin ? (
                  ""
                ) : (
                  <HeaderInfoBeforeLogin>
                    <HeaderBtn title={"로그인"} type={"mini"} addr={"login"} />

                    <img src={headerLine} />

                    <HeaderBtn
                      title={"회원가입"}
                      type={"mini"}
                      addr={"signUp"}
                    />
                    <img
                      src={Toggle}
                      style={{ width: "20px", height: "20px" }}
                      onClick={handleIsToggled}
                    />
                    {isToggled ? (
                      ""
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          flexDirection: "column",
                          gap: "10px",
                          position: "absolute",
                          backgroundColor: "white",
                          padding: "10px",
                          top: "25px",
                          right: "0px",
                          width: "120px",
                          zIndex: 10,
                          borderRadius: "7px",
                        }}
                        onClick={handleIsToggled}
                      >
                        <HeaderBtn
                          title={"회사 소개"}
                          addr={"about"}
                          type={"mini"}
                        />
                        <HeaderBtn
                          title={"물 필터링"}
                          addr={"filter"}
                          type={"mini"}
                        />
                        <HeaderBtn
                          title={"물 상식"}
                          addr={"news"}
                          type={"mini"}
                        />
                        <HeaderBtn
                          title={"간단 테스트"}
                          adrr={"test"}
                          type={"mini"}
                        />
                      </div>
                    )}
                  </HeaderInfoBeforeLogin>
                )}
              </HeaderInfoMobileContainer>
            ) : (
              ""
            )}
          </div>

          <SearchInput text={"지금 마시는 생수를 검색해보세요!"} />
        </HeaderItemsMobileLogoContainer>
        <HeaderNavMobileContainer>
          {isTabletOrMobile ? (
            ""
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <HeaderBtn title={"회사 소개"} addr={"about"} />
              <HeaderBtn title={"물 필터링"} addr={"filter"} />
              <HeaderBtn title={"물 상식"} addr={"news"} />
              <HeaderBtn title={"간단 테스트"} adrr={"test"} />
            </div>
          )}
          {isTabletOrMobile ? (
            ""
          ) : (
            <HeaderInfoMobileContainer>
              {isLogin ? (
                ""
              ) : (
                <HeaderInfoBeforeLogin>
                  <HeaderBtn title={"로그인"} type={"mini"} addr={"login"} />

                  <img src={headerLine} />

                  <HeaderBtn title={"회원가입"} type={"mini"} addr={"signUp"} />
                </HeaderInfoBeforeLogin>
              )}
            </HeaderInfoMobileContainer>
          )}
        </HeaderNavMobileContainer>

        {isLogin ? (
          <HeaderInfoAfterLogin>
            <img src={Profile} />
            <img src={Toggle} />
          </HeaderInfoAfterLogin>
        ) : (
          ""
        )}
      </HeaderItemsMobileContainer>
    </HeaderContainer>
  );
};

export default HeaderMobile;
