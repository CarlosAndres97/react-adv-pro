import {
  Link,
  Outlet,
} from "react-router-dom";
import { Suspense } from "react";

export const Navigation = () => {

  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to='lazy1'> Lazy Page 1</Link>
        </li>
        <li>
          <Link to='lazy2'> Lazy Page 2</Link>
        </li>
        <li>
          <Link to='lazy3'> Lazy Page 3</Link>
        </li>
      </ul>
       <Suspense fallback={<div>Cargando...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};