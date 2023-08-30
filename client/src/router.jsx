import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, Projects, About, Contact, Blog, NotFound, MySetup, Privacy } from "./pages";

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
        element: <Blog />,
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
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
