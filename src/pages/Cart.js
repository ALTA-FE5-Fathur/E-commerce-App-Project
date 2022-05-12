import React, { useState } from "react";
import "../styles/Cart.css";
import contoh from "../images/Contoh.png";
import hapus from "../images/Delete.png";

function Cart() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let temp = quantity + 1;
        setQuantity(temp);
    }

    const decrement = () => {
        let temp = quantity - 1;
        setQuantity(temp);
    }

    return (
        <div className="container">
            <div className="border rounded shadow-sm my-5 px-5">
                <div className="my-3">
                    <input type="checkbox" className="me-4" />
                    <label>Pilih semua</label>
                </div>

                {/* Pilih Pesanan */}
                <div className="border rounded shadow-sm mb-4 p-3">
                    <div className="row mb-3">
                        <div className="col-5">
                            <input type="checkbox" className="me-3" />
                            <img src={contoh} className="img-cart img-fluid" alt="..." />
                        </div>
                        <div className="col-7 my-auto">
                            <div className="row mx-3">
                                <div className="col-xl-7 my-auto">
                                    <h5 className="card-title">Nineten Haze Vision</h5>
                                    <h3 className="card-text mb-3"><strong>Rp125.000</strong></h3>
                                </div>
                                <div className="col-xl-5 my-auto">
                                    <div className="row">
                                        <div className="d-flex col-9 p-0">
                                            <button type="button" className="btn btn-danger btn-number" onClick={() => decrement()} >-</button>
                                            <input type="text" className="form-control quantity-size" value={quantity} min="1" />
                                            <button type="button" className="btn btn-success btn-number" onClick={() => increment()} >+</button>
                                        </div>
                                        <div className="col-3 my-auto">
                                            <img src={hapus} className="btn-delete ms-3" alt="..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <input type="checkbox" className="me-3" />
                            <img src={contoh} className="img-cart img-fluid" alt="..." />
                        </div>
                        <div className="col-7 my-auto">
                            <div className="row mx-3">
                                <div className="col-xl-7 my-auto">
                                    <h5 className="card-title">Nineten Haze Vision</h5>
                                    <h3 className="card-text mb-3"><strong>Rp125.000</strong></h3>
                                </div>
                                <div className="col-xl-5 my-auto">
                                    <div className="row">
                                        <div className="d-flex col-9 p-0">
                                            <button type="button" className="btn btn-danger btn-number">-</button>
                                            <input type="text" className="form-control quantity-size" value="1" min="1" />
                                            <button type="button" className="btn btn-success btn-number">+</button>
                                        </div>
                                        <div className="col-3 my-auto">
                                            <img src={hapus} className="btn-delete ms-3" alt="..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <input type="checkbox" className="me-3" />
                            <img src={contoh} className="img-cart img-fluid" alt="..." />
                        </div>
                        <div className="col-7 my-auto">
                            <div className="row mx-3">
                                <div className="col-xl-7 my-auto">
                                    <h5 className="card-title">Nineten Haze Vision</h5>
                                    <h3 className="card-text mb-3"><strong>Rp125.000</strong></h3>
                                </div>
                                <div className="col-xl-5 my-auto">
                                    <div className="row">
                                        <div className="d-flex col-9 p-0">
                                            <button type="button" className="btn btn-danger btn-number">-</button>
                                            <input type="text" className="form-control quantity-size" value="1" min="1" />
                                            <button type="button" className="btn btn-success btn-number">+</button>
                                        </div>
                                        <div className="col-3 my-auto">
                                            <img src={hapus} className="btn-delete ms-3" alt="..." />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Buat Pesanan */}
                <div className="border rounded shadow-sm mb-4 p-3">
                    <div className="px-5">
                        <h4>Rincian Pembayaran</h4>
                        <div className="d-flex justify-content-between">
                            <h4>Total Harga (3 Produk)</h4>
                            <h4><b>Rp500.000</b></h4>
                        </div>
                        <button type="button" className="btn btn-primary w-100 my-2 rounded">Buat Pesanan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;