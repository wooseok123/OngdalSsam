import React, { useState } from "react";
import blockPW from "../img/blockPW.svg";
import viewPW from "../img/viewPW.svg";

const LoginInput = ({ name, type = "text" }) => {
  const [isBlocked, setIsBlocked] = useState(true);

  const handleIsBlocked = () => {
    setIsBlocked(!isBlocked);
  };

  return (
    <div style={{ marginTop: "31px" }}>
      <div style={{ display: "flex", alignItems: "center", height: "30px" }}>
        <label htmlFor="input" style={{ fontSize: "16px", fontWeight: 600 }}>
          {name}
        </label>
        {type == "password" ? (
          <img
            onClick={handleIsBlocked}
            src={isBlocked ? blockPW : viewPW}
            style={{ marginLeft: "20PX" }}
          />
        ) : (
          ""
        )}
      </div>
      <br />
      <div>
        <input
          type={isBlocked ? type : "text"}
          placeholder={`${name}를 입력해주세요.`}
          style={{
            width: "100%",
            border: "none",
            borderBottom: "2px solid gray",
            fontSize: "16px",
            fontWeight: 500,
            marginTop: "22PX",
          }}
        />
      </div>
    </div>
  );
};

export default LoginInput;
