import { createBrowserRouter, Link, NavLink, Outlet } from "react-router";

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
                Home
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
        element: <h1>Home</h1>,
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
