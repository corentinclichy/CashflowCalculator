import React, { useRef, useEffect } from "react";

function SignUpModal({ isOpen, setIsOpen }) {
  // Handle click on close button
  const HandleClose = () => {
    setIsOpen(!isOpen);
  };

  // Set ref to the modal
  const modalRef = useRef(null);

  // Close the modal when clicking outside of it
  useEffect(() => {
    function handler(event) {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-700 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center">
      <div
        className="w-1/3 h-1/3 bg-white flex flex-col justify-center items-center shadow-2xl rounded-md p-8 relative"
        ref={modalRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute top-5 right-5 text-gray-400 hover:text-gray-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={HandleClose}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h2 className="text-green-500 text-3xl mb-5 text-center">
          Merci de porter de l'intêret au projet!
        </h2>
        <p className="mb-16 text-gray-400">
          Fonctionalité en cours de développement...
        </p>

        <p className="mb-2 text-gray-500 text-left w-full">
          Restez informé des dernières nouveautés:
        </p>
        <div className="email w-full mt-2">
          <div class="max-w-sm flex items-center justify-between ">
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-green-500 p-3"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
