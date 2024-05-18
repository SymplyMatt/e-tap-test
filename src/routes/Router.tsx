import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import Verify from "../pages/auth/Verify";
import DashboardContext from "../context/DashboardContext";
import Projects from "../pages/dashboard/Projects";
import CreateProject from "../pages/dashboard/CreateProject";
import Project from "../pages/dashboard/Project";
import DashboardMiddleware from "../pages/dashboard/DashboardMiddleware";
import AuthMiddleware from "../pages/auth/AuthMiddleware";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: 
          <AuthMiddleware />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
  ];
  const authRoutes = [
    {
      path: "/auth",
      element: 
        <AuthContext>
          <AuthMiddleware />
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
  const dashboardRoutes = [
    {
      path: "/projects",
      element: 
        <DashboardContext>
          <DashboardMiddleware />
        </DashboardContext>,
      children: [
        {
          path: "",
          element: <Projects />,
        },
        {
          path: "new",
          element: <CreateProject />,
        },
        {
          path: ":id",
          element: <Project />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes,...dashboardRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
