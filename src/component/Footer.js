import React from 'react'
import footer from '../img/footer.png'
function Footer() {
    return (
        <div className='footer-main d-flex justify-content-between align-items-center' style={{ background: 'rgba(235, 240, 240, 0.5)', height: '86px', paddingLeft: '32px' }}>
            <div className='d-flex align-items-center gap-4' style={{ fontSize: '12px' }}>
                <span className='fw-bold'>Privacy Policy</span>
                <span className='fw-bold'>Licence</span>
                <span className='fw-bold'>API</span>
                <span>© 2023 All rights reserved</span>
            </div>
            <div className='d-flex align-items-center gap-4'>
                <span>English</span>
                <div className=''>
                    <img src={footer} />
                </div>
            </div>

        </div>
    )
}

export default Footer