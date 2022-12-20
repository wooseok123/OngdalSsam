import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Filter from "../components/Filter";
import FilterList from "../components/FilterList";
import waterInfo from "../data.json";

const WaterFilter = () => {
  const [filterState, setFilterState] = useState({
    allFilter: {
      inputRange: 90,
      checkboxes: {
        togglePPM: false,
        fluoride: false,
        ESG: false,
        quality: false,
      },
    },
  });
  const [data, setData] = useState();

  const handleFilterState = (e) => {
    const target = e.target.id;
    setFilterState({
      allFilter: {
        inputRange:
          target === "PPM" ? e.target.value : filterState.allFilter.inputRange,

        checkboxes:
          target === "PPM"
            ? { ...filterState.allFilter.checkboxes }
            : {
                ...filterState.allFilter.checkboxes,
                [target]: !filterState.allFilter.checkboxes[target],
              },
      },
    });
  };

  useEffect(() => {
    const filtered = () => {
      let filteredData = waterInfo;
      const ppmInput = filterState.allFilter.inputRange;
      const checkbox = filterState.allFilter.checkboxes;
      if (checkbox.togglePPM === false) {
        filteredData = filteredData.filter(
          (el) => el.ppm_mid <= ppmInput && el.ppm_mid >= ppmInput - 10
        );
      }

      for (const key in checkbox) {
        if (checkbox[key] === true) {
          if (key === "fluoride") {
            filteredData = filteredData.filter((el) => el[key] === "no");
          } else if (key === "ESG") {
            filteredData = filteredData.filter((el) => el[key] === "yes");
          } else if (key === "quality") {
            filteredData = filteredData.filter((el) => el[key] === "yes");
          }
        }
      }

      return filteredData;
    };
    setData(filtered);
  }, [filterState]);

  return (
    <div style={{ marginBottom: "120px", flex: 1 }}>
      <Filter
        inputRange={filterState.allFilter.inputRange}
        handleFilter={handleFilterState}
        toggle={filterState.allFilter.checkboxes.togglePPM}
      />
      <FilterList data={data} />
    </div>
  );
};

export default WaterFilter;
