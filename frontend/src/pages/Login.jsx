import React from 'react';

function Login() {
    return (
        <div className="container mt-5 shadow    p-5">
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <a href="#" className="ms-2">Forgot Password?</a>
            </form>
        </div>
    );
}

export default Login;
