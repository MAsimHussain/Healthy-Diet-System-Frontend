import React, {  useContext,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyState from "./Components/Context/MyState";

export default function Nav({HendleViewNutritionist}) {

  const user = JSON.parse(sessionStorage.getItem("UserData"));
const navigate = useNavigate();

  const hendlelogOut = () => {
    sessionStorage.removeItem("UserData");
    navigate("/");
  };



  return (
    <div className="top-0 py-1 lg:py-2 bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 w-[90%] left-0 right-0 mx-auto px-5 py-2.5 lg:border-none lg:py-1">
        <div className="flex items-center justify-between space-x-2">
          <div>
            <div className="flex items-center space-x-2">
                <h3 className="text-black dark:text-white font-bold text-xl">
                  Welcome
                </h3>
              
              {user.Role === "Admin" ? (
                <button className=" flex items-center text-black dark:text-white pl-2 hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/userslist"> Users </Link>
                </button>
              ) : null}
              {user.Role === "User" ? (
                <button className=" flex items-center text-black dark:text-white pl-2 hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/view"> FindNutritionist </Link>
                </button>
              ) : null}
            </div>
          </div>

          <div className=" lg:flex lg:items-center gap-x-2">
            <button
              onClick={hendlelogOut}
              className="flex items-center justify-center rounded-md bg-red-500 text-white px-6 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
