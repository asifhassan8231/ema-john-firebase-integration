import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { error, googleSignIn } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <h3>{error}</h3>
                <form >
                    <input type="text" placeholder="Your Email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Login" />
                    <br />
                </form>
                <p>New to ema-john? <Link to="/register">Register</Link></p>
                <p>------------or-------------</p>
                <button className="btn-regular" onClick={googleSignIn}>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;