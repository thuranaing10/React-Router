import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1>404 Not Found!</h1>
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default ErrorPage;