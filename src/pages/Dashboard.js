import { Outlet } from "react-router-dom";

function Dashboard(props) {
    return (
        <div>
            <h1>Dashboard Page - { props.user }</h1>
            <Outlet/>
        </div>
    )
}

export default Dashboard;