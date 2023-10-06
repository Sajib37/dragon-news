
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthProvider/Authprovider";

const PrivateRoute = ({children}) => {
    const { user,loading } = useAuth();
    const location = useLocation();
    console.log(location.pathname)
    if (loading) {
        return <span className="loading loading-spinner loading-lg absolute top-24 left-[48%]"></span>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;