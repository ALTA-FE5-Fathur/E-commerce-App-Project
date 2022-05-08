import React from "react";
import "../styles/SignUp.css";

function SignUp() {
    return (
        <div className="container">
            <div className="box-content border rounded shadow-sm my-5">
                <div className="row align-items-center row-middle">
                    <div className="col-md-4" />
                    <div className="col-xl-4 px-5">
                        <p className="text-center mt-4">Punya Akun? <strong>Masuk</strong></p>
                        <form>
                            <input type="text" class="form-control my-2 rounded" placeholder="Username" />
                            <input type="password" class="form-control my-2 rounded" placeholder="Password" />
                            <input type="text" class="form-control my-2 rounded" placeholder="Full Name" />
                            <input type="email" class="form-control my-2 rounded" placeholder="E-mail" />
                            <input type="text" class="form-control my-2 rounded" placeholder="Phone Number" />
                            <textarea class="form-control my-2 rounded" placeholder="Address"></textarea>
                            <button type="button" class="btn btn-primary w-100 my-2 rounded">Sign Up</button>
                        </form>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;