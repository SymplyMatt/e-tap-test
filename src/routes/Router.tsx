import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import SignIn from "../pages/auth/SignIn";
import Verify from "../pages/auth/Verify";
import DashboardContext from "../context/DashboardContext";
import Projects from "../pages/dashboard/Projects";
import Project from "../pages/dashboard/Project";
import DashboardMiddleware from "../pages/dashboard/DashboardMiddleware";
import AuthMiddleware from "../pages/auth/AuthMiddleware";
import Topics from "../pages/dashboard/Topics";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: 
          <AuthMiddleware />,
      children: [
        {
          path: "",
          element: <Projects />,
        },
        {
          path: "*",
          element: <Projects />,
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
  const subjectRoutes = [
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
        }
      ],
    },
  ];
  const topicRoutes = [
    {
      path: "/topics",
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
          path: ":id", 
          element: 
            <DashboardContext>
              <DashboardMiddleware />
            </DashboardContext>,
          children: [
            {
              path: "", 
              element: <Topics />, 
            },
            {
              path: ":subId", 
              element: <Project />, 
            },
          ],
        }
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes,...subjectRoutes,...topicRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
