import { RouterProvider } from "react-router";
import { Navigation } from "./route/Navigation";

export const App = () => {
  return <RouterProvider router={Navigation} />;
};
