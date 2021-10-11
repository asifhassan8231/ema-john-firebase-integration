import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { error, googleSignIn, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message);
            })
    }
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
                <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;