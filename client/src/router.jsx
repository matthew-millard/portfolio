import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, About, Contact, NotFound } from "./pages";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
