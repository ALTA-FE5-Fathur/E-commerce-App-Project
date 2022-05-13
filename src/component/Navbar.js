import React from "react";
import { useNavigate } from "react-router-dom";
import buy from "../images/Buy.png";
import profilePicture from "../images/Profile.png";
import "./Navbar.css"

function NavbarComponent() {
    const navigate = useNavigate();
    return (
        <div className="bg-navbar py-3 shadow-sm">
            <div className="container">
                {!localStorage.getItem("token") ?
                    <h6 className="text-end">
                        <span className="cursor-klik" onClick={() => {
                            navigate('/login')
                        }}>Masuk</span> / <span className="cursor-klik" onClick={() => {
                            navigate('/signup');
                        }}>Daftar</span></h6>
                    :
                    <h6 className="text-end">
                        <span onClick={() => {
                            localStorage.clear();
                            navigate("/");
                        }}>Logout</span>
                    </h6>}

                <div className="row align-items-center">
                    <div className="col-2">
                        <h1 className="cursor-klik" onClick={() => {
                            navigate("/");
                        }}>Kishop</h1>
                    </div>
                    <div className="col-8 p-0">
                        <form>
                            <input type="text" className="form-control rounded-pill" />
                        </form>
                    </div>
                    <div className="col-2 text-end">
                        <img src={buy} alt="cart" className="cursor-klik" onClick={() => {
                            !localStorage.getItem("token") ? navigate('/login') : navigate('/cart');
                        }} />
                        <img src={profilePicture} alt="cart" className="cursor-klik" onClick={() => {
                            !localStorage.getItem("token") ? navigate('/login') : navigate('/profil');
                        }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavbarComponent;