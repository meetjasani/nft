import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import main from '../../img/main.png'
import profile from '../../img/profile.png';
import { HiBars3, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io';


function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const location = useLocation();
    
    const [menu, setMenu] = useState(false);

    const [scroll, setScroll] = useState(false);

    const submitCollection = () => {
        setMenu(false)
        navigate('/submitcollection');
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    const handleClose = () => {
        setMenu(false)
    }
    const handleLogout = () => {
        localStorage.removeItem("user");
        setMenu(false)
    }
    return (
        <nav className={`navbar  navbar-expand-lg  px-4 navbar-light  ${scroll ? 'sticky-top bg-white  shadow' : ""}`} >
            <div className="container-fluid p-0">
                <Link to="/" className={`navbar-brand mt-2 mt-lg-0 `} >
                    <img
                        src={main}
                        className='rounded-circle'
                        style={{width:'38px'}}
                        alt=""
                        loading="lazy"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {
                        menu ?
                            <IoMdClose onClick={() => setMenu(!menu)} style={{ fontSize: "25px" }}></IoMdClose>
                            :
                            <HiBars3 onClick={() => setMenu(!menu)} style={{ fontSize: "25px" }} ></HiBars3>
                    }
                </button>
                <div className={menu === false ? "collapse justify-content-between navbar-collapse" : "collapse justify-content-between navbar-collapse show"} id="navbarSupportedContent" >
                    <input
                        className={`form-control me-2  rounded-pill search-bar ${scroll ? 'border' : ""}`}
                        type="search"
                        placeholder="Search..."
                        aria-label="Search" />

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-sm-4" >
                        <li className="nav-item">
                            <Link to='/' className={`nav-link fw-bold ${location.pathname === '/' ? 'active' : ""}`} onClick={handleClose}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/collection' className={`nav-link fw-bold ${location.pathname === '/collection' ? 'active' : ""}`} onClick={handleClose}>Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className={`nav-link fw-bold ${location.pathname === '/about' ? 'active' : ""}`} onClick={handleClose}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <button type="button"
                                className="green-btn rounded-pill text-light border-0 fw-bold"
                                style={{ width: "169px", padding: "9px", display: 'block', backgroundColor: '#645CBB', fontSize: "14px" }} onClick={submitCollection}
                            >Submit Collections</button>
                        </li>
                        <li>
                            <div className="custom-dropdown  dropdown ">

                                <button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img
                                        src={profile}
                                        className="rounded-circle"
                                        height="40"
                                        width="40"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </button>
                                <ul className=" dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
                                    {!user ? (
                                    <li><Link to="/login" className={`dropdown-item ${location.pathname === '/login' ? 'active' : ""}`} onClick={handleClose}><BiLogIn ></BiLogIn> Login</Link></li>
                                    ) : null}
                                    <li><Link to="/transactions" className={`dropdown-item ${location.pathname === '/transactions' ? 'active' : ""}`} onClick={handleClose}><HiOutlineSquares2X2  ></HiOutlineSquares2X2> Dashboard</Link></li>
                                    <li><Link to="/portfoilo" className={`dropdown-item ${location.pathname === '/portfolio' ? 'active' : ""}`} onClick={handleClose}><IoSettingsOutline   ></IoSettingsOutline> Settings</Link></li>
                                    {user ? (
                                    <li><Link to="/login" className={`dropdown-item ${location.pathname === '/login' ? 'active' : ""}`} style={{ color: "#E01E5A" }} onClick={handleLogout}><BiLogOut style={{ color: "#E01E5A" }} ></BiLogOut>Logout</Link></li>
                                    ) : null}
                                </ul>
                            </div>
                        </li>
                    </ul>


                </div>

            </div>
        </nav>
    )
}

export default Navbar