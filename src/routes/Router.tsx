import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import Home from "../pages/Home";

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
          <SignUp />
        </AuthContext>,
      children: [
        {
          path: "",
          element: <SignUp />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
