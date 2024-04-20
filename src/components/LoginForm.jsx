import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg_logo from "../assets/kari-shea-tOVmshavtoo-unsplash.jpg";

const LoginForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const handleInputChange = () => {
    const inputs = document.querySelectorAll("input[required]");
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }
    setFormValid(isValid);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex h-full">
      <div className="mr-20 bg-cover rounded-r-lg">
        <img className="w-96 h-screen md:h-full" src={bg_logo} alt="" />
      </div>
      <div className="ml-4 mr-4 bg-cover bg-fixed">
        <div className="h-14">
          <p className="text-right">
            Already a member ?<span className="text-purple-500"> sign in</span>
          </p>
        </div>

        <form className="justify-center items-center bg-white p-10" onChange={handleInputChange}>
          <h1 className="font-bold text-2xl mb-8">Signup to dribbble</h1>
          <div className="flex space-x-3">
            <div className="flex mb-4 flex-col">
              <label className="flex font-bold mb-3">Name</label>
              <input
                htmlFor="name"
                className="outline-none w-full flex border-none px-4 py-2 rounded-lg bg-gray-100"
                type="text"
                placeholder="enter Name"
                required
              />
            </div>
            <div className="flex-col mb-8">
              <label className="flex font-bold mb-3">UserName</label>
              <input
                className="flex outline-none border-none w-full px-4 py-2 rounded-lg bg-gray-100"
                type="text"
                placeholder="enter Username"
                required
              />
            </div>
          </div>
          <div>
            <div className="flex-col mb-8">
              <label className="flex font-bold mb-3">Email</label>
              <input
                id="my_email"
                className="flex outline-none border-none w-full px-4 py-2 rounded-lg bg-gray-100"
                type="email"
                placeholder="enter Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="flex-col mb-8">
              <label className="flex font-bold mb-3">Password</label>
              <input
                className="flex outline-none border-none w-full px-4 py-2 rounded-lg bg-gray-100"
                type="password"
                placeholder="6+ characters"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          </div>

          <div className="inline-flex w-96">
            <input type="checkbox" className="form-checkbox h-5 w-5 m-2" />
            <p className="text-gray-700 text-sm">
              Creating an account means you're okay with our
              <span className="text-blue-700 px-1">Terms of Service, Privacy Policy</span>
              and our default
              <span className="text-blue-700 px-1">Notification Settings.</span>
            </p>
          </div>
          <div className="m-3">
            <Link to="/signup">
              <button
                className={`hover:bg-pink-600 border m-2 w-48 h-11 justify-items-start mt-5 px-3 rounded-lg text-white  border-sky-50 ${
                  formValid ? "bg-pink-500" : "bg-pink-300 cursor-not-allowed"
                }`}
                disabled={!formValid} // Disable button if form is not valid
              >
                create account
              </button>
            </Link>
            <div className="w-96">
              <p className="text-gray-400 text-sm">
                This site is protected by reCAPTCHA and the Google
                <span className="text-blue-700 px-1">Privacy Policies</span>
                and
                <span className="text-blue-700">Terms of Service</span> apply.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
