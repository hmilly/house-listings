import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "./hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkStatus } = useAuthStatus();
  
  if (checkStatus) <h3>'Loading...'</h3>;
  else loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
