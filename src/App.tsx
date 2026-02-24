import { RouterProvider } from "react-router";
import { router } from "./route/Navigation";

export const App = () => {
  return <RouterProvider router={router} />;
};
