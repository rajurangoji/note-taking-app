import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

function SignUpButton() {
    const navigate = useNavigate();
    const handelSignUp = () => {
        navigate('/signup')
    }
    return (
        <div>
            <Button variant="contained" onClick={handelSignUp}>Sign Up</Button>

        </div>
    )
}

export default SignUpButton
