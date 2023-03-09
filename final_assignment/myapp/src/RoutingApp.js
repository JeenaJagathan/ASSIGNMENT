import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EmployeePage from './EmployeePage'
// import HomePage from './HomePage'
import LoginPage from "./login/LoginPage";
import RegistrationPage from "./RegistrationPage";
import ProductPage from "./ProductPage";
import ResponsiveDrawer from "./ResponsiveDrawer";
import SetPassword from "./SetPassword";
import UsersPage from "./UsersPage";
import TodoPage from "./TodoPage";
import PostPage from "./PostPage";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/dashboard", element: <ResponsiveDrawer /> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/setpassword", element: <SetPassword /> },
  { path: "/products", element: <ProductPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/todos", element: <TodoPage /> },
  { path: "/posts", element: <PostPage /> },

]);

function RoutingApp() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default RoutingApp;
