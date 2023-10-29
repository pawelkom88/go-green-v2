import Map from "../pages/map/POIMap.js";
import ErrorPage from "../pages/error-page/ErrorPage.js";
import Login from "../pages/login/Login";
import UserProfile from "../pages/user-profile/UserProfile";

export const routeConfig = {
  home: {
    path: "/",
    element: <Map />,
  },
  login: {
    path: "/login",
    element: <Login />,
  },
  userProfile: {
    path: "/user-profile",
    element: <UserProfile />,
  },
  error: {
    path: "*",
    element: <ErrorPage />,
  },
} as const;
