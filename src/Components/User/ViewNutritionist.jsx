import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import Loader from "../Loader";
import apiService from "../API/ApiResponse";
import { useNavigate } from "react-router";
export default function ViewNutritionist() {
  const [loading, setLoading] = useState(false);
    const [Nutrtioist, setNutritionist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const localData = sessionStorage.getItem("UserData");
        if (localData) {
            
          const userData = JSON.parse(localData);
          const token = userData.token;
    
            const HendleViewNutritionist = async () => {
              
                try {
                setLoading(true)
              const res = await apiService.ViewNutritionists({
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              });
    
                    setLoading(false)
                    setNutritionist(res.data);
                    
            } catch (error) {
              console.error("Error fetching User Data:", error);
            }
          };
    
          HendleViewNutritionist();
        }
      }, []);
    
    
    
    const hendleDietPlan =(id) => {
        navigate("/chat?id="+id)
    }
    
    const downloadImage = (url) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.substring(url.lastIndexOf('/') + 1); // Extracts the file name from the URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
  
  return (
    <>
      {loading && <Loader />}
      <Nav  />
      <div className="p-1 flex flex-wrap items-center w-full justify-center">
        {Nutrtioist.map((item, index) => {

          
          return (
            <div
              key={index}
              className="m-3 md:w-[27%] w-full bg-white shadow-lg rounded-lg my-4"
            >
              <img
                className="w-full h-56 object-cover object-center"
                src={`${item.profilePicture}`}
                alt="avatar"
              />
              <div className="flex items-center px-6 py-3 bg-gray-900">
                <svg
                  className="h-6 w-6 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                </svg>
                <h1 className="mx-3 text-white font-semibold text-lg">
                  {item.role}
                </h1>
              </div>
              <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {item.lastName}
                </h1>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                    <g>
                      <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
                    </g>
                  </svg>
                  <div
                    className=" inline-flex items-center  px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold ${
               
                   "
                  >{ item.age}</div>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                    <g>
                      <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
                    </g>
                  </svg>
                  <div
                    className=" inline-flex items-center  px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold ${
               
                   "
                  >{ item.gender}</div>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                  </svg>
                  <h1 className="px-2 text-sm">{item.email}</h1>
                </div>
               
                  <div className="flex items-center mt-4 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M1 22C1 17.5817 4.58172 14 9 14C13.4183 14 17 17.5817 17 22H1ZM9 13C5.685 13 3 10.315 3 7.00002C3 3.68502 5.685 1.00002 9 1.00002C12.315 1.00002 15 3.68502 15 7.00002C15 10.315 12.315 13 9 13ZM18.2463 3.18451C18.732 4.36026 19 5.64884 19 7.00002C19 8.35119 18.732 9.63977 18.2463 10.8155L16.5694 9.59595C16.8485 8.78194 17 7.90867 17 7.00002C17 6.09136 16.8485 5.21809 16.5694 4.40408L18.2463 3.18451ZM21.5476 0.783569C22.4773 2.65651 23 4.76723 23 7.00002C23 9.23281 22.4773 11.3435 21.5476 13.2165L19.9027 12.0201C20.6071 10.4928 21 8.79231 21 7.00002C21 5.20772 20.6071 3.5072 19.9027 1.9799L21.5476 0.783569Z"></path>
                    </svg>

                    <h1 onClick={()=> hendleDietPlan(item.nutritionistId)}
                      className="underline  ml-2 text-blue-800 cursor-pointer"
                    >
                     Discuss diet plan
                    </h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                </svg>
                <h1
                  onClick={()=> downloadImage(item.certificate)}
                  className="underline  ml-2 text-blue-800 cursor-pointer"
                >
                View Certificate
                </h1>
              </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
