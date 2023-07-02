import React from 'react'
import aboutmain from '../img/aboutmain.png';
import Group from '../img/Group.png';
import about2 from '../img/about2.png';
import about3 from '../img/about3.png';
import about4 from '../img/about4.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Aboutus() {

  return (
    <>
      <div className='container '>
        <div className='about-title text-center'>
          <h4 className='fw-bold '>About Us</h4>
          <p>Our marketplace is the world's first and largest NFT market<br /> for independent creators worldwide </p>
        </div>
        <div className='about-img'>
          <img src={aboutmain} alt="member" />
        </div>
        <div className='row m-0 d-flex align-items-center '>
          <div className='col-xl-6 col-lg-6  col-md-12 col-sm-12 p-0 about-sub-title'>
            <h4 className='fw-bold'>National electronic fund <br />to  your business</h4>
            <p>National Electronic Fund Transfer is one of the most prominent electronic fund transfer systems of India. NEFT was introduced in November 2005, and it is a facility provided to bank customers to enable them to transfer funds quickly and securely to one account to another account. It is a nationwide payment system facilitating safe and secure transaction all over the country. In this article, we view the various aspects of NEFT in detail.</p>
          </div>
          <div className='col-xl-6  col-lg-6 col-md-12 col-sm-12 p-0 ' >
            <div className='about-sub-image'>
              <img src={Group} alt="member" />
            </div>
          </div>
        </div>

        <div className='text-center about-member-card'>
          <h4 className='fw-bold'>Meet Our Member</h4>
          <p>Co-ordinate campaigns and product launches, with <br />improved overall communication. </p>
        </div>

        <div className='row m-0  p-0'  >
          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 text-center'>
            <div className='card-custom'>
              <div className='w-100 h-100 overflow-hidden'>
                <img src={about2} alt="member" />
              </div>

              <div className='member-det'>
                <h6 className='member-name'>Claire Divas</h6>
                <h6 className='member-state' >United States</h6>
                <div className='d-flex justify-content-center align-items-center mb-3 social-media-icons'>
                  <div className="icon social-image">
                    <FaFacebookF></FaFacebookF>
                  </div>
                  <div className="icon social-image">
                    <FaTwitter></FaTwitter>
                  </div>
                  <a href="https://www.instagram.com/accounts/login/">
                    <div className="icon social-image">
                      <FaInstagram></FaInstagram>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/accounts/login/">
                    <div className="icon social-image">
                      <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 text-center'>
            <div className='card-custom'>
              <div className='w-100 h-100 overflow-hidden'  >
                <img src={about3} alt="member" />
              </div>

              <div className='member-det'>
                <h6 className='member-name'>Karla Vogel</h6>
                <h6 className='member-state' >United States</h6>
                <div className='d-flex justify-content-center align-items-center mb-3 social-media-icons'>
                  <div className="icon social-image">
                    <FaFacebookF></FaFacebookF>
                  </div>
                  <div className="icon social-image">
                    <FaTwitter></FaTwitter>
                  </div>
                  <div className="icon social-image">
                    <FaInstagram></FaInstagram>
                  </div>
                  <div className="icon social-image">
                    <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 text-center'>
            <div className='card-custom'>
              <div className='w-100 h-100 overflow-hidden  '  >
                <img src={about4} alt="member" />
              </div>

              <div className='member-det'>
                <h6 className='member-name'>Jenifer Vasquez</h6>
                <h6 className='member-state' >United States</h6>
                <div className='d-flex justify-content-center align-items-center mb-3 social-media-icons'>
                  <div className="icon social-image">
                    <FaFacebookF></FaFacebookF>
                  </div>
                  <div className="icon social-image">
                    <FaTwitter></FaTwitter>
                  </div>
                  <div className="icon social-image">
                    <FaInstagram></FaInstagram>
                  </div>
                  <div className="icon social-image">
                    <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus