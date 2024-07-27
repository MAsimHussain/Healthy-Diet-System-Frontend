// import { Navigate } from "react-router";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter,
// } from "react-router-dom";
// import SignIn from "./Components/Registration/SignIn.jsx";
// import SignUp from "./Components/Registration/SignUp.jsx";
// import LayOut from "./LayOut.jsx";
// import Admin from "./Components/Admin/Admin.jsx";
// import UserList from "./Components/Admin/UsersList.jsx";
// import Nutrition from "./Components/Nutritionist/Nutrition.jsx";
// import User from "./Components/User/User.jsx";
// import { Toaster } from "react-hot-toast";
// import UpdateProfile from "./Components/User/UpdateProfile.jsx";
// import Nopage from "./Components/Nopage.jsx";
// import useAuth from "./Components/Hook/Auth.jsx";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute element={<LayOut />} roles={["User", "Admin", "Nutritionist"]} />
//             }
//           >
//             {/* Nested routes */}
//             <Route path="admin" element={<ProtectedRoute element={<Admin />} roles={["Admin"]} />} />
//             <Route path="userslist" element={<ProtectedRoute element={<UserList />} roles={["Admin"]} />} />
//             <Route path="nutritionist" element={<ProtectedRoute element={<Nutrition />} roles={["Nutritionist"]} />} />
//             <Route path="users" element={<ProtectedRoute element={<User />} roles={["User"]} />} />
//             <Route path="updateprofile" element={<ProtectedRoute element={<UpdateProfile />} roles={["User", "Nutritionist"]} />} />
//             <Route path="*" element={<Nopage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   );
// }

// //