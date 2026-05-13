import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import MatchPage from "./pages/MatchPage";
import LoginPage from "./components/LoginPage";

import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";
import MovieBookingPage from "./pages/MovieBookingPage";
import EventBookingPage from "./pages/EventBookingPage";
import BookingProvider from "./context/BookingContext";

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
        path:'/success',
        element:<SuccessPage/>
      },
      {
        path:'/movies',
        element:<MovieBookingPage/>
      },
      {
        path:'/Events',
        element:<EventBookingPage/>
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