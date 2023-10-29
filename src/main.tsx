import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource-variable/nunito";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeConfig } from "./utils/routes";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      routeConfig.home,
      routeConfig.login,
      routeConfig.userProfile,
      routeConfig.error,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
      future={{ v7_startTransition: true }}
    />
  </React.StrictMode>
);
