// import React from 'react'
// import Mask from '../img/Mask.png'
// import profile from '../img/profile.png'
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light" style={{padding:'9px 28px'}}>

//             <div className="container-fluid">
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-mdb-toggle="collapse"
//                     data-mdb-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <i className="fas fa-bars"></i>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <a className="navbar-brand mt-2 mt-lg-0" href="#">
//                         <img
//                             src={Mask}
//                             className='rounded-circle'
//                             alt=""
//                             loading="lazy"
//                         />
//                     </a>
//                     <input className="form-control me-2  rounded-pill" style={{ maxWidth: "519px", width: "100%", backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: "9px 48px", fontSize: "14px", fontWeight: "400", color: "#5D5D5B", border: "0px" }} type="search" placeholder="Search items, collections, and accounts" aria-label="Search" />
//                 </div>

//                 <div className="d-flex align-items-center gap-5">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4" >
//                         <li className="nav-item">
//                             <a className="nav-link fw-bold" style={{color:'#000000'}} href="/">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link fw-bold" style={{color:'#5D5D5B'}} href="/collection">Collection</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link fw-bold" style={{color:'#5D5D5B'}}  href="/about">About Us Pages</a>
//                         </li>
//                         <li className="nav-item">
//                             <button type="button" className=" rounded-pill text-dark border-0 fw-bold" style={{ width: "169px", padding: "9px", display: 'block', backgroundColor: '#3FF2A7', fontSize: "14px" }} href="#">Submit Collections</button>
//                         </li>
//                     </ul>
//                     <div className="dropdown">
//                         <img
//                             src={profile}
//                             className="rounded-circle"
//                             height="40"
//                             width="40"
//                             alt="Black and White Portrait of a Man"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar