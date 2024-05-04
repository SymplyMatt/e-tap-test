import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";
import Verify from "../pages/auth/Verify";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <SignUp />,
    },
  ];

  const authRoutes = [
    {
      path: "/auth",
      element: 
        <AuthContext>
          <Outlet />
        </AuthContext>,
      children: [
        {
          path: "",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "verify",
          element: <Verify />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
