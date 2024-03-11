import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Root } from './routes/root';
import { Bookings } from './routes/Bookings';
import { Location } from './routes/Location';
import { TripsIndex } from './routes/trips/TripsIndex';
import { TripCreate } from './routes/trips/TripCreate';
import { TripEdit } from './routes/trips/TripEdit';
import { Login } from './routes/Login';
import { Logout } from './routes/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <Logout /> },
      {
        path: 'trips', element: <Outlet />, children: [
          { index: true, element: <TripsIndex /> },
          { path: "create", element: <TripCreate /> },
          { path: "edit/:id", element: <TripEdit /> }
        ]
      },
      { path: "bookings", element: <Bookings /> },
      { path: "location", element: <Location /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
