import React, { useState } from "react";
import DribbleLogo from "./DribbleLogo";
import { Link } from "react-router-dom";
import computer from "../assets/designer (1).svg";
import designer from "../assets/editing.svg";
import inspiration from "../assets/interface-control-svgrepo-com.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

const DribbbleSignup = () => {
  
  const [selectedOption, setSelectedOption] = useState([]);
  const [checkboxSelected, setCheckboxSelected] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxSelected(event.target.checked);
  };

  const handleOptionClick = (id) => {
    if (selectedOption.includes(id)) {
      setSelectedOption(selectedOption.filter((DivId) => DivId !== id));
    } else {
      setSelectedOption([...selectedOption, id]);
    }
  };

  const handleUnselect = () => {
    setSelectedOption([]);
    setCheckboxSelected(false);
  };

  const options = [
    {
      id: 1,
      title: "I'm a designer looking to share my work",
      item: computer,
      description:
        "With our 7 million shots from a vast community of designers, Dribbble is the leading source for share your work.",
    },
    {
      id: 2,
      title: "I'm looking to hire a designer",
      item: designer,
      description:
        "With our 7 million shots from a vast community of designers, Dribbble is the leading source for hire designer.",
    },
    {
      id: 3,
      title: "I'm looking for design inspiration",
      item: inspiration,
      description:
        "With our 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
    },
  ];

  return (
    <div className="">
      <div className="flex ">
        <DribbleLogo></DribbleLogo>
        <Link to="/signup">
          <div className="mt-9  bg-gray-100 p-2 border-2 rounded-lg w-10 h-8 ml-5">
          <FontAwesomeIcon className="w-2 mb-2 ml-1" icon={faLessThan} />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          What brings you to Dribbble?
        </h1>
        <p className="mb-8 text-sm">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-8 relative">
          {options.map((option) => (
            <div
              key={option.id}
              className={`relative bg-white w-64  flex-wrap p-8 items-center justify-center rounded-lg border-2 cursor-pointer transition-colors duration-300 ${
                selectedOption.includes(option.id)
                  ? "border-2 border-pink-500"
                  : ""
              }`}
              style={{ height: "220px" }} // Set fixed height for each div
            >
              
              <img
                src={option.item}
                alt="image"
                className={`w-24 h-20 items-center ml-10 ${
                  selectedOption.includes(option.id) &&
                  "absolute bottom-40 mb-4 "
                }`}
              />
              <p
                className={`text-center text-xs mt-2 md:text-sm mb-4 font-extrabold
              ${
                selectedOption.includes(option.id) &&
                "absolute bottom-32 mt-4 left-4"
              }
              `}
              >
                {option.title}
              </p>
              {selectedOption.includes(option.id) && (
                <p className="absolute  text-center text-sm bottom-8 mr-2 ">
                  {option.description}
                </p>
              )}
              <div className=" text-center ">
              <input
                type="checkbox"
                className={`outline-none border-2  border-full   
                  ${selectedOption.includes(option.id) && "absolute bottom-2"}`}
                onChange={(event) => {
                  handleOptionClick(option.id);
                  handleCheckboxChange(event);
                }}
                checked={selectedOption.includes(option.id)}
              />
              </div>
            </div>
          ))}
        </div>

        {checkboxSelected && (
          <p className="cursor-pointer  font-extrabold py-2 px-4 rounded-md">
            Anything else? You can select multiple options.
          </p>
        )}

        <Link  to="/Email">
          <button
            className={`w-40 text-white bg-pink-200 hover:bg-pink-500 font-medium py-2 px-4 rounded-md ${
              checkboxSelected
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!checkboxSelected}
          >
            Finish
          </button>
        </Link>

        {checkboxSelected && (
          <p
            className="cursor-pointer text-gray-400 font-sm py-2 px-4 rounded-md"
            onClick={handleUnselect}
          >
            or Press RETURN
          </p>
        )}
      </div>
    </div>
  );
};

export default DribbbleSignup;
