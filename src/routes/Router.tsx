import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import AuthContext from "../context/AuthContext";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
    {
      path: "/",
      element: <SignUp />,
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
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
