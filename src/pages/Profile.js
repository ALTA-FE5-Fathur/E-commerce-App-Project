import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

function ProfileUser() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [country, setCountry] = useState('');
    // const [zipCode, setZipCore] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login');
        } else {
            axios.get(`http://54.179.1.246:8000/users/${localStorage.getItem('username')}`, {
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

            axios.get('http://54.179.1.246:8000/users/address', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
                .then((data) => {
                    console.log(data.data.data);
                    // setCity(data.data.data.city);
                    // setCountry(data.data.data.country);
                    // setZipCore(data.data.data.zip_code);
                })
                .catch((err) => {
                    console.log(err, ' ==> error address');
                })
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
                            <td>{address}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser;