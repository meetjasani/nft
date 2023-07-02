import React from 'react'

function SubmitCollection
    () {
    return (
        <div className='container '>
            <div className='login-section'>

                <div className='flex-grow-1 py-5  '>
                    <div className='login-title'>
                        <h4 className='fw-bold fs-1 lh-lg text-center mb-1'>Submit Collections</h4>
                        <p ><span className='text-danger'>*</span> Required fields</p>
                    </div>

                    <div className='input-div-wrap'>
                        <p className='collection-info mt-5'>Collection Info</p>
                        <div className='collection-address'>
                            <label>Collection Address<span className='text-danger'>*</span> </label>
                            <input
                                type="text"
                                className='border-0 px-4'
                                placeholder='Collection Address'
                            />
                            <button type="button" className="green-btn border-0 me-2" >Submit</button>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default SubmitCollection
