import React, { useRef, useState } from "react";
import DribbleLogo from "./DribbleLogo";
import { useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const DribbbleSignup = () => {
 
  const [avatar, setAvatar] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  
  
  

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleImage = () => {
    inputRef.current.click();
  };

  const handleNext = () => {
   
    if (avatar && location.trim() !== "") {
      navigate("/finish");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const isFormValid = avatar && location.trim() !== "";

  return (
    <div className="">
      <DribbleLogo></DribbleLogo>

      <div className="flex m-0 p-0 flex-col items-center justify-center ">
        <h1 className="text-2xl font-bold mb-4">
          Welcome! Let's create your profile
        </h1>
        <p className="mb-4">
          Let others get to know you better! You can do these later
        </p>

        <div className="bg-white p-8  w-full max-w-md">
          <div className="mb-10 flex-col">
            <label htmlFor="avatar" className="block font-bold  mb-2">
              Add an avatar
            </label>
            <div className="relative flex w-full">
              <div className="w-32 h-32 mr-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FontAwesomeIcon size="lg" icon={faCamera} />
                )}
              </div>
              <div className="flex-col">
                <button
                  className="text-sm w-32 p-2 font-dark rounded-lg border-2"
                  onClick={handleImage}
                >
                  choose image
                </button>
                <input
                  id="avatar"
                  type="file"
                  ref={inputRef}
                  className=" invisible text-sm w-0 h-0 cursor-pointer"
                  onChange={handleAvatarChange}
                />
                <div className="flex">
                <FontAwesomeIcon  className="w-2 mt-2 p-3" icon={faGreaterThan} />
                  <h1 className="text-xs w-32 mt-4 text-slate-400">
                  
                    or choose one of our default
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="location" className="block font-bold  mb-2">
              Add your location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={handleLocationChange}
              className="w-full px-4 py-2  focus:outline-none border-none"
              placeholder="Enter a location"
            />
            <hr className="w-full"></hr>
          </div>
          <div className="w-48  flex-col flex">
           
            <button
              className={`w-48 h-8 mb-5 text-sm bg-pink-200 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-md ${
                isFormValid
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!isFormValid}
            >
              Next
            </button>
            
            {isFormValid && (
              <button
                className="text-gray-500 ml-8 text-left text-sm hover:text-gray-700"
                onClick={handleBack}
              >
                or Press Return
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DribbbleSignup;
