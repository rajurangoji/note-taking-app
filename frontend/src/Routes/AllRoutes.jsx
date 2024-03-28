import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Header from '../components/Header'

function AllRoutes() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes
