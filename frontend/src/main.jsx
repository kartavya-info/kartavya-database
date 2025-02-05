import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Sample from "@/components/MultiSelect";

import EnterStudentDetails from "./Pages/EnterStudentDetails.jsx";
import StudentSpreadsheet from "./Pages/StudentSpreadsheet.jsx";
import StudentProfile from "./Pages/StudentProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
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
