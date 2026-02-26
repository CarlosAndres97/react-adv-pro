import { RouterProvider } from "react-router";
import { router } from "./routes/Navigation";

export const App = () => {
  return <RouterProvider router={router} />;
};
