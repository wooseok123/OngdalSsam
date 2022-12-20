import React from "react";
import chatBot from "../img/chatbot.svg";

const Helper = () => {
  return (
    <div
      style={{ position: "fixed", bottom: "10vw", right: "10vw", zIndex: 20 }}
    >
      <img src={chatBot} />
    </div>
  );
};

export default Helper;
