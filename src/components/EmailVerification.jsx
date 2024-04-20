import React, { useState } from "react";
import logo from "../assets/dribble-logo.png";

import twitter from "../assets/twitter.svg";
import facbook from "../assets/square-facebook.svg";
import insta from "../assets/instagram.svg";
import pintrest from "../assets/pinterest.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const VerifyEmail = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-auto h-screen">
      <section className="box-border flex  md:flex-row justify-between items-start md:items-center border-2">
        <div className="flex md:flex-row flex-col items-center">
          <img className="ml-4 mr-4 w-16" src={logo} alt="" />
          <div className="hidden md:flex list-none gap-4 text-gray-500 text-xs">
            <li className="font-serif text-xs">Inspiration</li>
            <li className="font-serif text-xs">Find Work</li>
            <li className="font-serif text-xs">Learn Design</li>
            <li className="font-serif text-xs">Go Pro</li>
            <li className="font-serif text-xs">Hire Designers</li>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="mt-4 text-sm font-serif inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Menu
            </button>
            {isDropdownOpen && (
              <ul className="list-none flex flex-col gap-2 text-gray-500 text-sm">
                <li>Inspiration</li>
                <li>Find Work</li>
                <li>Learn Design</li>
                <li>Go Pro</li>
                <li>Hire Designers</li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full md:w-auto">
            <FontAwesomeIcon
              className="w-4 m-2   left-2  "
              icon={faMagnifyingGlass}
            />

            <input
              type="text"
              placeholder="Search"
              className="w-20 border-none focus:outline-none bg-gray-100"
            />
          </div>
          {/* {avatar && <img className="w-28 mt-2" src={URL.createObjectURL(avatar)} alt="Avatar" />}  */}
          <div className="flex mt-3 ">
            <FontAwesomeIcon className="w-4 " icon={faBriefcase} />
            <FontAwesomeIcon className="w-3 mt-2 -ml-1" icon={faCircleXmark} />
          </div>
          <button className="w-24 text-white bg-pink-600 hover:bg-pink-500 font-medium py-2 px-4 rounded-md">
            upload
          </button>
        </div>
      </section>

      <div className="bg-white px-6 sm:py-24 lg:px-8">
        <div className="w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold">
            Please verify your email...
          </h2>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon className="size-24 " icon={faEnvelope} />
            <p className="text-gray-500 mb-5">
              Please verify your email address. We've sent a confirmation email
              to:
            </p>
            <h3 className="font-extrabold">acount@refro.design</h3>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Didn't receive the email? Check your Spam folder, it may have been
            caught by a filter. If you still don't see it, you can{" "}
            <a
              href="#"
              className="font-medium text-pink-600 hover:text-indigo-500"
            >
              resend the confirmation email
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Wrong email address?{" "}
            <a
              href="#"
              className="font-medium text-pink-600 hover:text-indigo-500"
            >
              Change it
            </a>
            .
          </p>
        </div>
      </div>

      <div className=" mt-10 md:w-full w-full flex flex-wrap gap-6 border-2 bg-gray-50">
        <div className="mt-5 ml-4 flex flex-col">
          <img className="  mr-4 w-20" src={logo} alt="" />
          <p className=" mb-4 block w-56 text-xs">
            Dribble is the world's leading community fo creatives to sahre,grow,
            and get hired.{" "}
          </p>
          <div className="gap-4 flex mb-4">
            <a href="#">
              <FontAwesomeIcon className="w-4 " icon={faGlobe} />
            </a>
            <a href="#">
              <img className="w-4" src={twitter} alt="" />
            </a>
            <a href="#">
              <img className="w-4" src={facbook} alt="" />
            </a>
            <a href="#">
              <img className="w-4" src={insta} alt="" />
            </a>
            <a href="#">
              <img className="w-4" src={pintrest} alt="" />
            </a>
          </div>
        </div>
        <div className=" gap-2 mt-8 flex flex-wrap  flex-col">
          <p className="font-semibold text-sm ">For designers</p>
          <p className="text-xs">Go Pro!</p>
          <p className="text-xs">Explore design work</p>
          <p className="text-xs">Design blog</p>
          <p className="text-xs">Overtime podcast</p>
          <p className="text-xs">Playoffs</p>
          <p className="text-xs">Weekly Warm-Up</p>
          <p className="text-xs">Refer a friend</p>
          <p className="text-xs">Code of conduct</p>
        </div>
        <div className=" gap-2 mt-8 flex flex-col">
          <p className="font-semibold text-sm">Hire designers</p>
          <p className="text-xs">Post a job opening</p>
          <p className="text-xs">Post a freelance project</p>
          <p className="text-xs">Search for desiners</p>
          <p className="font-semibold text-sm ">Brands</p>
          <p className="text-xs">Advertise with us</p>
        </div>
        <div className=" gap-2 mt-8 flex flex-col">
          <p className="font-semibold text-sm">Company</p>
          <p className="text-xs">About</p>
          <p className="text-xs">Careers</p>
          <p className="text-xs">Support</p>
          <p className="text-xs">Media kit</p>
          <p className="text-xs">Testimonials</p>
          <p className="text-xs">API</p>
          <p className="text-xs">Terms of services</p>
          <p className="text-xs">Privacy policy</p>
          <p className="text-xs">Cokkie policy</p>
        </div>
        <div className=" gap-2 mb-10 mt-8 flex flex-col">
          <p className="font-semibold text-sm">Directories</p>
          <p className="text-xs">Design jobs</p>
          <p className="text-xs">Designers for hire</p>
          <p className="block w-11 text-xs">Freelance Designers for hire</p>
          <p className="text-xs">Tags</p>
          <p className="text-xs">Places</p>
          <p className="font-semibold text-sm">Design assets</p>
          <p className="text-xs">Dribbble Marketplace</p>
          <p className="text-xs">Creative Market</p>
          <p className="text-xs">Fontspring</p>
          <p className="text-xs">Font Squirrel</p>
        </div>
        <div className=" gap-2 mt-8 flex flex-col">
          <p className="font-semibold text-sm">Design Resources</p>
          <p className="text-xs">Freelancing</p>
          <p className="text-xs">Design Hiring</p>
          <p className="text-xs">Design portfolio</p>
          <p className="text-xs">Design Education</p>
          <p className="text-xs">Creative Process</p>
          <p className="block w-11 text-xs">Design Industry Trends</p>
        </div>
        <hr className="mr-6 ml-6 w-full"></hr>
        <div className="flex w-full">
          <p className="mb-8 w-80 ml-4 font-serif text-gray-500 text-sm">
            <FontAwesomeIcon className="w-4" icon={faCopyright} fade />
            2023 Dribbble.All rights reserved
          </p>
          <div className="w-full mr-4 justify-end flex gap-1">
            <span className="font-bold text-sm">20,501,853</span>
            <p className="text-gray-500 text-sm">shots dribbble</p>
            <FontAwesomeIcon
              className="w-6 h-6 rounded-full "
              icon={faBasketball}
              style={{ color: "#bf1881" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
