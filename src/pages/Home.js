import React from 'react'
import TopCollection from './TopCollection'
import TrendingCollection from './TrendingCollection'

function Home() {
    return (
        <>
            <div className='main-title' >

                <p className=' text-center banner-title ' ><span style={{ color: '#645CBB' }}>HELTER</span> RARITY TOOL<br /> FOUNDATION OF <span style={{ color: '#645CBB' }}> NFT <br /> </span>ANALYSIS</p>

                <p className='banner-text' >
                    Our marketplace is the world's first and largest NFT market <br /> for independent creators worldwide </p>

                <div className='button banner-btn-wrap d-flex justify-content-center align-item-center' >
                    <button type="button" className="green-btn border-0 me-2" >Explore Collections</button>
                    <button type="button" className="lightgreen-btn border-0" >
                        Get Listed
                    </button>
                </div>

            </div>
            <TrendingCollection />
            <TopCollection />
        </>
    )
}

export default Home