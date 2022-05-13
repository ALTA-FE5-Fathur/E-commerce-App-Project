import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import contoh from "../images/Contoh.png";
import hapus from "../images/Delete.png";
import axios from "axios";

function Cart() {
    // const [Quantity, setQuantity] = useState();
    const [keranjang, setKeranjang] = useState([]);

    useEffect(() => {
        axios.get('http://54.179.1.246:8000/users/carts', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then((data) => {
                setKeranjang(data.data.data);
            })
            .catch((err) => {
                console.log(err, ' ==> error cart');
            })

    }, [])

    const increment = (idBarang) => {
        // const body = {
        //     ProductID: idBarang,
        //     Quantity
        // }

        // axios.put(`http://54.179.1.246:8000/users/carts/${idBarang}`, body, {
        //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        // })
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err, idBarang, ' ==> error dari increment');
        //     })
    }

    const deleteItems = (idBarang) => {
        axios.delete(`http://54.179.1.246:8000/users/carts/${idBarang}`, {
            headers: { 
                token: localStorage.getItem("token")
             }
        })
            .then((data) => {
                console.log(data, 'dari deleteitems');
            })
            .catch((err) => {
                console.log(err, '==> err dari deleteitems');
            })
    }

    const makeRupiah = (rupiah) => {
        let text = rupiah.toString();
        let result = '';
        for (let i = text.length - 1; i >= 0; i--) {
            result += text[i];
            if (result.length === 3) {
                result += '.';
            }
        }
        return result.split("").reverse().join("");
    }

    return (
        <div className="container">
            <div className="border rounded shadow-sm my-5 px-5">
                <div className="my-3">
                    <input type="checkbox" className="me-4" />
                    <label>Pilih semua</label>
                </div>

                {/* Pilih Pesanan */}
                {keranjang.map((el, i) => (
                    <div className="border rounded shadow-sm mb-4 p-3">
                        <div className="row mb-3">
                            <div className="col-5">
                                <input type="checkbox" className="me-3" />
                                <img src={contoh} className="img-cart img-fluid" alt="..." />
                            </div>
                            <div className="col-7 my-auto">
                                <div className="row mx-3">
                                    <div className="col-xl-7 my-auto">
                                        <h5 className="card-title">{el.Name}</h5>
                                        <h3 className="card-text mb-3"><strong>Rp{makeRupiah(el.Price)}</strong></h3>
                                    </div>
                                    <div className="col-xl-5 my-auto">
                                        <div className="row">
                                            <div className="d-flex col-9 p-0">
                                                <button type="button" className="btn btn-danger btn-number" >-</button>
                                                <input type="text" className="form-control quantity-size" value={el.Quantity} min="1" />
                                                <button type="button" className="btn btn-success btn-number" onClick={() => increment(el.ProductID)} >+</button>
                                            </div>
                                            <div className="col-3 my-auto">
                                                <img src={hapus} className="btn-delete ms-3 cursor-klik" alt="..." onClick={() => deleteItems(el.ProductID)} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}



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