import React, { useState } from "react";

// Components
import ProjectItem from "./ProjectItem";

// Data
import { projectItems } from "../data/data";

// Redux State
import { useDispatch, useSelector } from "react-redux";
import { selectProjectInfos } from "../reducer/projectInfosSlice";

import { getResultProject } from "../reducer/resultProjectSlice";

import { getRentability, getRentaNet, getCashFlow } from "../utils/finance";

function Project({ setIsSubmit }) {
  const [isOpen, setIsOpen] = useState(true);
  const {
    price,
    work,
    notaire,
    rent,
    chargeCopro,
    taxeFonciere,
    apport,
    morgageLength,
    morgageInterest,
    commission,
  } = useSelector(selectProjectInfos);

  // Get all value from uti

  const dispatch = useDispatch();

  const handleToggle = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSubmitClick = (e) => {
    setIsOpen(!isOpen);
    setIsSubmit(true);

    dispatch(
      getResultProject({
        rentaNet: getRentability(
          "net",
          price,
          work,
          notaire,
          rent,
          chargeCopro,
          taxeFonciere,
          commission
        ).toFixed(2),
        rentaBrut: getRentability(
          "brut",
          price,
          work,
          notaire,
          rent,
          chargeCopro,
          taxeFonciere,
          commission
        ).toFixed(2),
        rentNet: getRentaNet(rent, chargeCopro, taxeFonciere).toFixed(0),
        cashflow: getCashFlow(
          rent,
          notaire,
          work,
          chargeCopro,
          taxeFonciere,
          price,
          apport,
          morgageLength,
          morgageInterest,
          commission
        ).toFixed(0),
      })
    );
  };

  return (
    <div className="project-infos border-2 p-4 min-w-full rounded-lg bg-white ">
      <div className="projetct-infos-header flex  ">
        <h3 className="flex-1 text-green-700 font-medium">Votre projet</h3>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="toggle-open h-6 w-6 text-gray-100 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="toggle-open h-6 w-6 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <>
          <div className="project-items mt-8 flex flex-col gap-10">
            {projectItems.map((item, index) => (
              <ProjectItem key={index} {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="mt-10 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
              onClick={handleSubmitClick}
            >
              Generate CashFlow estimations
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
