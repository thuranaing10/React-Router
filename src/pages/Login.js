import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function formHandler(e) {
        e.preventDefault();

        if (!name || !email) return;

        props.setUser(name);
        navigate("/dashborad");
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;