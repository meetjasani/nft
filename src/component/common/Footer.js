import React from 'react'
import footer from '../../img/footer.png'

function Footer() {
    return (
        <div className=' d-flex flex-wrap justify-content-between align-items-center footer-main'>
            <div className='d-flex flex-wrap  align-items-center gap-4' style={{ fontSize: '12px' }}>
                <span className='fw-bold'>Privacy Policy</span>
                <span className='fw-bold'>Licence</span>
                <span className='fw-bold'>API</span>
                <span>© 2023 All rights reserved</span>
            </div>
            <div className='d-flex align-items-center gap-4'>
                <span>English</span>
                <div className='rounded-pill overflow-hiden footer-img'>
                    <img src={footer} alt="logo" />
                </div>
            </div>

        </div>
    )
}

export default Footer