import React from "react";

// Redux State
import { useSelector } from "react-redux";
import { selectProjectResults } from "../reducer/resultProjectSlice";

// Helpers
import { numberWithSpaces } from "../utils/helpers";

function ResultItem({ name, symbol, value, id }) {
  const { rentaNet, rentNet } = useSelector(selectProjectResults);

  return (
    <div className="renta flex flex-col justify-center items-center">
      <h1
        className={`text-2xl ${
          rentaNet > 0 ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {id === "renta"
          ? numberWithSpaces(rentaNet)
          : numberWithSpaces(rentNet)}
        {symbol}
      </h1>
      <h4 className="text-sm font-light text-gray-400">{name}</h4>
    </div>
  );
}

export default ResultItem;
