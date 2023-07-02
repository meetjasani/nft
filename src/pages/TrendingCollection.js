import React from 'react'
import zz1 from '../img/zz1.jpg';
import zz2 from '../img/zz2.png';
import zz3 from '../img/zz3.png';
import zz4 from '../img/zz4.png';
// import Art1 from '../img/Art1.png'
// import Art2 from '../img/Art2.png'
// import Art3 from '../img/Art3.png'
import Art4 from '../img/Art4.png'
import Art5 from '../img/Art5.png'
import Art6 from '../img/Art6.png'
import Art7 from '../img/Art7.png'
import Art8 from '../img/Art8.png'
import card2 from '../img/card2.png';
import { CgArrowLeftR } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function TrendingCollection() {
    return (
        <div className='container'>
            <div className=' d-flex gap-2 flex-wrap justify-content-center justify-content-md-between align-item-center mb-4'>

                <p className='text-dark border-0 fw-bold fs-4 '>TrendingCollection</p>

                <div className='d-flex trending-btn-wrap  justify-content-center justify-content-md-end align-item-center gap-3'>
                    <button type="button" className="rounded-pill text-dark fw-bold bg-transparent"><CgArrowLeftR className={'me-2 fs-5'} ></CgArrowLeftR>Apply Filter</button>
                    <button type="button" className="rounded-pill text-dark fw-bold bg-transparent">Sort by</button>
                </div>
            </div>
            <div>
                <div className="row m-0 g-4">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={zz1} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={zz2} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={zz3} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={Art4} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={Art5} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={Art6} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={Art7} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <Link to="/collection" className=" collection-card card  border" >
                            <img src={Art8} className="card-img-top" />
                            <div className='avatar'  >
                                <img src={card2} />
                            </div>
                            <div className="card-body">
                                <div className='card-name text-center' style={{ marginTop: '12px' }}>
                                    <span className="card-title fw-bold" >Debra</span>
                                    <p className="card-text" >By Helter</p>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
                <button type="button" className="lightgreen-btn load-more-btn d-block border-0" >Load More</button>


            </div>
        </div>
    )
}

export default TrendingCollection