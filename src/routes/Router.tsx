import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import SignIn from "../pages/auth/SignIn";
import Verify from "../pages/auth/Verify";
import DashboardContext from "../context/DashboardContext";
import Lessons from "../pages/dashboard/Lessons";
import Lesson from "../pages/dashboard/Lesson";
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
          element: <Lessons />,
        },
        {
          path: "*",
          element: <Lesson />,
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
          element: <Lessons />,
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
          element: <Lessons />,
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
              element: <Lesson />, 
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
