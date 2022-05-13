import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EditProfile.css';

function EditProfile() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [email, setEmail] = useState('');

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
        }

    }, [navigate]);

    function updateProfile() {
        const body = {
            name,
            username,
            email,
            hp
        }

        axios.put('http://54.179.1.246:8000/users/user2', body, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
            .then((data) => {
                setUsername(data.data.data.username);
                setName(data.data.data.name);
                setHp(data.data.data.hp);
                setEmail(data.data.data.email);

                navigate('/profil');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='container'>
            <div className="border rounded shadow-sm my-4 px-5">
                <h4 className="py-2">Edit Profil</h4>
                <div className="border rounded shadow-sm py-3 px-4 mb-4">
                    <form>
                        <div className='row'>
                            <div className='col-4 my-auto'>
                                <label className="my-3">Name</label>
                            </div>
                            <div className='col-8'>
                                <input type="text" autoComplete="off" value={name} className="form-control my-3 rounded" placeholder="Name" onChange={(e) => {
                                    setName(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 my-auto'>
                                <label className="my-3">Username</label>
                            </div>
                            <div className='col-8'>
                                <input type="text" autoComplete="off" value={username} className="form-control my-3 rounded" placeholder="Username" disabled />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 my-auto'>
                                <label className="my-3">E-mail</label>
                            </div>
                            <div className='col-8'>
                                <input type="text" autoComplete="off" value={email} className="form-control my-3 rounded" placeholder="E-mail" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 my-auto'>
                                <label className="my-3">Phone Number</label>
                            </div>
                            <div className='col-8'>
                                <input type="text" autoComplete="off" value={hp} className="form-control my-3 rounded" placeholder="Phone Number" onChange={(e) => {
                                    setHp(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 my-auto'>
                                <label className="my-3">Address</label>
                            </div>
                            <div className='col-8'>
                                <textarea className='w-100 form-control my-3 rounded' />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text-end mb-3'>
                    <button className='btn btn-outline-secondary mx-3' onClick={() => navigate('/profil')}>Cancel</button>
                    <button className='btn btn-primary btn-profile-save' onClick={() => updateProfile()}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;