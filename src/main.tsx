import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./routes/login";
import Wrapper from "./components/layout/wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [{ path: "/", element: <LoginScreen /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* Your app components go here */}
    </RouterProvider>
  </StrictMode>
);
