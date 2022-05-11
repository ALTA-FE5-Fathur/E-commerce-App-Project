import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import buy from "../images/Buy.png";
import "./Navbar.css"

function NavbarComponent() {
    const navigate = useNavigate();
    return (
        <div className="bg-navbar py-3 shadow-sm">
            <div className="container">
                {!localStorage.getItem("token") ?
                    <h6 className="text-end">
                        <span onClick={() => {
                            navigate('/login')
                        }}>Masuk</span> / <span onClick={() => {
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
                        <h1>Kishop</h1>
                    </div>
                    <div className="col-9 p-0">
                        <form>
                            <input type="text" className="form-control rounded-pill" />
                        </form>
                    </div>
                    <div className="col-1">
                        <img src={buy} alt="cart" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavbarComponent;