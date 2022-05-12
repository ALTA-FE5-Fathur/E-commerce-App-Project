import React, { useEffect, useState } from "react";
import "../styles/ProductDetail.css";
import contoh from "../images/Contoh.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const [detail, setDetail] = useState('');

    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        axios.get(`http://54.179.1.246:8000/products/${params.id}`)
            .then(data => {
                setDetail(data.data.data);
            })
            .catch(err => {
                console.log(err, ' ==> dari product detail');
            })
    }, [params]);

    const addToCart = () => {
        axios.post('')
    }

    const makeRupiah = (rupiah) => {
        if (typeof rupiah === "number") {
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
    }

    return (
        <div className="container">
            <div className="border rounded shadow-sm my-5 px-5">
                <div className="row my-5">
                    <div className="col text-center">
                        <img src={contoh} className="img-fluid img-detail" alt="..." />
                        <button type="button" className="btn btn-primary w-100 my-2 rounded" onClick={() => {
                            navigate('/cart');
                        }}>Add to Cart</button>
                    </div>
                    <div className="col">
                        <h1>{detail.name}</h1>
                        <h1><strong>Rp{makeRupiah(detail.price)}</strong></h1>
                        <h5>Stok {detail.stock}</h5>
                        <hr />
                        <h4>Deskripsi Produk</h4>
                        <p className="p-deskripsi">{detail.description}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetail;