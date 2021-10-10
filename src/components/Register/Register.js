import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <br />
                    <input type="text" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Register" />
                    <br />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>------------or-------------</p>
                <button className="btn-regular">Google Sign-In</button>
            </div>
        </div>
    );
};

export default Register;