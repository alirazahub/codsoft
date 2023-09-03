import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners'
import axios from 'axios';
import { key } from "../key.js"
import { useCookies } from 'react-cookie';
import { notification } from 'antd';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['x-auth-token']);

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.post(`${key}/api/user/login`, { email, password })
            setCookie('x-auth-token', res.data.token, { path: '/', maxAge: 60 * 60 * 24 * 7 })
            setEmail('');
            setPassword('');
            setLoading(false);
            navigate('/');
        } catch (error) {
            setLoading(false);
            notification.error({
                message: 'Error',
                description: error.response.data.message
            });
        }
    }
    return (
        <>
            {loading && <div className="loading-spinner">
                <HashLoader color="#FF4F6C" />
            </div>}
            <div className="font-rubik min-h-screen flex items-center justify-center bg-background">
                <div className="bg-white shadow-md rounded px-8 py-6 sm:p-10 w-full sm:w-96">
                    <h2 className="text-2xl text-primary text-center">Login</h2>
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
                        Don't have an account? <Link className='hover:underline hover:text-primary text-blue-800' to='/register'>Register</Link>
                    </div>
                    <div className="flex items-center mt-10 justify-between">
                        <button
                            className="button-filled"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
