import { Suspense } from "react";
import { Link, Outlet } from "react-router";

export const Navigation = () => {
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to="lazy1">LazyPage1</Link>
        </li>
        <li>
          <Link to="lazy2">LazyPage2</Link>
        </li>
        <li>
          <Link to="lazy3">LazyPage3</Link>
        </li>
      </ul>
      
      <Suspense fallback={<div>Cargando...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
