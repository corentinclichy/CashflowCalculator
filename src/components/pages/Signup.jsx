import React from "react";
import { Link } from "react-router-dom";

// Mock data
import { registerFormData } from "../../data/data";

// Components
import RegisterFormInput from "../RegisterFormInput";

function Signup() {
  return (
    <div className="flex justify-center item-center h-full my-12 ">
      <div className="w-full  flex justify-center">
        <div className="w-3/4 lg:w-1/2  bg-white p-5 rounded-lg  border-2">
          <h3 className="pt-4 text-2xl text-center text-green-600">
            Bienvenue !
          </h3>
          <form className="px-8 pt-10 pb-8 mb-4 bg-white rounded">
            {registerFormData.map(({ id, type, label, placeholder }, index) => (
              <RegisterFormInput
                id={id}
                type={type}
                label={label}
                placeholder={placeholder}
                key={index}
              />
            ))}

            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded  border-b-4 border-green-800 hover:bg-green-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a
                className="inline-block text-sm text-gray-400 align-baseline hover:text-gray-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
                to="/login"
              >
                Already have an account? Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
