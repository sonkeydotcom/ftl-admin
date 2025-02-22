import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./routes/login";
import Root from "./components/layout/root";
import Store from "./routes/store";

import { AppProvider } from "./context/AppProvider";
import Products from "./routes/products";
import Orders from "./routes/orders";
import { ProtectedRoute } from "./components/protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
    // children: [{ path: "/", element: <LoginScreen /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Root />,
        children: [
          { index: true, element: <Store /> },
          { path: "Products", element: <Products /> },
          { path: "Orders", element: <Orders /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  </StrictMode>
);
