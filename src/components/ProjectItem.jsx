import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addProjectPriceInfos,
  addProjectWorkInfos,
  addProjectApportInfos,
  addProjectRentInfos,
  addProjectMorgageLengthInfos,
  addProjectMorgageInterestInfos,
  addProjectNotaireInfos,
  addProjectCommissionInfos,
  addProjectChargeCoproInfos,
  addProjectTaxeFonciereInfos,
} from "../reducer/projectInfosSlice";

function ProjectItem({ name, symbol, min, max, id, value }) {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.projectInfos);

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "price":
        dispatch(addProjectPriceInfos(e.target.value));
        break;
      case "work":
        dispatch(addProjectWorkInfos(e.target.value));
        break;
      case "apport":
        dispatch(addProjectApportInfos(e.target.value));
        break;
      case "rent":
        dispatch(addProjectRentInfos(e.target.value));
        break;
      case "morgageLength":
        dispatch(addProjectMorgageLengthInfos(e.target.value));
        break;
      case "morgageInterest":
        dispatch(addProjectMorgageInterestInfos(e.target.value));
        break;
      case "notaire":
        dispatch(addProjectNotaireInfos(e.target.value));
        break;
      case "commission":
        dispatch(addProjectCommissionInfos(e.target.value));
        break;
      case "chargeCopro":
        dispatch(addProjectChargeCoproInfos(e.target.value));
        break;
      case "taxeFonciere":
        dispatch(addProjectTaxeFonciereInfos(e.target.value));
        break;
      default:
        console.log("error");
        break;
    }
  };

  return (
    <div className="project-item">
      <div className="item-infos flex items-center ">
        <p className="name flex-1 text-gray-700">{name}</p>
        <div className="text-gray-700 flex">
          <input
            type="number"
            name={name}
            id={id}
            className="spin-button-none w-20 border-b-2 bg-transparent   outline-none  text-right mr-3"
            min={min}
            max={max}
            defaultValue={values[id]}
            onChange={handleInputChange}
          />
          <p className="w-8">{symbol}</p>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg> */}
      </div>
    </div>
  );
}

export default ProjectItem;
