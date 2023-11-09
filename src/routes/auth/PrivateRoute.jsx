import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { ROOT } from "../constants";

export const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();
  const poorManLogin = user?.name;

  const element = poorManLogin ? (
    Element
  ) : (
    <Navigate to={ROOT} state={{ from: location.pathname }} />
  );

  return { element, ...rest };
};
