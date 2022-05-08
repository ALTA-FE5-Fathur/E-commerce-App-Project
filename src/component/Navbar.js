import React from "react";
import buy from "../images/Buy.png";
import "./Navbar.css"

function NavbarComponent() {
    return (
        <div className="bg-navbar py-4 shadow-sm">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-2">
                        <h1>Kishop</h1>
                    </div>
                    <div className="col-8 p-0">
                        <form>
                            <input type="text" className="form-control rounded-pill" />
                        </form>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <img src={buy} alt="cart" />
                        <h5>Masuk</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;