import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  Home,
  Projects,
  About,
  Contact,
  BlogIndex,
  BlogPost,
  BlogPostEditor,
  NotFound,
  MySetup,
  Privacy,
  AdminLogin,
  AdminDashboard,
  ForgotPassword,
} from "./pages";
import { AdminProtectedRoute } from "./components";

// Pages (route components)
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        children: [
          { index: true, element: <BlogIndex /> },
          { path: ":slug", element: <BlogPost /> },
        ],
      },
      {
        path: "/my-setup",
        element: <MySetup />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/admin",
        children: [
          { path: "login", element: <AdminLogin /> },
          { path: "forgot-password", element: <ForgotPassword /> },
          {
            path: "dashboard",
            element: (
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            ),
          },
          {
            path: "create-post",
            element: (
              <AdminProtectedRoute>
                <BlogPostEditor />
              </AdminProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
