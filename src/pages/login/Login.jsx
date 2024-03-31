import React, { useState } from 'react';
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook

    const handleLogin = () => {
        // Simulated authentication
        // In a real application, you would send a request to your backend for authentication
        // Upon successful authentication, you would receive a token from the server
        // Here, we are just setting isAuthenticated to true to simulate login
        onLogin();
        navigate('/'); // Redirect to the home page after successful login
    };

    return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." />
        <button className="loginButton" onClick={handleLogin}>Login</button>
    </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">REGISTER</Link>
        </button>    
    </div>
    );
}