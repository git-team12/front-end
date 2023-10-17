import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import css
import App from "./App.jsx";
import "./index.css";
// import components
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
import Chart from "./components/Chart/Chart.jsx";
import Login from "./components/Login/Login.jsx"
// import util
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
        path: "/Chart",
        element: <Chart />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "/Getstart",
    element: <GetStart />,
  },
  {
      path: "/Register",
      element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActivityContextProvider>
      <RouterProvider router={router} />
    </ActivityContextProvider>
  </React.StrictMode>
);
