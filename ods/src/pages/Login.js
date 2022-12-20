import React from "react";
import HeaderBtn from "../components/HeaderBtn";
import LoginBtn from "../components/LoginBtn";
import LoginInput from "../components/LoginInput";
import loginBg from "../img/loginBg.svg";

const Login = () => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ position: "relative" }}>
        <img src={loginBg} style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: "32px",
              color: "white",
            }}
          >
            회원 로그인
          </p>
        </div>
      </div>
      <div style={{ width: "460px", margin: "0 auto", marginBottom: "105px" }}>
        <div style={{ marginTop: "55px" }}>
          <LoginInput name="아이디" />
          <LoginInput name="비밀번호" type="password" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: "36px",
            marginBottom: "26px",
            gap: "40px",
          }}
        >
          <HeaderBtn type="mini" title="아이디 찾기" addr="findID" />
          <HeaderBtn type="mini" title="비밀번호 찾기" addr="findPW" />
        </div>
        <div>
          <LoginBtn
            height="50"
            bgColor="#04BCFF"
            color="white"
            text="로그인"
            type="login"
          />
          <div style={{ display: "flex", gap: "9px", marginTop: "9px" }}>
            <LoginBtn
              height="39"
              bgColor="#61C545"
              color="white"
              text="네이버로 간편 로그인"
              type="login"
              src="naverLogin.svg"
            />
            <LoginBtn
              height="39"
              bgColor="#FCEC4F"
              color="black"
              text="카카오로 간편 로그인"
              type="login"
              src="kakaoLogin.svg"
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "84px",
          }}
        >
          <p style={{ fontSize: "14px", color: "#908B8B" }}>
            아직 회원이 아니신가요?
          </p>
          <LoginBtn
            height="50"
            bgColor="#04BCFF"
            color="white"
            text="회원가입하기"
            type="signUp"
          />
          <LoginBtn
            height="50"
            bgColor="#000000"
            color="white"
            text="비회원 주문조회"
            type="notMember"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
