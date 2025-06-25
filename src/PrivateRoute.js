import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { taLogado } = useAuth();
    return taLogado ? children : <Navigate to="/login" />;
};

export default PrivateRoute;