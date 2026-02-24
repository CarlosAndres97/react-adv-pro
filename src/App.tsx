import { RouterProvider } from "react-router";
import { Navigation } from "./routes/Navigation";

export const App = () => {
  return <RouterProvider router={Navigation} />;
};
