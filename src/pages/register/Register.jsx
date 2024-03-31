import "./register.css";
import { Link } from "react-router-dom";
import React from 'react';
import { useNavigate } from 'react-router-dom';



  const Register = ({ onRegister }) => {
    const navigate = useNavigate();

    const handleRegister = () => {
      // Perform registration logic

      // After successful registration, update authentication status and redirect to home page
      onRegister();
      navigate('/');
    };
    const handleLogin = () => {
      navigate('/login');
    };
    return (
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton" onClick={handleRegister}>Register</button>
      </form>
        <button className="registerLoginButton">
            <Link className="link" to="/login" onClick={handleLogin}>Already have an account? 
                LOGIN
            </Link>
        </button>
    </div>
    )
}
export default Register;