import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  json,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./Components/Registration/SignIn.jsx";
import SignUp from "./Components/Registration/SignUp.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import UserList from "./Components/Admin/UsersList.jsx";
import Nutrition from "./Components/Nutritionist/Nutrition.jsx";
import User from "./Components/User/User.jsx";
import { Toaster } from "react-hot-toast";
import UpdateProfile from "./Components/User/UpdateProfile.jsx";
import Nopage from "./Components/Nopage.jsx";
import ProtectedRoute from "./Components/Hook/ProtectedRoute.jsx";
import ViewNutritionist from "./Components/User/ViewNutritionist.jsx";
import Chat from "./Components/Chats/Chat.jsx";
import ViewPatient from "./Components/Nutritionist/ViewPatient.jsx";
import { AuthProvider } from "./Components/Context/UseContext.jsx";
import MyState from "./Components/Context/MyState.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/*",
    element: <Nopage />,
  },

  {
    path: "admin",
    element: (
      // <ProtectedRoute element={

      <Admin />
    ),
    //  } roles="Admin" />,
  },
  {
    path: "userslist",
    element: (
      //    <ProtectedRoute element={
      <UserList />
    ),
    //  } roles="Admin" />,
  },
  {
    path: "users",
    element: (
      //<ProtectedRoute element={
      <User />
    ),
    //} roles={"User"} />,
  },
  {
    path: "nutritionist",
    element: (
      //  <ProtectedRoute element={
      <Nutrition />
      // } roles="Nutritionist" />
    ),
  },
  {
    path: "updateprofile",
    element: (
      //  <ProtectedRoute
      <UpdateProfile />
      // roles={["User", "Nutritionist"]}
      // />
    ),
  },
  {
    path: "viewpatient",
    element: (
      //<ProtectedRoute
      <ViewPatient />

      //roles={["Nutritionist"]} />
    ),
  },
  {
    path: "view",
    element: (
      // <ProtectedRoute
      <ViewNutritionist />
    ),
    //   roles={["User"]} />,
  },
  {
    path: "chat",
    element: (
      // <ProtectedRoute
      <Chat />
    ),
    //   roles={["User", "Nutritionist"]}
    //  />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyState>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </MyState>
  </React.StrictMode>
);

export const UserProdectedRoute = ({ children }) => {
  debugger;
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user && user.roles[0] === "User") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
