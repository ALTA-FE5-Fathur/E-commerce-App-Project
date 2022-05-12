import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import promo from "../images/Promo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const [categories, setCategories] = useState('');
    const [posts, setPosts] = useState('');

    const dataCategories = Array.from(categories);
    const dataPosts = Array.from(posts);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://54.179.1.246:8000/categories', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then((data) => {
                setCategories(data.data.data);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get('http://54.179.1.246:8000/products', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then((data) => {
                setPosts(data.data.data);
            })
            .catch((err) => {
                console.log(err, 'error dari produk');
            })

    }, []);

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
            <div className="row my-4">
                <div className="col-md-6 border rounded shadow-sm">
                    <h1>Ini kategori</h1>
                    <div className="d-flex justify-content-around mb-3">
                        {dataCategories.map((el, i) => (
                            <div className="card p-0 rounded-kategori shadow-sm card-kategori" key={i}>
                                <img src={require(`../images/categories/${el.slug}.jpg`)} className="card-img-top rounded-top-kategori" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{el.name}</h5>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 border rounded shadow-sm p-0 overflow-hidden">
                    {/* <h1>Ini banner promo</h1> */}
                    <img src={promo} className="card-img-top rounded-top-img w-100 h-100" alt="..." />
                </div>
            </div>
            <div className="row border rounded shadow-sm">
                <h1>Ini untukmu</h1>
                {dataPosts.map((el, i) => (
                    <div className="card p-0 m-3 rounded shadow-sm cursor-klik" key={i} onClick={() => {
                        navigate(`/detail/${el.slug}`);
                    }}>
                        <img src={require(`../images/product/kenziolondon.jpg`)} className="card-img-top rounded-top-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <h3 className="card-text"><strong>Rp{makeRupiah(el.price)}</strong></h3>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Home;