import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

function ProfileUser() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login');
        } else {
            axios.get('http://54.179.1.246:8000/users/user1', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((data) => {
                    setUsername(data.data.data.username);
                    setName(data.data.data.name);
                    setHp(data.data.data.hp);
                    setEmail(data.data.data.email);
                })
                .catch((err) => {
                    console.log(err);
                })

            // axios.get('http://54.179.1.246:8000/users/address', {
            //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            // })
            //     .then((data) => {
            //         console.log(data);
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     })
        }

    }, [navigate]);

    return (
        <div className='container'>
            <div className="border rounded shadow-sm my-4 px-5">
                <h4 className="py-2" >Profil</h4>
                <div className="border rounded shadow-sm py-3 px-4 mb-4">
                    <h6 className='text-end' onClick={() => navigate('/profil/edit')}>Edit Profil</h6>
                    <table className='w-100'>
                        <tr>
                            <td><h5>Nama</h5></td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td><h5>Username</h5></td>
                            <td>{username}</td>
                        </tr>
                        <tr>
                            <td><h5>E-mail</h5></td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td><h5>Phone Number</h5></td>
                            <td>{hp}</td>
                        </tr>
                        <tr>
                            <td><h5>Address</h5></td>
                            <td>Jalan Bunga Indah VIII No. 7 Kelurahan Merdeka Kecamatan Penari Kota Yogyakarta</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser;