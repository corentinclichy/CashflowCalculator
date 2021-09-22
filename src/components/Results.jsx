import React, { useState } from "react";

// Data
import { renta } from "../data/data";

// State
import { useSelector } from "react-redux";
import { selectProjectResults } from "../reducer/resultProjectSlice";

// Components
import ResultItem from "./ResultItem";
import PieCharts from "./PieCharts";

// Helpers
import { numberWithSpaces } from "../utils/helpers";
import SignUpModal from "./SignUpModal";

function Results() {
  const [isOpen, setIsOpen] = useState(false);
  const { cashflow } = useSelector(selectProjectResults);

  const handleClickModal = (e) => {
    setIsOpen(!isOpen);
  };

  const conditionalColor = (cashFlow) => {
    if (cashFlow < 0) {
      return "text-red-500";
    }
    if (cashFlow >= 0 && cashFlow < 100) {
      return "text-yellow-500";
    } else {
      return "text-green-500";
    }
  };

  return (
    <>
      <div className="result-1 border-2 p-4 min-w-full rounded-lg bg-white mt-12 flex justify-around">
        {renta.map((item, index) => (
          <ResultItem
            name={item.name}
            key={index}
            symbol={item.symbol}
            id={item.id}
          />
        ))}
      </div>
      <div className="result-2 border-2 p-4 min-w-full rounded-lg bg-white mt-5 flex justify-center">
        <div className="cash-flow flex flex-col items-center">
          <h1 className={`text-3xl ${conditionalColor(cashflow)} text-yello`}>
            {numberWithSpaces(cashflow)}€
          </h1>
          <h4 className="text-md font-light text-gray-400">CashFlow</h4>
        </div>
      </div>

      <div className="charts-invest result-2 border-2 p-4 rounded-lg bg-white mt-5 flex justify-center h-96  items-center">
        <PieCharts />
      </div>

      <div className="flex mt-14">
        <button
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-700 rounded mx-auto"
          onClick={handleClickModal}
        >
          Créer un compte pour sauvegarder ce projet
        </button>
      </div>

      {isOpen && <SignUpModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Results;
