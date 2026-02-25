import { createBrowserRouter, Navigate, NavLink, Outlet } from "react-router";

import reactLogo from "../assets/react.svg";

import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="" />
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    ),
    children: [
      ...routes.map(({ path, Component, children }) => ({
        path,
        element: <Component />,
        children: children ? children.map(({ path: childPath, Component: ChildComponent }) => ({
          path: childPath,
          element: <ChildComponent />,
        })) : undefined,
      })),
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
