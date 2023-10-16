import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import GetStart from "./components/GetStart/GetStart.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ActivityCard from "./components/ActivityCard/ActivityCard.jsx";
import SelectActivity from "./components/SelectActivity/SelectActivity.jsx";
import ActivityForm from "./components/SelectActivity/ActivityForm.jsx";
import Advice from "./components/Advice.jsx";
import Logout from "./components/Logout.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import { ActivityContextProvider } from "./components/function.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/ActivityCard",
        element: <ActivityCard />,
      },
      {
        path: "/Advice",
        element: <Advice />,
      },
      {
        path: "/SelectActivity",
        element: <SelectActivity />,
      },
      {
        path: "/ActivityForm",
        element: <ActivityForm />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
    ],
  },
  {
      path: "/Register",
      element: <Register />,
  },
  {
    path: "/Getstart",
    element: <GetStart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivityContextProvider>
      <RouterProvider router={router} />
    </ActivityContextProvider>
  </React.StrictMode>
);
