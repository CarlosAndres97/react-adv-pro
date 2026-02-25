import { lazy } from "react";
import type { JSX, LazyExoticComponent } from "react";

import { NoLazy } from "./../01-lazy-load/pages/NoLazy";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy(() => import("../01-lazy-load/layout/LazyLayout")),
    name: "LazyLoading Nested",
    children: [
      { path: "lazy1", Component: LazyPage1, name: "Lazy Page 1" },
      { path: "lazy2", Component: LazyPage2, name: "Lazy Page 2" },
      { path: "lazy3", Component: LazyPage3, name: "Lazy Page 3" },
    ],
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No Lazy loading",
  },
];

// import { lazy, type JSX } from "react";
// import { NoLazy } from "../01-lazy-load/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

// const LazyLayout = lazy(() => import("./../01-lazy-load/layout/LazyLayout"));
// type JSXComponent = () => JSX.Element;

// interface Route {
//   path: string;
//   Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
//   name: string;
//   children?: Route[];
// }

// export const routes: Route[] = [
//   {
//     path: "lazyload",
//     Component: LazyLayout,
//     name: "LazyLoading Nested",
//     children: [
//       { path: "lazy1", Component: LazyPage1, name: "Lazy Page 1" },
//       { path: "lazy2", Component: LazyPage2, name: "Lazy Page 2" },
//       { path: "lazy3", Component: LazyPage3, name: "Lazy Page 3" },
//     ],
//   },
//   {
//     path: "no-lazy",
//     Component: NoLazy,
//     name: "No Lazy Loading",
//   },
// ];
