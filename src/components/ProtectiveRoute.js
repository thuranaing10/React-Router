import { Navigate } from "react-router-dom";

function ProtectiveRoute(props) {
    if (!props.user) {
        return <Navigate to="/"/>
    }
    return props.children;
}

export default ProtectiveRoute;