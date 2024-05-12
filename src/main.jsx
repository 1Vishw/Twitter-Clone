import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MyComponent from "./force";
import Login from './Pages/Login/main'
import Home from './Pages/Home/main'
import Profile from './Pages/Profile/main'
import Settings from "./Pages/Settings/main";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><MyComponent></MyComponent></>
  },
  {
    path: "/login",
    element: <><Login></Login></>
  },
  {
    path: "/home",
    element: <><Home></Home></>
  },
  {
    path: "/settings",
    element: <><Settings></Settings></>
  },
  {
    path: "/profile",
    element: <><Profile></Profile></>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);