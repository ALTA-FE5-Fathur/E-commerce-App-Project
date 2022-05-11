import React from "react";
import "../styles/ProductDetail.css";
import contoh from "../images/Contoh.png";

function ProductDetail() {
    return (
        <div className="container">
            <div className="border rounded shadow-sm my-5 px-5">
                <div className="row my-5">
                    <div className="col text-center">
                        <img src={contoh} className="img-fluid img-detail" alt="..." />
                        <button type="button" className="btn btn-primary w-100 my-2 rounded">Add to Cart</button>
                    </div>
                    <div className="col">
                        <h1>Kenzio London</h1>
                        <h1><strong>Rp125.000</strong></h1>
                        <h5>Stok 15</h5>
                        <hr/>
                        <h4>Deskripsi Produk</h4>
                        <p className="p-deskripsi">Anim voluptate anim culpa ipsum cupidatat fugiat sint ullamco nisi aliqua do excepteur amet. Eiusmod nostrud ullamco ipsum voluptate reprehenderit deserunt et culpa exercitation incididunt. Aute velit aute ipsum cupidatat velit fugiat cupidatat. Velit fugiat irure commodo irure nisi. Aliquip excepteur ipsum ad Lorem ea voluptate laboris dolore occaecat deserunt velit. Qui est eiusmod quis quis qui cupidatat ipsum dolor exercitation incididunt exercitation ex deserunt velit. Quis laborum adipisicing amet dolore.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductDetail;