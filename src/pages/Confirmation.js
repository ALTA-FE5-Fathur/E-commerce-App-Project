import React from "react";
import "../styles/Confirmation.css";
import contoh from "../images/Contoh.png";

function Confirmation() {
    return (
        <div className="container">
            <div className="border rounded shadow-sm my-4 px-5">
                <h4 className="py-2">Alamat Pengiriman</h4>
                <div className="border rounded shadow-sm py-3 px-4 mb-4">
                    <h5><b>Andrew Smith</b></h5>
                    <h6>08772229994</h6>
                    <h5>Jalan Bunga Indah VIII No 87 RT 03 RW 12, Lengkong, Kota Cimahi</h5>
                </div>

                <div className="border rounded shadow-sm py-3 px-4 mb-3">
                    <h5><b>SepatuKita</b></h5>

                    <div className="d-flex justify-content-around mb-2">
                        <img src={contoh} className="img-confirmation img-fluid" alt="..." />
                        <div className="my-auto">
                            <h3>Nineten Haze Vision</h3>
                            <h3><b>Rp125.000</b></h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around mb-2">
                        <img src={contoh} className="img-confirmation img-fluid" alt="..." />
                        <div className="my-auto">
                            <h3>Nineten Haze Vision</h3>
                            <h3><b>Rp125.000</b></h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around mb-2">
                        <img src={contoh} className="img-confirmation img-fluid" alt="..." />
                        <div className="my-auto">
                            <h3>Nineten Haze Vision</h3>
                            <h3><b>Rp125.000</b></h3>
                        </div>
                    </div>
                </div>

                <div className="border rounded shadow-sm py-2 px-5 mb-3">
                    <h4><b>Rincian Pembayaran</b></h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Total Harga (3 Produk)</h5>
                        <h4><b>Rp500.000</b></h4>
                    </div>
                    <button className="btn btn-primary w-100">Konfirmasi Pesanan</button>
                </div>
            </div>

        </div>
    )
}

export default Confirmation;