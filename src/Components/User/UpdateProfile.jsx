import React, { useEffect, useState } from "react";
import apiService from "../API/ApiResponse";
import toast from "react-hot-toast";
import Nav from "../../Nav";
import Loader from "../Loader";
export default function UpdateProfile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [user, setUser] = useState({});
  const [nutritionist, setNutritionist] = useState({});
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    profilePicture: "",
  });

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const localData = sessionStorage.getItem("UserData");
    if (localData) {
      setLoading(true);
      const userData = JSON.parse(localData);
      const token = userData.token;
      const id = userData.Id;
      setRole(userData.Role);

      const fetchData = async () => {
        try {
          let res;
          if (userData.Role === "User") {
            res = await apiService.GetUserOwnData(
              {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              id
            );
            setUser(res);
          } else if (userData.Role === "Nutritionist") {
            res = await apiService.GetNutritionistOwnData(
              {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              id
            );
            setNutritionist(res);
          }
          setFormData({
            firstName: res.firstName || "",
            lastName: res.lastName || "",
            age: res.age || "",
            gender: res.gender || "",
            profilePicture: res.profilePicture || "",
          });
          setLoading(false)
        } catch (error) {
          toast.error("Error fetching data", error);
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const localData = sessionStorage.getItem("UserData");

    if (localData) {
      setLoading(true)
      const userData = JSON.parse(localData);
      const token = userData.token;
      const id = userData.Id;
      const formDataToSend = new FormData();

      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("gender", formData.gender);

      formDataToSend.append("profilePicture", profilePicture);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };
  
      try {
        if (role === "User") {
          await apiService.UpdateUserProfile(
           
            
            id,formDataToSend, headers
          );
          setLoading(false)
          toast.success("User profile updated successfully");

        } else if (role === "Nutritionist") {
          debugger;
          await apiService.UpdateNutritioistProfile(
             headers, id, formDataToSend
          );
          setLoading(false)

          toast.success("Nutritionist profile updated successfully");
        }
        setLoading(false)


      } catch (error) {
        toast.error(`Error updating profile: ${error.message}`);
        console.error("Error updating profile:", error);
      }
    } else {
      toast.error("User data not found in session storage");
    }
  };

  function hendleFile(e) {
    if (e.target.files[0]) setProfilePicture(e.target.files[0]);
  }

  return (
    <>
      <Nav />
      <div className="relative">
        {loading && <Loader/>}
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block"></aside>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                Public Profile
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={`${formData.profilePicture}`}
                      alt="Bordered avatar"
                    />

                    <div className="relative mt-10">
                      <input
                        type="file"
                        name="profilePicture"
                        onChange={hendleFile}
                        id="profilePicture"
                        placeholder="ProfileImage"
                        className="opacity-0 w-full"
                      />
                      <label
                        htmlFor="profilePicture"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                      >
                        <button
                          type="button"
                          className="text-white ml-6 bg-[#222b38] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                        >
                          Change Profile
                        </button>
                      </label>
                    </div>
                  </div>

                  <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                        >
                          Your first name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="firstName"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={handleStateChange}
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="last_name"
                          className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                        >
                          Your last name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="lastName"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={handleStateChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="gender"
                        value={formData.gender}
                        onChange={handleStateChange}
                        required
                      />
                    </div>

                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="age"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                        placeholder="your profession"
                        value={formData.age}
                        onChange={handleStateChange}
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
     </div>
    </>
  );
}
