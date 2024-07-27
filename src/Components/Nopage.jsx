import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export default function Nopage() {
  const navigate = useNavigate();
  const naviteAuth = () => {
    debugger;
    const user = JSON.parse(sessionStorage.getItem("UserData"));

    if (user.Role === "Nutritionist") {
      navigate("/nutritionist");
    } else if (user.Role === "User") {
      navigate("/users");
    } else {
      navigate("/");
      sessionStorage.removeItem("UserData");
      toast.success("Please Login Again");
    }
  };

  return (
    <div className="text-center mt-24">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>

      <div onClick={naviteAuth} className="mt-4 cursor-pointer text-gray-600">
        Let's get you back <p className="text-blue-500">Home</p>.
      </div>
    </div>
  );
}
