import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import AuthContext from "../context/AuthContext";
import SignIn from "../pages/auth/SignIn";
import DashboardContext from "../context/DashboardContext";
import Lessons from "../pages/dashboard/Subjects";
import Subjects from "../pages/dashboard/admin/Subjects";
import Lesson from "../pages/dashboard/Lesson";
import DashboardMiddleware from "../pages/dashboard/DashboardMiddleware";
import AuthMiddleware from "../pages/auth/AuthMiddleware";
import Topics from "../pages/dashboard/Topics";
import AdminMiddleware from "../pages/dashboard/admin/AdminMiddleware";
import Ranking from "../pages/dashboard/admin/Ranking";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: 
        <DashboardContext>
          <DashboardMiddleware />
        </DashboardContext>,
      children: [
        {
          path: "",
          element:<Navigate to="/subjects" />,
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
      element: (
        <AuthContext>
          <AuthMiddleware />
        </AuthContext>
      ),
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
        }
      ],
    },
  ];
  const subjectRoutes = [
    {
      path: "/subjects",
      element: (
        <DashboardContext>
          <DashboardMiddleware />
        </DashboardContext>
      ),
      children: [
        {
          path: "", 
          element: <Lessons />, 
        },
        {
          path: ":subjectId", 
          element: <Topics />, 
        },
        {
          path: "topic/:topicId", 
          element: <Lesson />, 
        },
      ],
    },
  ];
  const adminRoutes = [
    {
      path: "/admin",
      element: (
        <DashboardContext>
          <AdminMiddleware />
        </DashboardContext>
      ),
      children: [
        {
          path: "", 
          element: <Subjects />, 
        },
        {
          path: "subjects", 
          element: <Subjects />, 
        },
        {
          path: "ranking/:subjectId", 
          element: <Ranking />, 
        },
      ],
    },
  ];

  const router = createBrowserRouter([...pageRoutes, ...authRoutes, ...subjectRoutes, ...adminRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
