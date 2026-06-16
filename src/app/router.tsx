import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/Search";
import Pack from "../pages/Pack";
import Downloads from "../pages/Downloads";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/pack",
    element: <Pack />,
  },
  {
    path: "/downloads",
    element: <Downloads />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
