import React from 'react'
import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'

function Header() {
    return (
        <div className='d-flex align-items-center justify-content-around shadow rounded p-2'>
            <h2>Note taking Application</h2>
            <div className='d-flex mb-3'>
                <LoginButton/>
                <SignUpButton/>
            </div>
        </div>
    )
}

export default Header
