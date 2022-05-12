import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setGlobalUsername } from "../store/username"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = () => {
        const body = {
            username,
            password
        }

        setIsLoading(true);

        axios.post('http://54.179.1.246:8000/login', body)
            .then(data => {
                localStorage.setItem("token", data.data.data.token);
                localStorage.setItem("username" ,data.data.data.user.username);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setMessage(err.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="container">
            <div className="box-content border rounded shadow-sm my-5">
                {message && <Alert variant="danger" className="text-center" onClose={() => setMessage(null)} dismissible>{message}</Alert>}
                <div className="row align-items-center row-middle">
                    <div className="col-md-4" />
                    <div className="col-xl-4 px-5">
                        <form>
                            <input type="text" autoComplete="off" value={username} className="form-control my-4 rounded" placeholder="Username" onChange={(e) => {
                                setUsername(e.target.value);
                            }} />
                            <input type="password" value={password} className="form-control my-4 rounded" placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <button type="button" className="btn btn-primary w-100 my-2 rounded" onClick={() => handleSubmit()} disabled={isLoading ? true : false}>Login</button>
                        </form>
                        <p className="text-center mt-4">Baru di Kishop? <strong className="btn-signup" onClick={() => {
                            navigate("/signup")
                        }}>Daftar</strong></p>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        </div>
    )
}

export default Login;