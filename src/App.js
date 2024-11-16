// App.js
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Body from "./components/common/Body";
import Login from "./components/auth/Login";
import Browse from "./components/layout/Browse";
import appStore from "./utils/redux/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Navigate to="/login" replace /> },
      { path: "/login", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
