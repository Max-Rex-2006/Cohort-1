import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from "./components/StadiaNavbar";
import MatchPage from "./pages/MatchPage";
import LoginPage from "./components/LoginPage";
import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";
const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <MatchPage/>
        </div>
      },     
      {
        path:'/bookings',
        element:<BookingPage/>
      },
       {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/success',
        element:<SuccessPage/>
      }
    ]
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;