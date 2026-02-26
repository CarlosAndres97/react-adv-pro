import { createBrowserRouter, NavLink, Outlet } from "react-router";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import reactLogo from "../assets/react.svg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="" />
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to={"/users"}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <ShoppingPage />,
      },
      {
        path: "users",
        element: <h1>Users</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
