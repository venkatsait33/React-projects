import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const { state } = useContext(AppContext);

  if (state.isAuthenticated) {
    return component;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
