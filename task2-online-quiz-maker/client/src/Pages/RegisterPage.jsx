import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners'
import axios from 'axios';
import { key } from "../key.js"
import { notification } from 'antd';


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email,
            phone,
            password
        }
        try {
            await axios.post(`${key}/api/user/register-user`, data);
            notification.success({
                message: 'Success',
                description: 'Register successfully!'
            });
            setTimeout(() => {
                setLoading(false)
                navigate('/login');
            }, 2000);
        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'Register failed!'
            });
            setLoading(false);
        }
    }
    return (
        <>
            {loading && <div className="loading-spinner">
                <HashLoader color="#FF4F6C" />
            </div>}
            <div className="font-rubik min-h-screen flex items-center justify-center bg-background">
                <div className="bg-white shadow-md rounded px-8 py-6 sm:p-10 w-full sm:w-[500px]">
                    <h2 className="text-2xl text-primary text-center">Register as User</h2>
                    <div className="text-lg my-6 text-center">
                        Wants to register your company?
                        <Link className='hover:underline hover:text-primary text-blue-800' to='/register-company' > Register</Link>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Phone
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='text-center'>
                        Already have an account? <Link className='hover:underline hover:text-primary text-blue-800' to='/login'>Login</Link>
                    </div>

                    <div className="flex items-center mt-10 justify-between">
                        <button
                            className="button-filled"
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
