import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import vehicles from "./data/vehicles.js";
import VehicleView from "./views/VehicleView.jsx";

const routers = [
  {
    path: "/",
    element: <App />,
  },
];

vehicles.forEach((vehicle) => {
  routers.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle} />,
  });
});

const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
