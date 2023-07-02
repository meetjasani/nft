import React, { useState } from 'react'
import eth from '../img/eth.png'
import ape from '../img/ape.png'
import looks from '../img/looks.png'
import usdc from '../img/usdc.png'
import usdt from '../img/usdt.png'
import dai from '../img/dai.png'
import wallet from '../img/wallet.png'
import image from '../img/image7.png'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbArrowsSort } from 'react-icons/tb'
import { HiOutlineFilter } from 'react-icons/hi'
import { MdRefresh } from 'react-icons/md'
import BootstrapTable from 'react-bootstrap-table-next'
// import { Select } from 'antd';
import Select from 'react-select';
import ToggleSwitch from '../component/ToggleSwitch'

function Portfoilo() {

    const [active, setActive] = useState("1");

    const handleClick = (event) => {
        setActive(event.target.id);
    }
    // selector
    const [selectedOption, setSelectedOption] = useState(null);
    const colourOptions = [
        { value: 'Black', label: 'Black' },
        { value: 'White', label: 'White' },
        { value: 'Red', label: 'Red' },
        { value: 'Blue', label: 'Blue' },
        { value: 'Brown', label: 'Brown' },
        { value: 'Silver', label: 'Silver' },
        { value: 'Red with black roof', label: 'Red with black roof' },
    ];
    // selector over

    const ProfileFormatter = (cell, row) => {
        return (
            <>
                <span className='project-name'>{cell}</span>
            </>
        );
    }
    const DaygainFormatter = (cell, row) => {
        return (
            <>
                <span className='day-gain'>{cell}</span>
            </>
        );
    }
    const fontSizeFormatter = (cell, row) => {
        return (
            <>
                <span className='all-fonts'>{cell}</span>
            </>
        );
    }

    const columns = [{
        dataField: 'project',
        text: 'Project',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort><HiOutlineFilter style={{ fontSize: '15px' }}></HiOutlineFilter></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort><HiOutlineFilter style={{ fontSize: '15px' }}></HiOutlineFilter></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort><HiOutlineFilter style={{ fontSize: '15px' }}></HiOutlineFilter></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
            height: "42px",
            paddingLeft: '19px'
        },
        formatter: ProfileFormatter
    }, {
        dataField: 'daygain',
        text: 'Day Gain',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: DaygainFormatter
    }, {
        dataField: 'day',
        text: 'Day %',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',

        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'price',
        text: 'Price',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'chg',
        text: 'Chg $',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'chgs',
        text: 'Chg %',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'marketvalue',
        text: 'Market Value',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'gain',
        text: 'Gain $',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'cost',
        text: 'Cost',
        sort: true,
        sortCaret: (order, column) => {
            if (!order) return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'asc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            else if (order === 'desc') return (<span>&nbsp;&nbsp;<TbArrowsSort style={{ fontSize: '15px' }}></TbArrowsSort></span>);
            return null;
        },
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
    }, {
        dataField: 'costper',
        text: 'Cost Per Token',
        headerStyle: {
            color: ' #4D53E3',
            fontSize: '12px',
            fontWeight: '600',
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#4D53E3',
        },
        formatter: fontSizeFormatter,
        align: 'center',
        headerAlign: 'center'
    }
    ];


    const products = [
        { project: 'Cold Fusion', daygain: 'ORIG ID:32...', day: 'day', price: '200', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Bitter Laser', daygain: 'ORIG ID:32...', day: 'bay', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Kodiak', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Linkage', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Mustangs', daygain: 'ORIG ID:32...', day: 'day', price: '500', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'RuddyRex', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Quicksilver', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'WhiteJacks', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'The Network', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Aurora', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Zynga', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
        { project: 'Strategic Program', daygain: 'ORIG ID:32...', day: 'day', price: 'price', chg: 'chg$', chgs: 'chg%', marketvalue: 'Market Value', gain: 'Gain$', cost: 'cost', costper: 'Cost Per Token' },
    ]


    return (
        <>
            <div className='container'>
                <div className='d-flex flex-wrap gap-2 justify-content-between align-items-center'>
                    <div className=' d-flex flex-wrap gap-2 currency-name'>
                        <div className='d-flex align-items-center gap-1'>
                            <img className='l-3' src={eth} alt="price" />
                            <p className='pf-price'><span>ETH</span> $1.140</p>
                        </div>
                        <div className='d-flex  align-items-center gap-1'>
                            <img src={ape} alt="price" />
                            <p className='pf-price'><span>APE</span> $5.04</p>
                        </div>
                        <div className='d-flex  align-items-center gap-1'>
                            <img src={looks} alt="price" />
                            <p className='pf-price'><span>LOOKS</span> $0.35</p>
                        </div>
                        <div className='d-flex  align-items-center gap-1'>
                            <img src={usdc} alt="price" />
                            <p className='pf-price'><span>USDC</span> $00.3005</p>
                        </div>
                        <div className='d-flex  align-items-center gap-1'>
                            <img src={usdt} alt="price" />
                            <p className='pf-price'><span>USDT</span> $0.35</p>
                        </div>
                        <div className='d-flex  align-items-center gap-1'>
                            <img src={dai} alt="price" />
                            <p className='pf-price'><span>DAI</span> $1.140</p>
                        </div>
                    </div>
                    <div className='d-flex gap-2 portfoilo-select'>
                        <div className='d-flex align-items-center gap-2 ' >
                            <span>$</span>
                            <select id="cars" name="carlist" form="carform" className='currency-select'>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='d-flex profile-wallet justify-content-center align-items-center gap-2'>
                            <img src={wallet} alt="price" />
                            <p>0x33...6fed</p>
                        </div>
                    </div>
                </div>
                <div className='main-card-four d-flex flex-wrap gap-2 mt-3' >
                    <div className='card-total'>
                        <p className='name-total'>Total Assets</p>
                        <p className='price-total d-flex'>565<span className='align-items-center d-flex' style={{ color: '#4D53E3' }}><MdOutlineWatchLater ></MdOutlineWatchLater></span></p>
                    </div>
                    <div className='card-total'>
                        <p className='name-total'>Total Value</p>
                        <p className='price-total d-flex'><span className='align-items-center d-flex'><img src={image} alt="price" /></span>95.69 ($110,827)</p>
                    </div>
                    <div className='card-total'>
                        <p className='name-total'>Total Cost</p>
                        <p className='price-total d-flex'><span className='align-items-center d-flex'><img src={image} alt="price" /></span>95.69 ($110,827)</p>
                    </div>
                    <div className='card-total'>
                        <p className='name-total'>Total Net</p>
                        <p className='price-total d-flex'><span className='align-items-center d-flex'><img src={image} alt="price" /></span>95.69 ($110,827)</p>
                    </div>
                </div>
                {/* toggle start */}


                <div className='d-flex flex-wrap gap-2 mt-3 mt-sm-5'>
                    <div class="  d-flex portfoilo-three-btn me-4">
                        <button
                            type="button"
                            className={active === "1" ? " w-100 border-0 p-0 active  " : "bg-transparent p-0 w-100  "}
                            onClick={handleClick}
                            id={1}
                        >Portfolio</button>
                        <button
                            type="button"
                            className={active === "2" ? " w-100 border-0 p-0 active " : "bg-transparent p-0 w-100 "}
                            onClick={handleClick}
                            id={2}
                        >Activity</button>
                        <button
                            type="button"
                            className={active === "3" ? " w-100 border-0 p-0 active" : "bg-transparent w-100 p-0 "}
                            onClick={handleClick}
                            id={3}
                        >Listings</button>
                    </div>
                    <div className='d-flex flex-wrap gap-2 align-items-center  justify-content-sm-center justify-content-start gap-2' >

                        <ToggleSwitch
                            label={"Hide Totals"}
                            uncheckedIcon={'off'}
                            checkedIcon={'on'}
                        />

                        <ToggleSwitch
                            label={"Show Trait Details"}
                            uncheckedIcon={'off'}
                            checkedIcon={'on'}
                        />

                        <ToggleSwitch
                            label={"Show Trait Details"}
                            uncheckedIcon={'off'}
                            checkedIcon={'on'}
                        />
                        <div className='select-totals'>
                            <p style={{ fontSize: '12px' }}>7 Token(s) Included in Totals</p>
                        </div>
                    </div>

                </div>
                {/* toggle end */}
                <div className='d-flex flex-wrap gap-2 gap-sm-3 selected-different'>
                    <div className='w-100' style={{ maxWidth: "567px" }} >
                        <Select
                            defaultValue={[colourOptions[2], colourOptions[3]]}
                            isMulti
                            name="colors"
                            className="basic-multi-select"
                            classNamePrefix="select"
                            options={colourOptions}
                        />
                    </div>
                    <button type="button" className='d-flex justify-content-center align-items-center refresh' onClick={()=> window.location.reload(true)}>
                        <MdRefresh style={{ fontSize: '16px', marginRight: '9px' }}></MdRefresh>Refresh Floors/Traits
                    </button>
                    <div className=" border-1 d-flex portfoilo-avg-btn">
                        <button
                            type="button"
                        // onClick={handleClick}
                        // id={1}
                        >Portfolio</button>
                        <button
                            type="button"
                        // onClick={handleClick}
                        // id={2}
                        >Trails</button>
                        <button
                            type="button"
                        // onClick={handleClick}
                        // id={3}
                        >Avg</button>
                    </div>
                    <div className='search-input'>
                        <input type="type" placeholder='Enter Collection Slug' />
                    </div>
                    <button type="button" className='add-watchlist'>
                        Add to Watchlist
                    </button>
                </div>
                <div>
                    <BootstrapTable
                        keyField='id'
                        striped
                        bordered={false}
                        data={products}
                        columns={columns}
                        headerClasses="portfolio-header"
                        wrapperClasses="portfolio-table table-responsive full-width"
                    />
                </div>
            </div>
        </>
    )
}

export default Portfoilo