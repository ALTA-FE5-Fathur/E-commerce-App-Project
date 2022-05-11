import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function SignUp() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [hp, setHp] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const [message, setMessage] = useState(null);
    const [color, setColor] = useState('success');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        const body = {
            name,
            username,
            hp,
            email,
            password,
            role
        }

        setIsLoading(true);
        axios.post("http://54.179.1.246:8000/register", body)
            .then(data => {
                setMessage(data.data.message);
                setColor('success');
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
                setMessage("Username atau e-mail yang anda masukan sudah terpakai."); // Jika masuk catch ==> Request failed with status code 400
                setColor('danger');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="container">
            <div className="box-content border rounded shadow-sm my-5">
                {message && <Alert variant={color} className="text-center" onClose={() => setMessage(null)} dismissible>{message}</Alert>}
                <div className="row align-items-center row-middle">
                    <div className="col-md-4" />
                    <div className="col-xl-4 px-5">
                        <p className="text-center mt-4">Punya Akun? <strong className="btn-login" onClick={() => {
                            navigate('/login');
                        }}>Masuk</strong></p>
                        <form>
                            <input type="text" autoComplete="off" className="form-control my-2 rounded" placeholder="Username" value={username} onChange={(e) => {
                                setUsername(e.target.value);
                            }} />
                            <input type="password" className="form-control my-2 rounded" placeholder="Password" value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <input type="text" className="form-control my-2 rounded" placeholder="Full Name" value={name} onChange={(e) => {
                                setName(e.target.value);
                            }} />
                            <input type="email" autoComplete="off" className="form-control my-2 rounded" placeholder="E-mail" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <input type="text" className="form-control my-2 rounded" placeholder="Phone Number" value={hp} onChange={(e) => {
                                setHp(e.target.value);
                            }} />
                            <input type="radio" id="customer" name="role" value={role} onChange={() => {
                                setRole(0);
                            }} />
                            <label htmlFor="customer" className="ms-3">Customer</label><br />
                            <input type="radio" id="merchant" name="role" value={role} onChange={() => {
                                setRole(1);
                            }} />
                            <label htmlFor="merchant" className="ms-3">Merchant</label>
                            {/* <textarea className="form-control my-2 rounded" placeholder="Address"></textarea> */}
                            <button type="button" className="btn btn-primary w-100 my-2 rounded" onClick={() => handleSubmit()}>{isLoading ? 'Submitting' : 'Submit'}</button>
                        </form>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;