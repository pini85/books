import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./auth/PrivateRoute";
import routes from "./routes";

const RouterConfig = () => {
  return (
    <Suspense fallback={"loading!!!!!!"}>
      <Routes>
        {routes.map((route, index) => {
          const routeProps = route.isPrivate
            ? PrivateRoute(route)
            : { element: route.element, ...route };

          return <Route key={index} {...routeProps} />;
        })}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
