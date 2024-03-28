import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function LoginButton() {
    const navigate = useNavigate();
    const handelLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <Button variant="contained" className='me-5' onClick={handelLogin}>Login</Button>
        </div>
    )
}

export default LoginButton
