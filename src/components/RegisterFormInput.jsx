import React from "react";

function RegisterFormInput({ id, type, placeholder, label }) {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-green-400 focus:shadow-none"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default RegisterFormInput;
