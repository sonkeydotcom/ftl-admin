import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginScreen from "./routes/login";
// import Wrapper from "./components/layout/wrapper";
// import HomeScreen from "./routes/home";
import Root from "./components/layout/root";
// import CreateProduct from "./routes/create-product";
import AllProducts from "./routes/all-products";
import { AppProvider } from "./context/AppProvider";
import Products from "./routes/products";

import Orders from "./routes/orders";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Wrapper />,
  //   children: [{ path: "/", element: <LoginScreen /> }],
  // },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "Products", element: <Products /> },
      { path: "Orders", element: <Orders /> },
      { path: "all-products", element: <AllProducts /> },
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
