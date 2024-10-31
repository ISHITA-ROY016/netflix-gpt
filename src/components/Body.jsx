import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />, // Redirect from "/" to "/login"
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;