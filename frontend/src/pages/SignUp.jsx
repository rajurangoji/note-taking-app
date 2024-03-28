import React, { useState } from 'react';

function SignUp() {
    const [signUpValues, setSignUpValues] = useState({
        email: '',
        username: '',
        password: '',
    })

    const handelchange = (e) => {
        const signUpdata = { ...signUpValues, [e.target.name]: e.target.value }
        setSignUpValues(signUpdata)

    }
    const handelsubmit = (e) => {
        e.preventDefault();
        console.log(signUpValues)
    }

    return (
        <div className="container mt-5">
            <div className="p-5 shadow rounded">
                <h2>Sign Up</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name='email'
                            onChange={handelchange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            name='username'
                            onChange={handelchange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            name='password'
                            onChange={handelchange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handelsubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
