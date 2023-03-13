import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ProductPage from "./ProductPage";
import SetPassword from "./SetPassword";
import Charts from "./Charts";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/sidebar", element: <Charts /> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/setpassword", element: <SetPassword /> },
  { path: "/products", element: <ProductPage /> },
]);

function RoutingApp() {
  return <RouterProvider router={router} />;
}

export default RoutingApp;
