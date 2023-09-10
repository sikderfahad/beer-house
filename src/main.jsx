import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Root from "./layout/Root";
import Test from "./views/Test/Test";
import AuthProvider from "./provider/AuthProvider/AuthProvider";
import PreLogin from "./layout/PreLogin";
import Login from "./shared/Login/Login";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import Beers from "./views/Beers/Beers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/beers",
        element: (
          <PrivateRoute>
            <Beers></Beers>
          </PrivateRoute>
        ),
      },
      {
        path: "/test",
        element: <Test></Test>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },

  {
    path: "login",
    element: <PreLogin></PreLogin>,
    children: [
      {
        path: "new",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
