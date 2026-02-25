import { lazy } from "react";
import type { JSX, LazyExoticComponent } from "react";

import { NoLazy } from "./../01-lazy-load/pages/NoLazy";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/lazyload",
    component: lazy(() => import("../01-lazy-load/layout/LazyLayout")),
    name: "LazyLoading Nested",
    children: [
      { path: "lazy1", component: LazyPage1, name: "Lazy Page 1"},
      { path: "lazy2", component: LazyPage2, name: "Lazy Page 2" },
      { path: "lazy3", component: LazyPage3, name: "Lazy Page 3" },
    ],
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "No Lazy loading",
  },
];
