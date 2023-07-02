import React, { useState } from 'react'
import collection1 from '../../img/collection.png';
import Rectangle1 from '../../img/Rectangle1.png';
import Rectangle2 from '../../img/Rectangle2.png';
import Rectangle3 from '../../img/Rectangle3.png';
import Rectangle4 from '../../img/Rectangle4.png';
import Rectangle5 from '../../img/Rectangle5.png';
import Rectangle6 from '../../img/Rectangle6.png';
import Rectangle7 from '../../img/Rectangle7.png';
import Rectangle8 from '../../img/Rectangle8.png';
import Rectangle9 from '../../img/Rectangle9.png';
import chart1 from '../../img/chart1.png';
import caret from '../../img/caret.png';
import Bars from '../../img/Bars.png';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import MultiRangeSlider from '../../component/common/MultiRangeSlider';
import './checkbox.css'

function Collection() {
  const [active, setActive] = useState("2");
  const [heart, setHeart] = useState(false);
console.log(heart);
  const heartIcon = () =>{
    setHeart(!heart)
  }
  const handleClick = (event) => {
    setActive(event.target.id);
  }
  return (
    <div className='container'>
      <div className='position-relative mt-5' >
        <div className='collection-main-img '>
          <img src={require('../../img/collection_main.png')} />
          <div className='d-flex btn-wrap justify-content-end align-items-center position-absolute top-10 end-0' >
            <button type='button' className='rounded-pill bg-light  my-0 mx-1 ' >Add to wishlist</button>
            <button type='button' className='rounded-pill bg-light  my-0 mx-1 ' >88</button>
          </div>
        </div>
        <div className='avatar-img' >
          <img src={collection1} />
        </div>
      </div>
      <p className='mt-5 mb-3 text-center display-5 fw-bolder' >Floyd Miles</p>
      <small className=' text-center d-block  fw-bold mb-5' >@floydmiles</small>
      <small className=' text-center d-block fw-light mb-4' >created by Jenny Wilson</small>

      <div className='main-box d-flex'>
        <div className='neft-price'>
          <p className='neft-name'>Highest Sale</p>
          <span>$583.4K</span>
        </div>
        <div className='neft-price'>
          <p className='neft-name'>Floor price</p>
          <span>$23K</span>
        </div>
        <div className='neft-price'>
          <p className='neft-name'>Market Cap</p>
          <span>$73.6M</span>
        </div>
        <div className='neft-price'>
          <p className='neft-name'>Items</p>
          <span>$4.8K</span>
        </div>
        <div className='neft-price'>
          <p className='neft-name'>Owners</p>
          <span>$4.1K</span>
        </div>
        <div className='neft-price' >
          <p className='neft-name'>Total Volume</p>
          <span>$69.5M</span>
        </div>
      </div>
      <small className='d-block fw-light text-center mb-5' >8,888 NFTs of beautiful, Asian women painstakingly-crafted where even <br /> the most intricate details are steeped in historical significance.</small>
      <div className=' d-flex flex-wrap justify-content-center justify-content-sm-between align-item-center d-grid gap-3 mb-5'>

        <p className='border-0 me-4 fs-3 fw-bold' >Filters</p>
        <div className='collection-top-nav d-flex  flex-wrap align-items-center gap-2'>
          <button className={active === "1" ? "active me-3" : "rounded-pill text-dark fw-bold filter-btn me-3 "} id={1} onClick={handleClick}>Reset</button>
          <button className={active === "2" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={2} onClick={handleClick}>All</button>
          <button className={active === "3" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={3} onClick={handleClick}>Treding</button>
          <button className={active === "4" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={4} onClick={handleClick}>Collectibles</button>
          <button className={active === "5" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={5} onClick={handleClick}>Domain Names</button>
          <button className={active === "6" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={6} onClick={handleClick}>Music</button>
          <button className={active === "7" ? "active" : "rounded-pill text-dark fw-bold filter-btn"} id={7} onClick={handleClick}>Photography</button>
        </div>

        <button className="rounded-pill text-dark fw-bold sort-btn">Sort by</button>
      </div>

      <div className='row m-0 p-0'>
        <div className='col-xl-3  col-lg-4 col-md-6 col-sm-6 col-xs-12 p-0'>
          {/* status card start */}
          <div className='status-filter'>
            <p className='mb-4 fw-bolder ' >Status</p>
            <div className='d-flex btn-wrap flex-wrap justify-content-start align-items-center'>
              <button type="button" className=" me-1 mb-2 border-0" >Buy Now</button>
              <button type="button" className=" me-1 mb-2">On Auction</button>
              <button type="button" className=" me-1 mb-2" >Accept Offer</button>
              <button type="button" className=" me-1 mb-2" >New</button>
            </div>
          </div>
          {/* status card end */}

          {/* chains card start */}
          <div className='status-filter'>
            <p className='mb-4' >Chains</p>
            <div className='d-flex checkbox-wrap justify-content-between align-items-center mb-2' >
              <div className='d-flex align-items-center' >
                <input type="checkbox" name="a" className='me-2' />
                <label htmlFor="vehicle1"  > Ethereum</label>
              </div>
              <span className='active' >94</span>
            </div>
            <div className='d-flex checkbox-wrap justify-content-between align-items-center mb-2' >
              <div className='d-flex align-items-center' >
                <input type="checkbox" name="a" className='me-2' />
                <label htmlFor="vehicle1"  > Flow</label>
              </div>
              <span  >289</span>
            </div>
            <div className='d-flex checkbox-wrap justify-content-between align-items-center mb-2' >
              <div className='d-flex align-items-center' >
                <input type="checkbox" name="a" className='me-2' />
                <label htmlFor="vehicle1"  > Tezos</label>
              </div>
              <span  >84</span>
            </div>
          </div>
          {/* chains card end */}

          {/* price card start */}
          <div className='status-filter'>
            <p className='mb-4' >Price</p>
            <img src={Bars} />
            <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: '67px', overflow: "hidden", marginBottom: "10px" }}>
              <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
              />
            </div>
          </div>
          {/* price card end */}

          {/* Primary colors card end */}
          <div className='sidebar-filter'>
            <p className='mb-4' >Primary</p>
          </div>
          {/* Primary colors card end */}

          {/* Background card start */}
          <div className='sidebar-filter'>
            <p className='mb-4' >Background</p>
          </div>
          {/* Background card end */}

        </div>

        {/* card start */}
        <div className='col-xl-9 col-lg-8 col-md-6 col-sm-6 col-xs-12 p-0'>
          <div className='row m-0 p-0 '>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle1} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon' onClick={heartIcon}>{heart ?<AiOutlineHeart  ></AiOutlineHeart>: <AiFillHeart></AiFillHeart>}</div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle2} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle3} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle4} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle5} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle6} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle7} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle8} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='cards-filter'>
                <div className='img-wrap'>
                  <img src={Rectangle9} />
                </div>
                <div className='d-flex flex-grow-1 justify-content-end align-items-center position-absolute top-18 end-0' >
                  <div className='timers'>2h 4m 32s</div>
                  <div className='heart-icon'><AiOutlineHeart  ></AiOutlineHeart></div>
                </div>
                <div className=' px-2' >
                  <p className='card-name'>Dayco Serpentine Belt</p>
                  <p className='card-by-name'>By Marvin McKinney</p>
                  <div className='d-flex current-bid-wrap justify-content-between align-items-center'>
                    <div>
                      <p>Current Bid</p>
                      <div className='d-flex align-items-center'>
                        <span><img src={caret} /></span>
                        <h5 >18,99 ETH</h5> </div>
                    </div>
                    <button type="button" className=" border-0" >Place a Bid</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <button type="button" className='outline-btn'  >Load More </button>

        </div>
        {/* card end */}
      </div>

    </div>
  )
}

export default Collection