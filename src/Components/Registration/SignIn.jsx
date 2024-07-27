import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../API/ApiResponse";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { Navigate } from "react-router-dom";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password } = formData;

  const handleStateChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading indicator

    try {
      setLoading(true);
      const res = await apiService.LoginApi(formData);
      const role = res.roles[0];
      const userData = JSON.stringify({
        token: res.token,
        Id: res.id,
        Role: role,
        pId: res.pId,
      });

      sessionStorage.setItem("UserData", userData);
      switch (role) {
        case "Admin":
          navigate("/admin")
          break;
        case "Nutritionist":
          navigate("/nutritionist");
          break;
        case "User":
          navigate("/users");
          break;
        default:
          toast.error("Invalid role");
          break;
      }
      setLoading(false);
    } catch (error) {
      toast.error("Error: ",error);
      console.error("Login error:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="relative">
      {loading && <Loader />}
      <div className=" mt-9 relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleStateChange}
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete={password.toString()}
                  onChange={handleStateChange}
                  value={password}
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?
                <Link to="/signup">
                  {" "}
                  <p className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                    Sign up
                  </p>
                  .
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
