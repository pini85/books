import { lazy } from "react";
import { ROOT, SEARCH } from "./constants";

import Welcome from "../pages/Welcome/Welcome";

const Search = lazy(() => import("../pages/Search/Search"));

const routes = [
  {
    path: ROOT,
    element: <Welcome />,
    exact: true,
  },
  {
    path: SEARCH,
    element: <Search />,
    isPrivate: true,
  },
];
export default routes;
