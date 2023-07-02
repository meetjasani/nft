import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TheLayout from '../component/common/TheLayout';
import Aboutus from '../pages/Aboutus';
import Forgot from '../pages/auth/Forgot';
import Register from '../pages/auth/Register';
import Collection from '../pages/collections/Collection';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Portfoilo from '../pages/Portfoilo';
import SubmitCollection from '../pages/SubmitCollection';
import Transactions from '../pages/Transactions';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<TheLayout />}>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/collection" element={<Collection />} />
                    <Route exact path="/about" element={<Aboutus />} />
                    <Route exact path="/submitcollection" element={<SubmitCollection />} />
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route exact path="/portfoilo" element={<Portfoilo />} />
                    <Route exact path="/forgot" element={<Forgot />} />
                    <Route exact path="/register" element={<Register />} />
                </Route>
            </Routes>

        </>
    )
}

export default AppRouter