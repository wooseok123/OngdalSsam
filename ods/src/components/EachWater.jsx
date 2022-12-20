import React from "react";
import {
  EachWaterImg,
  EachWaterName,
  EachWaterContainer,
} from "../styledComponents";

const EachWater = ({ brand, imgs }) => {
  return (
    <EachWaterContainer>
      <div>
        <EachWaterImg src={require(`../${imgs}`)} alt={brand} />
      </div>
      <EachWaterName>{brand}</EachWaterName>
    </EachWaterContainer>
  );
};

export default EachWater;
