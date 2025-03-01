import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Sample from "@/components/Form/MultiSelect";

import EnterStudentDetails from "./Pages/AddNewStudent/EnterStudentDetails";
import StudentSpreadsheet from "./Pages/StudentSpreadsheet/StudentSpreadsheet.jsx";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import LoginUser from "./Pages/Login/LoginUser";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/enter-student-details" element={<EnterStudentDetails />} />
      <Route path="/student-spreadsheet" element={<StudentSpreadsheet />} />
      <Route path="/hello" element={<Sample />} />

      {/* Admin Routes */}
      <Route path="/admin/:id" element={<StudentProfile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
);
