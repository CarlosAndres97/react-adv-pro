import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import logo from "../assets/react.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
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

          <Routes>
            {routes.map(({ path, component: Component, children }) => (
              <Route key={path} path={path} element={<Component />}>
                {children &&
                  children.map(
                    ({ path: childPath, component: ChildComponent }) => (
                      <Route
                        key={childPath}
                        path={childPath}
                        element={<ChildComponent />}
                      />
                    ),
                  )}
              </Route>
            ))}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
