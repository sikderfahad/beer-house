import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <h1 className="text-2xl font-semibold animate-pulse">Loading....</h1>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login/new"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
