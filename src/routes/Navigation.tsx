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

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({ path, Component, children }) => (
              <Route key={path} path={path} element={<Component />}>
                {children &&
                  children.map(
                    ({ path: childPath, Component: ChildComponent }) => (
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

// import { createBrowserRouter, Navigate, NavLink, Outlet, Router } from "react-router";

// import reactLogo from "../assets/react.svg";

// import { routes } from "./routes";
// import { Suspense } from "react";

// export const Navigation = () => {
//   return(
//     <Suspense fallback={ <span>Loading...</span> }>
//       <Router>
//         <div></div>
//       </Router>
//     </Suspense>
//   )
// }
//   {
//     path: "/",
//     element: (
//       <div className="main-layout">
//         <nav>
//           <img src={reactLogo} alt="" />
//           <ul>
//             {routes.map(({ path, name }) => (
//               <li key={path}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) => (isActive ? "nav-active" : "")}
//                 >
//                   {name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <Suspense fallback={<h1>Cargando...</h1>}>
//           <Outlet />
//         </Suspense>
//       </div>
//     ),
//     children: [
//       ...routes.map(({ path, Component, children }) => ({
//         path,
//         element: <Component />,
//         children: children ? children.map(({ path: childPath, Component: ChildComponent }) => ({
//           path: childPath,
//           element: <ChildComponent />,
//         })) : undefined,
//       })),
//     ],
//   },
//   {
//     path: "*",
//     element: <Navigate to="/" />,
//   },
// ]);
