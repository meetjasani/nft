import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function TheLayout() {
    return (
        <>
            <div className='home-bg'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
export default TheLayout;

