import React, { useEffect, useState } from "react";

import EachWater from "./EachWater";
import { FilterListContainer } from "../styledComponents";
const FilterList = ({ data }) => {
  return (
    <FilterListContainer>
      {data === undefined || data.length < 1 ? (
        <p>조건에 맞는 물이 없습니다</p>
      ) : (
        data.map((el) => {
          return <EachWater {...el} key={el.id} />;
        })
      )}
    </FilterListContainer>
  );
};

export default FilterList;
