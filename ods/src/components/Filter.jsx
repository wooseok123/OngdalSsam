import React, { useState } from "react";
import {
  FilterContainer,
  HardnessContainer,
  EachFilterDiv,
  EachFilterName,
  SecondFilterContainer,
  CheckBoxFilter,
} from "../styledComponents";

import QuestionMark from "./QuestionMark";

const Filter = ({ handleFilter, toggle, inputRange }) => {
  return (
    <FilterContainer>
      <HardnessContainer>
        <EachFilterDiv>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EachFilterName>경도</EachFilterName>
            <span style={{ marginTop: "5px" }}>
              {toggle ? "" : `${inputRange - 10}~${inputRange}`}
            </span>
            <QuestionMark idx={0} />
            <CheckBoxFilter
              id="togglePPM"
              defaultChecked={true}
              onClick={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
            />
          </div>
          {toggle ? (
            ""
          ) : (
            <input
              id="PPM"
              min={10}
              max={210}
              step={10}
              onChange={(e) => {
                handleFilter(e);
              }}
              type="range"
              style={{ width: "100%", height: "40px" }}
            />
          )}
        </EachFilterDiv>
      </HardnessContainer>
      <SecondFilterContainer>
        <EachFilterDiv>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EachFilterName>무불소</EachFilterName>
            <CheckBoxFilter
              id="fluoride"
              onClick={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
            />
            <QuestionMark idx={1} />
          </div>
        </EachFilterDiv>
        <EachFilterDiv>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EachFilterName>ESG</EachFilterName>
            <CheckBoxFilter
              id="ESG"
              onClick={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
            />
            <QuestionMark idx={2} />
          </div>
        </EachFilterDiv>
        <EachFilterDiv>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EachFilterName>수질 적합</EachFilterName>
            <CheckBoxFilter
              id="quality"
              onClick={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
            />
            <QuestionMark idx={3} />
          </div>
        </EachFilterDiv>
      </SecondFilterContainer>
      {/* <EachFilterDiv>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <EachFilterName>단위</EachFilterName>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <div
            style={{ display: "flex", alignItems: "center", height: "50px" }}
          >
            <p>330ML</p>
            <input type="checkbox" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", height: "50px" }}
          >
            <p>500ML</p>
            <input type="checkbox" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", height: "50px" }}
          >
            <p>500ML</p>
            <input type="checkbox" />
          </div>
        </div>
      </EachFilterDiv> */}
    </FilterContainer>
  );
};

export default Filter;
