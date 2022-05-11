import React from "react";
import "../styles/Home.css";
import contoh from "../images/Contoh.png";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-6 border rounded shadow-sm">
                    <h1>Ini kategori</h1>
                    <div className="d-flex justify-content-around mb-3">
                        <div className="card p-0 rounded shadow-sm card-kategori">
                            <img src={contoh} className="card-img-top rounded-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sneakers</h5>
                            </div>
                        </div>
                        <div className="card p-0 rounded shadow-sm card-kategori">
                            <img src={contoh} className="card-img-top rounded-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sneakers</h5>
                            </div>
                        </div>
                        <div className="card p-0 rounded shadow-sm card-kategori">
                            <img src={contoh} className="card-img-top rounded-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sneakers</h5>
                            </div>
                        </div>
                        <div className="card p-0 rounded shadow-sm card-kategori">
                            <img src={contoh} className="card-img-top rounded-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sneakers</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 border rounded shadow-sm">
                    <h1>Ini banner promo</h1>
                </div>
            </div>
            <div className="row border rounded shadow-sm">
                <h1>Ini untukmu</h1>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
                <div className="card p-0 m-3 rounded shadow-sm">
                    <img src={contoh} className="card-img-top rounded-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nineten Haze Vision</h5>
                        <h3 className="card-text"><strong>Rp125.000</strong></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;