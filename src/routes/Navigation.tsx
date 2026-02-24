import { createBrowserRouter, NavLink, Outlet } from "react-router";

import reactLogo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";


export const Navigation = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="" />
          <ul>
            <li>
              <NavLink
                to={"/lazy1"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy1
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to={"/lazy2"}
              >
                Lazy2
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to={"/lazy3"}
              >
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    ),
    children: [
      {
        path:'lazy1',
        element: <LazyPage1 />,
      },
      {
        path: "lazy2",
        element: <LazyPage2 />,
      },
      {
        path: "lazy3",
        element: <LazyPage3 />,
      },
    ],
  },
]);
