import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../API/ApiResponse";
import toast from "react-hot-toast";
import Loader from "../Loader";

export default function SignUp() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [certificate, setCertificateImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    age: "",
    gender: "",
  });
  const hendleOnChangeState = (e) => {
    setState(e.target.value)
    const { name ,value} = e.target;
    
      setFormData({ ...formData, [name]: value });
  
  };

    const hendleSubmiteForm = async (e) => {
      e.preventDefault();
        
      setLoading(true)
      try {
        const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      if (profileImg) {
        formDataToSend.append("profilePicture", profileImg);
      }
      if (certificate) {
        formDataToSend.append("certificate", certificate);
      }
           
      
        
        const res = await apiService.SignupApi(formDataToSend);
           
        setLoading(false)
        if (res) {
          navigate("/");
          toast.success("Signup Successfully ");
        }
      } catch (error) {
        setLoading(false)
        toast.error("Error:", error);
        console.log(error);
        
      }
    };

    function uploadprofile(e) {
      if (e.target.files[0]) setProfileImg(e.target.files[0]);
    }
    function uploadcertificate(e) {
      if (e.target.files[0]) setCertificateImg(e.target.files[0]);
    }
  
  return (
    <>
      {loading && <Loader />}
      <div className="mt-9 relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">SignUp</h1>
          <p className="mt-2 text-gray-500">
            SignUp in below to access your account
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={hendleSubmiteForm}>
            <div className="flex">
              <div className="relative mt-6">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={hendleOnChangeState}
                  placeholder="First Name"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="lastName"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  First Name
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={hendleOnChangeState}
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="firstName"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className=" flex">
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={hendleOnChangeState}
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
                  value={formData.password}
                  onChange={hendleOnChangeState}
                  id="password"
                  autoComplete={formData.password.toString()}
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
            </div>
            <div className=" flex">
              <div className="relative mt-6">
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={formData.age}
                  onChange={hendleOnChangeState}
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                />
                <label
                  htmlFor="age"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Age
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={hendleOnChangeState}
                  id="Gender"
                  placeholder="Gender"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="gender"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Gender
                </label>
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium border-gray-300 dark:text-white"
              >
                User Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={hendleOnChangeState  }
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <option >Select Role</option>
                <option value="User">User</option>
                <option value="Nutritionist">Nutritionist</option>
              </select>
            </div>

            <div className="flex">
              <div className="relative mt-10">
                <input
                  type="file"
                  name="profileImg"
                  onChange={uploadprofile}
                  id="profileImg"
                  placeholder="ProfileImage"
                  className="opacity-0 w-full"
                />
                <label
                  htmlFor="profileImg"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 mb-2 mr-2 fill-gray-600 inline-block"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000"
                    />
                  </svg>
                  Profile Image
                </label>
              </div>

              {state == "Nutritionist" && (
                <div className="relative mt-10">
                  <input
                    type="file"
                    name="certificate"
                    //     value={password}
                    onChange={uploadcertificate}
                    id="cetificate"
                    className="w-full opacity-0"
                  />
                  <label
                    htmlFor="certificate"
                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 mb-2 mr-2 fill-gray-600 inline-block"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000"
                      />
                      <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000"
                      />
                    </svg>
                    Certificate
                  </label>
                </div>
              )}
            </div>

            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign up
              </button>
            </div>
            <div className="text-center text-sm text-gray-500">
              If you have an account yet?
              <Link to="/">
                {" "}
                <p className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                  Sign in
                </p>
                .
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
