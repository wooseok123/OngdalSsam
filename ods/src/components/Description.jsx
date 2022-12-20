import React from "react";
import { useEffect } from "react";
import { DescriptionContainer, DescText } from "../styledComponents";
const Description = ({ id, desc, idx }) => {
  return (
    <DescriptionContainer>
      {desc ? desc.split("\n").map((el) => <DescText>{el}</DescText>) : ""}
    </DescriptionContainer>
  );
};

export default Description;
