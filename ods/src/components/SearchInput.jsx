import React from "react";
import { InfoSearchContainer, InfoSearchInput } from "../styledComponents";
import searchLogo from "../img/searchLogo.svg";
const SearchInput = ({ text }) => {
  return (
    <InfoSearchContainer>
      <img src={searchLogo} style={{ padding: "10px 12px" }} />
      <InfoSearchInput type="text" placeholder={text} />
    </InfoSearchContainer>
  );
};

export default SearchInput;
