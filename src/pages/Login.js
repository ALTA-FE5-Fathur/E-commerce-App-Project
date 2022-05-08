import React from "react";
import "../styles/Login.css";

function Login() {
    return (
        <div className="container">
            <div className="box-content border rounded shadow-sm my-5">
                <div className="row align-items-center row-middle">
                    <div className="col-md-4" />
                    <div className="col-xl-4 px-5">
                        <form>
                            <input type="text" class="form-control my-4 rounded" placeholder="Username, e-mail or phone number" />
                            <input type="password" class="form-control my-4 rounded" placeholder="Password" />
                            <button type="button" class="btn btn-primary w-100 my-2 rounded">Login</button>
                        </form>
                        <p className="text-center mt-4">Baru di Kishop? <strong>Daftar</strong></p>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        </div>
    )
}

export default Login;