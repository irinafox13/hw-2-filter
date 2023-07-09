import React from "react";
import Portfolio from "./Portfolio";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <>
      <div className="d-flex my-4">
        <button
          className={"btn btn-outline-dark p-1 px-2 mx-1 rounded-0"}
          onClick={() => onSelectFilter(Portfolio)}
        >
          All
        </button>
        
        {filters.map((value) => {
          return (
            <button
              className={"btn btn-outline-dark p-1 px-2 mx-1 rounded-0"}
              onClick={() => selected(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Toolbar;