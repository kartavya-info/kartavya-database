import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';


import EnterStudentDetails from './Pages/EnterStudentDetails.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path='/enter-student-details' element={<EnterStudentDetails/>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
